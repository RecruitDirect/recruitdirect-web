<script setup lang="ts">
import { ref } from "vue";
import { currencyFormatter } from '../../../utils/math';

const props = defineProps(['job', 'jobType', 'remoteType']);
const job = ref(props.job);
const jobType = ref(props.jobType);
const remoteType = ref(props.remoteType);

</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- job Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card elevation="10" rounded="md" class="px-4 mb-6">
      <v-row class="mt-md-0 mt-sm-3 mt-3 pl-2">
          <v-col cols="2" sm="2" class="d-flex py-0 px-0 align-start justify-center flex-wrap">
              <v-card-item>
                <v-avatar rounded="lg" class="mx-2" size="100" cla>
                    <img :src="job.coveravatar" :alt="job.avatar" class="h-100 w-100"/>
                </v-avatar>
                <div class="text-subtitle-2 mt-2 text-center font-weight-medium">
                  <a href="job.company.url">{{ job.company.name }}</a>
                </div>
                <div>
                  <span class="text-body-2 text-medium-emphasis text-center" v-text="job.company.size + ' employees'"></span>
                </div>
              </v-card-item>
          </v-col>
          <v-col cols="10" sm="10">
              <h6 class="text-h6 text-12 my-4 mx-2">
                <a class="text-decoration-underline color-inherits" href="job.url">{{ job.name }}</a>
              </h6>
              <v-card-item class="pt-0 px-0 py-0">
                    <div class="d-flex align-center justify-space-between">
                      <div class="d-flex align-center start">
                        <div>
                          <v-avatar class="ml-2" size="22">
                            <v-icon size="22">mdi-map-marker</v-icon>
                          </v-avatar>
                          <span class="text-body-2 ml-2" v-text="job.location"></span>
                        </div>
                        <div>
                          <v-avatar class="ml-4" size="22">
                            <v-icon size="22">mdi-briefcase</v-icon>
                          </v-avatar>
                          <span class="text-body-2 ml-2" v-text="jobType.get(job.jobType)"></span>
                        </div>
                        <div>
                          <v-avatar class="ml-4" size="22">
                            <v-icon size="22">mdi-train-car</v-icon>
                          </v-avatar>
                          <span class="text-body-2 ml-2" v-text="remoteType.get(job.remoteType)"></span>
                        </div>
                      </div>
                      <div class="pr-4">
                        <v-avatar size="22">
                          <v-icon size="22">mdi-clipboard-text-clock</v-icon>
                        </v-avatar>
                        <span class="text-subtitle-2 ml-2" v-text="job.expirationTime"></span>
                      </div>
                    </div>
                </v-card-item>
                <v-card-item class="pt-0 pl-2">
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
                        <span class="text-subtitle-2" v-text="currencyFormatter.format(job.bottomSalary) + ' - ' + currencyFormatter.format(job.topSalary)"></span>
                      </div>
                      <div class="d-flex">
                          <span class="text-subtitle-1" style="min-width: 180px">Total bonus: </span>
                        <span class="text-subtitle-2" v-text="currencyFormatter.format(job.totalBonus)"></span>
                      </div>
                    </v-col>
                    <!-- <v-col cols="6" class="text-right">
                      <span class="text-subtitle-1 ">Salary: </span>
                      <span class="text-subtitle-2 ml-2" v-text="'$ ' + job.bottomSalary + ' - $ ' + job.topSalary"></span>
                    </v-col> -->
                  </div>
                </v-card-item>
              <!-- <v-btn class="mt-0" :color="'primary'">Go Somewhere</v-btn> -->
          </v-col>
          
      </v-row>
  </v-card>
</template>
