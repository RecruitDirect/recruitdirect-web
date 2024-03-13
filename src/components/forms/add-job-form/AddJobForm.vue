<script setup lang="ts">
import { ref, computed } from 'vue';
const props = defineProps(['userData']);
const userId = ref(props.userData.id);
const remoteSelect = ref('On-site');
const remoteTypes = ref(['On-site', 'Hybrid', 'Remote']);
const categorySelect = ref('Tech');
const categories = ref(['Tech', 'Finance', 'Retail']);
const jobTypeSelect = ref('Full-time');
const jobTypes = ref(['Full-time','Part-time','Contract','Other']);
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import EditorMenubar from '@/components/forms/plugins/editor/EditorMenubar.vue';

const name = ref('');
const totalBonus = ref(0);
const bottomSalary = ref(0);
const resumePassBonus = ref(0);
const topSalary = ref(0);
const expirationDate = ref('');
const interviewBonus = ref(0);
const skill = ref('');


const selectedState = ref('');
const selectedCity = ref('');
const states = ref([
  { name: 'State 1', cities: ['City 1', 'City 2', 'City 3'] },
  { name: 'State 2', cities: ['City 4', 'City 5', 'City 6'] },
  // Add more states and cities as needed
]);

let location = computed(()=>{
  return selectedState.value + ' ' + selectedCity.value;
});

// Compute selected state cities
const selectedStateCities = computed(() => {
  const selectedStateObj = states.value.find(state => state.name === selectedState.value);
  return selectedStateObj ? selectedStateObj.cities : [];
});

const rules = {
  requiredRule : (val)=> !!val || 'Requried',
  positiveRule: (val)=> val >= 0 || `Input should be a positive number`,
  topSalaryRule: (val)=> val < bottomSalary || 'Top salary should be no less than bottom',
  bottomSalaryRule: (val)=> val > topSalary || 'Bottom salary should be no greater than top',
};

const skillDescription = ref('Type the skills requirement here');
 const skillEditor = useEditor({
    extensions: [StarterKit],
    content: skillDescription.value,
    onUpdate: ({editor}) =>{
      skillDescription.value = editor.getHTML();
    }
});


const description = ref('Type the job description here');
const editor = useEditor({
    extensions: [StarterKit],
    content: description.value,
    onUpdate: ({editor}) =>{
      description.value = editor.getHTML();
    }
});

const submitForm = async () => {
  try {
    const formData = {
      name: name.value,
      description: description.value,
      hiringClientId: userId,
      totalBonus: totalBonus.value,
      resumePassBonus: resumePassBonus.value,
      interviewBonus: interviewBonus.value,
      jobCategories: categorySelect.value,
      location: location.value,
      skillDescription: skillDescription.value,
      expirationTime: expirationDate.value,
      bottomSalary: bottomSalary.value,
      topSalary: topSalary.value,
      jobType: jobTypeSelect.value,
      remoteType: remoteSelect.value,
      

      // Map form fields to corresponding backend parameters
    };

    const response = await fetch('/job/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to add new job');
    }

    
  } catch (error) {
    console.error(error);
    
  }
};

</script>

<template>
  <form @submit.prevent="submitForm">
    <v-row>
        <v-col cols="12" sm="4">
            <v-label class="mb-2 font-weight-medium">Job title</v-label>
            <v-text-field variant="outlined" placeholder="Enter Text" color="primary" v-model="name" :rules="[rules.requiredRule]"></v-text-field>
            <v-label class="mb-2 font-weight-medium">Remote type</v-label>
            <v-select
                :items="remoteTypes"
                item-title="remoteTypes"
                item-value="abbr"
                return-object
                single-line
                variant="outlined"
                v-model="remoteSelect"
            ></v-select>
            <v-label class="mb-2 font-weight-medium">Total bonus</v-label>
            <v-text-field variant="outlined" color="primary" v-model="totalBonus" :rules="[rules.requiredRule, rules.positiveRule]"></v-text-field>
            <v-label class="mb-2 font-weight-medium">Bottom salary</v-label>
            <v-text-field variant="outlined" color="primary" v-model="bottomSalary" :rules="[rules.requiredRule, rules.positiveRule, rules.bottomSalaryRule]"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
            <v-label class="mb-2 font-weight-medium">Job Category</v-label>
            <v-select
                :items="categories"
                item-title="categories"
                item-value="abbr"
                return-object
                single-line
                variant="outlined"
                v-model="categorySelect"
                :multiple=true
            ></v-select>
            <v-label class="mb-2 font-weight-medium">Location</v-label>
            <div class="try">
              <select v-model="selectedState" class="stateSelect">
                <option value="">Select State</option>
                <option v-for="state in states" :key="state.name" :value="state.name">{{ state.name }}</option>
              </select>
              <select v-show="selectedState" v-model="selectedCity">
                <option value="">Select City</option>
                <option v-for="city in selectedStateCities" :key="city" :value="city">{{ city }}</option>
              </select>
            </div>
            <v-label class="mb-2 font-weight-medium">Resume pass bonus</v-label>
            <v-text-field variant="outlined" color="primary" v-model="resumePassBonus" :rules="[rules.requiredRule, rules.positiveRule]"></v-text-field>
            <v-label class="mb-2 font-weight-medium">Top Salary</v-label>
            <v-text-field variant="outlined"  color="primary" v-model="topSalary" :rules="[rules.requiredRule, rules.positiveRule, rules.topSalaryRule]"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
            <v-label class="mb-2 font-weight-medium">Job type</v-label>
            <v-select
                :items="jobTypes"
                item-title="jobTypes"
                item-value="abbr"
                return-object
                single-line
                variant="outlined"
                v-model="jobTypeSelect"
            ></v-select>
            <v-label class="mb-2 font-weight-medium">Expiration date</v-label>
            <v-text-field variant="outlined" type="date" color="primary" v-model="expirationDate" :rules="[rules.requiredRule]"></v-text-field>
            <v-label class="mb-2 font-weight-medium">Interview bonus</v-label>
            <v-text-field variant="outlined" color="primary" v-model="interviewBonus" :rules="[rules.requiredRule, rules.positiveRule]"></v-text-field>
            
        </v-col>
        <v-col cols="12" sm="12">
        <div class="container">
         <v-label class="mb-2 font-weight-medium">Skills</v-label>
        </div>

        
        <div class="editorArea">
          <UiParentCard title="Description">
            <div v-if="editor">
              <EditorMenubar :editor="skillEditor" />
            </div>
            <editor-content :editor="skillEditor"/>
          </UiParentCard>
        </div>
      </v-col>
        <v-col cols="12" sm="12">
        <div class="container">
         <v-label class="mb-2 font-weight-medium">Description</v-label>
        </div>

        
        <div class="editorArea">
          <UiParentCard title="Description">
            <div v-if="editor">
              <EditorMenubar :editor="editor" />
            </div>
            <editor-content :editor="editor" v-model="skill"/>
          </UiParentCard>
        </div>
      </v-col>
    </v-row>
    <v-btn type="submit" color="success" flat>add new</v-btn>
  </form>  
</template>


<style>
.container {
    display: flex;
    flex-direction: column; /* Stack elements vertically */
    align-items: flex-start; /* Align items to the start of the container */
  }

  .editorArea {
    display: inline-flex; /* Display as inline flex */
    flex-flow: column wrap; /* Wrap elements when they reach the bottom */
    align-content: flex-start; /* Align content to the start */
    height: 100%; /* Set height to 100% to expand vertically */
  }

  .try{
    width: 1000px;
    height: 70px;
    border: red;
  }
  .stateSelect{
    height: 40px;

  }
</style>