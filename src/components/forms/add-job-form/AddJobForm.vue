<script setup lang="ts">
import { ref, computed } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import EditorMenubar from '@/components/forms/plugins/editor/EditorMenubar.vue';

const props = defineProps(['userData', 'industries', 'jobTypes', 'remoteTypes', 'states']);
const emit = defineEmits(['postJob']);

const userId = ref(props.userData.id);

const remoteSelect = ref('');
const categoriesSelect = ref([]);
const jobTypeSelect = ref('');
const selectedState = ref('');
const inputCity = ref('');

const categories = ref(props.industries);
const remoteTypes = ref(props.remoteTypes);
const jobTypes = ref(props.jobTypes);
const states = ref(props.states);

const name = ref('');
const totalBonus = ref();
const bottomSalary = ref();
const resumePassBonus = ref();
const topSalary = ref();
const expirationDate = ref('');
const interviewBonus = ref();
const skill = ref('');


const rules = {
  requiredRule: (val) => !!val || 'Requried',
  positiveRule: (val) => val >= 0 || `Input should be a positive number`,
  numberRule: (val) => {
    // Remove any non-numeric characters from the input
    val = val.replace(/[^0-9.]/g, '');

    // Check if the input is a valid number
    if (isNaN(val) || val.trim() === '') {
      return 'Please enter a valid number.';
    } else {
      return true;
    }
  }
};

const jdContent = ref(`
<p>[The introduction about the role, company and team]</p>
<p></p>
<h5>Role objectives</h5>
<ul>
  <li><p>...</p></li>
  <li><p>...</p></li>
</ul>
<p></p>
<h5>Role responsibilities</h5>
<ul>
  <li><p>...</p></li>
  <li><p>...</p></li>
</ul>
      `)

const crContent = ref(`
<p></p>
<h5>Required skills and qualifications</h5>
<ul>
  <li><p>...</p></li>
  <li><p>...</p></li>
</ul>
<p></p>
<h5>Advanced skills and qualifications</h5>
<ul>
  <li><p>...</p></li>
  <li><p>...</p></li>
</ul>
      `)

const skillEditor = useEditor({
  extensions: [StarterKit],
  content: crContent.value,
  onUpdate: ({ editor }) => {
    crContent.value = editor.getHTML();
  }
});

const editor = useEditor({
  extensions: [StarterKit],
  content: jdContent.value,
  onUpdate: ({ editor }) => {
    jdContent.value = editor.getHTML();
  }
});

const locationCal = ((state: string, city: string) => {
  return state + ', ' + city;
});
</script>

<template>
  <v-form @submit.prevent="emit('postJob', name, jobTypeSelect, remoteSelect, categoriesSelect, locationCal(selectedState, inputCity), 
                                expirationDate, totalBonus, bottomSalary, topSalary, userId, editor?.getHTML(), skillEditor?.getHTML())">
    <v-row>
      <v-col cols="6" sm="6">
        <v-label class="mb-2 font-weight-medium">Job title</v-label>
        <v-text-field variant="outlined" placeholder="Head of HR management" color="primary" v-model="name"
          :rules="[rules.requiredRule]"></v-text-field>
        <v-label class="mb-2 font-weight-medium">Remote type</v-label>
        <v-select :items="remoteTypes" :item-title="[1]" :item-value="[0]" single-line
          variant="outlined" v-model="remoteSelect"></v-select>
        <v-label class="mb-2 font-weight-medium">State</v-label>
        <v-select v-model="selectedState" :items="states"/>
        <v-label class="mb-2 font-weight-medium">Total bonus</v-label>
        <v-text-field variant="outlined" color="primary" v-model="totalBonus" prefix="$" type="number" placeholder="0.00"
          :rules="[rules.requiredRule, rules.positiveRule]"></v-text-field>
        <v-label class="mb-2 font-weight-medium">Bottom salary</v-label>
        <v-text-field color="primary" v-model="bottomSalary" prefix="$" type="number" placeholder="0.00" 
          :rules="[rules.requiredRule, rules.positiveRule]"></v-text-field>
        <!-- <v-label class="mb-2 font-weight-medium">Interview bonus</v-label>
        <v-text-field variant="outlined" color="primary" v-model="interviewBonus"
          :rules="[rules.requiredRule, rules.positiveRule]"></v-text-field> -->
      </v-col>
      <v-col cols="6" sm="6">
        <v-label class="mb-2 font-weight-medium">Job Category</v-label>
        <v-select :items="categories" item-title="categories" item-value="abbr" return-object single-line
          variant="outlined" v-model="categoriesSelect" :multiple=true></v-select>
        <v-label class="mb-2 font-weight-medium">Job type</v-label>
        <v-select :items="jobTypes" :item-title="[1]" :item-value="[0]" single-line variant="outlined"
          v-model="jobTypeSelect"></v-select>
        <v-label class="mb-2 font-weight-medium">City</v-label>
        <v-text-field variant="outlined" color="primary" v-model="inputCity"
          :rules="[rules.requiredRule]"></v-text-field>
        <v-label class="mb-2 font-weight-medium">Expiration date</v-label>
        <v-text-field variant="outlined" type="date" color="primary" v-model="expirationDate"
          :rules="[rules.requiredRule]"></v-text-field>
        <v-label class="mb-2 font-weight-medium">Top Salary</v-label>
        <v-text-field variant="outlined" color="primary" v-model="topSalary" prefix="$" type="number" placeholder="0.00"
          :rules="[rules.requiredRule, rules.positiveRule]"></v-text-field>
        <!-- <v-label class="mb-2 font-weight-medium">Resume pass bonus</v-label>
        <v-text-field variant="outlined" color="primary" v-model="resumePassBonus"
          :rules="[rules.requiredRule, rules.positiveRule]"></v-text-field> -->
      </v-col>
      <v-col cols="12" sm="12">
        <div class="container">
          <v-label class="mb-2 font-weight-medium">Job description</v-label>
        </div>
        <div class="editorArea">
          <v-card variant="outlined">
            <div v-if="editor">
              <EditorMenubar :editor="editor" />
            </div>
            <editor-content :editor="editor" v-model="skill"/>
          </v-card>
        </div>
      </v-col>
      <v-divider class="my-2"></v-divider>
      <v-col cols="12" sm="12">
        <div class="container">
          <v-label class="mb-2 font-weight-medium">Candidate requirements</v-label>
        </div>
        <div class="editorArea">
          <v-card variant="outlined">
            <div v-if="editor">
              <EditorMenubar :editor="skillEditor" />
            </div>
            <editor-content :editor="skillEditor" />
          </v-card>
        </div>
      </v-col>
      
    </v-row>
    <v-btn type="submit" color="success" class="my-4">post</v-btn>
  </v-form>
</template>


<style>
.container {
  display: flex;
  flex-direction: column;
  /* Stack elements vertically */
  align-items: flex-start;
  /* Align items to the start of the container */
}

.editorArea {
  display: inline-flex;
  /* Display as inline flex */
  flex-flow: column wrap;
  /* Wrap elements when they reach the bottom */
  align-content: flex-start;
  /* Align content to the start */
  height: 100%;
  /* Set height to 100% to expand vertically */
}

.stateSelect {
  height: 40px;

}
</style>