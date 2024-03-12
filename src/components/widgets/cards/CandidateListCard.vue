<script setup lang="ts">
import { ref } from "vue";
import { currencyFormatter } from '../../../utils/math';
import { useJobsStore } from "@/stores/jobList";

const props = defineProps(['job', 'jobType', 'remoteType']);
const job = ref(props.job);
const jobType = ref(props.jobType);
const remoteType = ref(props.remoteType);
const jobStore = useJobsStore();

function setCurrentJob() {
  jobStore.setCurrentJob(job);
}

</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- job Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card elevation="20" rounded="md" class="my-4" cols="6">
          <v-col>
              <div class="text-h6 text-12 my-4 mx-2 d-flex align-center justify-space-between">
                <div 
                        class="text-subtitle-1 font-weight-medium px-0" 
                        color="black">
                        Jian Hou
                </div>
                  <div class="d-flex my-2 align-center">
                    <span class="text-subtitle-1 text-decoration-underline">email: </span>
                    <span class="text-subtitle-2 ml-2" v-text="'asdfasdf@gmail.com'"></span>
                  </div>      
              </div>
              <v-card-item class="pt-0 px-0 py-0">
                    <div class="d-flex align-center justify-space-between">
                      <div class="d-flex align-center start">
                        <div>
                          <v-avatar class="ml-2" size="22">
                            <v-icon size="22">mdi-message-processing</v-icon>
                          </v-avatar>
                          <span class="text-body-2 ml-2" v-text="'interviewing'"></span>
                        </div>
                        <div>
                          <v-avatar class="ml-4" size="22">
                            <v-icon size="22">mdi-briefcase</v-icon>
                          </v-avatar>
                          <span class="text-body-2 ml-2" v-text="jobType.get(job.first.jobType)"></span>
                        </div>
                        <div>
                          <v-avatar class="ml-4" size="22">
                            <v-icon size="22">mdi-train-car</v-icon>
                          </v-avatar>
                          <span class="text-body-2 ml-2" v-text="remoteType.get(job.first.remoteType)"></span>
                        </div>
                      </div>
                      <div class="pr-4">
                        <v-avatar size="22">
                          <v-icon size="22">mdi-clipboard-text-clock</v-icon>
                        </v-avatar>
                        <span class="text-subtitle-2 ml-2" v-text="job.first.expirationTime"></span>
                      </div>
                    </div>
                </v-card-item>
                <v-card-item class="pt-0 pl-2 pb-1">
                  <div class="d-flex align-start justify-space-between">
                    <v-col cols="10" class="container px-0">
                      <!-- <div class="d-flex">
                        <span class="text-subtitle-1" style="min-width: 180px">Resume bonus: </span>
                        <span class="text-subtitle-2" v-text="'$ ' + job.resumeBonus"></span>
                      </div>
                      <div class="d-flex">
                        <span class="text-subtitle-1" style="min-width: 180px">Interview bonus: </span>
                        <span class="text-subtitle-2" v-text="'$ ' + job.interviewBonus"></span>
                      </div> -->
                      <div class="d-flex my-2">
                        <span class="text-subtitle-1 " style="min-width: 180px">Salary: </span>
                        <span class="text-subtitle-2" v-text="currencyFormatter.format(job.first.bottomSalary) + ' - ' + currencyFormatter.format(job.first.topSalary)"></span>
                      </div>
                      <div class="d-flex">
                          <span class="text-subtitle-1" style="min-width: 180px">Total bonus: </span>
                        <span class="text-subtitle-2" v-text="currencyFormatter.format(job.first.totalBonus)"></span>
                      </div>
                    </v-col>
                    <!-- <v-col cols="6" class="text-right">
                      <span class="text-subtitle-1 ">Salary: </span>
                      <span class="text-subtitle-2 ml-2" v-text="'$ ' + job.bottomSalary + ' - $ ' + job.topSalary"></span>
                    </v-col> -->
                  </div>
                </v-card-item>
              <v-btn class="mt-0" :color="'primary'">Update candidate info</v-btn>
          </v-col>
          
  </v-card>
</template>
