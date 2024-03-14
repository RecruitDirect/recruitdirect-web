<script setup lang="ts">
import { ref } from "vue";
import { currencyFormatter } from '../../../utils/math';
import { useJobsStore } from "@/stores/jobList";

const panel = ref([1]);
const props = defineProps(['job', 'jobType', 'remoteType']);
const job = ref(props.job);
const jobType = ref(props.jobType);
const remoteType = ref(props.remoteType);
const jobStore = useJobsStore();

function setCurrentJob() {
  jobStore.setCurrentJob(job);
}

const candidateStatus = ['Resume review', 'Interviewing', 'Offered'];

</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- job Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-col cols="6">
    <v-card elevation="20" rounded="md" class="my-4" >
        <div class="my-0 mx-1 d-flex align-center justify-space-between">
          <div 
                  class="text-subtitle-1 font-weight-medium px-0" 
                  color="black">
                  Jian Hou
          </div>
            <div class="d-flex mt-1 align-center">
              <span class="text-subtitle-1 text-decoration-underline">email: </span>
              <span class="text-subtitle-2 ml-2" v-text="'asdfasdf@gmail.com'"></span>
            </div>      
        </div>
        <v-card-item class="px-4 py-0">
          <div class="my-2">
            <div>
              <v-select
                label="Candidate status"
                :items="candidateStatus"
                variant="outlined"
              ></v-select>
            </div>
        </div>
        </v-card-item>
          <v-expansion-panels v-model="panel">
            <v-expansion-panel elevation="0" rounded="false">
                <v-expansion-panel-title class="font-weight-medium"> Details </v-expansion-panel-title>
                <v-expansion-panel-text class="acco-body">
                    <v-row no-gutters>
                        
                    </v-row>
                </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
  </v-card>
</v-col>
</template>
