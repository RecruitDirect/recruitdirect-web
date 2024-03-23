<script setup lang="ts">
import { ref } from "vue";
const dialog = ref(false);
import { useEditor, EditorContent } from '@tiptap/vue-3';
import EditorMenubar from '@/components/forms/plugins/editor/EditorMenubar.vue';
import StarterKit from '@tiptap/starter-kit';
import { useUsersStore } from '@/stores/authUser';
import { useLocationStore } from '@/stores/location';
import { useCompaniesStore } from '@/stores/companies';

const companyStore = useCompaniesStore();
const userId = useUsersStore().userData.id;
const states = ref(useLocationStore().states);
const selectedState = ref('');
const inputCity = ref('');
const name = ref('');
const size = ref();
const url = ref('');
const logoUrl = ref('');
const postSuccess = ref(false);

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

const handleAddCompany = () => {
  addCompany(name.value, url.value, locationCal(selectedState.value, inputCity.value), size.value, logoUrl.value, descEditor.value?.getHTML() ?? '', userId);
};

const addCompany = (name: string, url: string, location: string, size: number, logoUrl: string, description: string, userId: number) => {
    console.log(name);
    companyStore.addCompany(name, url, location, size, logoUrl, description, userId)
    .then(res => {
        postSuccess.value = true;
    })
    .catch(error => {
        console.log(error);
    });
}
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Form -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="text-center">
    <v-dialog v-model="dialog" persistent max-width="800">
      <template v-slot:activator="{ props }">
        <v-btn color="warning" class="w-20 px-4 " v-bind="props"> update </v-btn>
      </template>
      <v-card style="height: 400px" class="overflow-auto">
        <v-container>
        <v-card-title class="pa-5">
          <span class="text-h5">Update Company</span>
        </v-card-title>
        <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Company Name" v-model="name" :rules="[rules.requiredRule]"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Url" v-model="url" :rules="[rules.requiredRule]"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  label="State"
                  :items="states"
                  v-model="selectedState"
                  :rules="[rules.requiredRule]"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="City" v-model="inputCity" :rules="[rules.requiredRule]"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Size*" v-model="size" :rules="[rules.requiredRule, rules.positiveRule]"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Logo Url" v-model="logoUrl" required></v-text-field>
              </v-col>
              
              <v-col cols="12" md="12">
                <div class="container">
                  <v-label class="mb-2 font-weight-medium">Description</v-label>
                </div>
                <div class="editorArea">
                  <v-card variant="outlined">
                    <div v-if="descEditor">
                      <EditorMenubar :editor="descEditor" />
                    </div>
                    <editor-content :editor="descEditor" />
                  </v-card>
                </div>
              </v-col>
            </v-row>
         
        </v-card-text>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false" variant="tonal" class="px-4 ">
            Close
          </v-btn>
          <v-btn color="success" text @click="handleAddCompany" variant="tonal" class="px-4 ">
            Update
          </v-btn>
        </v-card-actions>
      </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
