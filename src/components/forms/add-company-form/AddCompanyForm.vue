<script setup lang="ts">
import { ref } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import EditorMenubar from '@/components/forms/plugins/editor/EditorMenubar.vue';
import StarterKit from '@tiptap/starter-kit';
const props = defineProps(['userData', 'states']);
const emit = defineEmits(['addCompany']);

const userId = ref(props.userData.id);
const selectedState = ref('');
const inputCity = ref('');
const states = ref(props.states);
const name = ref('');
const companySize = ref();
const url = ref('');
const logoUrl = ref('');




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
const descContent = ref(`
<p>[The introduction about company]</p>
<p></p>
<h5>Company mission</h5>
<ul>
  <li><p>...</p></li>
  <li><p>...</p></li>
</ul>
<p></p>
      `);

const descEditor = useEditor({
  extensions: [StarterKit],
  content: descContent.value,
  onUpdate: ({editor}) => {
    descContent.value = editor.getHTML();
  }
});
const locationCal = ((state: string, city: string) => {
  return state + ', ' + city;
});
</script>

<template>
  <v-form @submit.prevent="emit('addCompany', name, url, locationCal(selectedState, inputCity), companySize, logoUrl, descEditor?.getHTML(), userId)">
    <v-row>
      <v-col cols="6" sm="6">
        <v-label class="mb-2 font-weight-medium">Company name</v-label>
        <v-text-field variant="outlined" placeholder="name" color="primary" v-model="name"
          :rules="[rules.requiredRule]"></v-text-field>
        <v-label class="mb-2 font-weight-medium">State</v-label>
        <v-select v-model="selectedState" :items="states" :rules="[rules.requiredRule]"/>
        <v-label class="mb-2 font-weight-medium">size</v-label>
        <v-text-field variant="outlined" color="primary" v-model="companySize" type="number" placeholder="0"
          :rules="[rules.requiredRule, rules.positiveRule]"></v-text-field>
      </v-col>
      <v-col cols="6" sm="6">
        <v-label class="mb-2 font-weight-medium">url</v-label>
        <v-text-field variant="outlined" color="primary" v-model="url"
          :rules="[rules.requiredRule]"></v-text-field>
        <v-label class="mb-2 font-weight-medium">City</v-label>
        <v-text-field variant="outlined" color="primary" v-model="inputCity"
          :rules="[rules.requiredRule]"></v-text-field>
          <v-label class="mb-2 font-weight-medium">Logo Url</v-label>
        <v-text-field variant="outlined" color="primary" v-model="logoUrl"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12">
        <div class="container">
          <v-label class="mb-2 font-weight-medium">Description</v-label>
        </div>
        <div class="editorArea">
          <v-card variant="outlined">
            <div v-if="editor">
              <EditorMenubar :editor="descEditor" />
            </div>
            <editor-content :editor="descEditor" />
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-btn type="submit" color="success" class="my-4">add</v-btn>
    <a href="/forms/add-job"><v-btn class="my-4 cancel">cancel</v-btn></a>
  </v-form>
</template>

<style scoped>
.cancel{
  background-color: grey;
  margin-left: 50px;
  color: white;
}
</style>

