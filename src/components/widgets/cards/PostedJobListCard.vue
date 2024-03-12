<script setup lang="ts">
import { ref, defineModel, computed } from "vue";
import { currencyFormatter } from '../../../utils/math';
import { useJobsStore } from "@/stores/jobList";
import { IconFileCv, IconStereoGlasses, IconTrophyFilled } from "@tabler/icons-vue";

const props = defineProps(['job', 'jobType', 'remoteType']);
const job = ref(props.job);
const jobType = ref(props.jobType);
const remoteType = ref(props.remoteType);

const emit = defineEmits(['selectJob']);

const resumeReviewCnt = computed(() => {
    return job.value.second.filter((item: any) => {
        return item.candidate.status == 'WAITING'
    }).reduce((p: number, r: any) => p + 1, 0);
})

const interviewingCnt = computed(() => {
    return job.value.second.filter((item: any) => {
        return item.candidate.status == 'INTERVIEWING'
    }).reduce((p: number, r: any) => p + 1, 0);
})

const offerCnt = computed(() => {
    return job.value.second.filter((item: any) => {
        return item.candidate.status == 'OFFERED'
    }).reduce((p: number, r: any) => p + 1, 0);
})

const candidateStatus: any[] = [
    {
        icon: IconFileCv,
        title: 'Resume review',
        subtitle: '',
        rank: resumeReviewCnt,
        bgcolor: 'warning'
    },
    {
        icon: IconStereoGlasses,
        title: 'Interviewing',
        subtitle: '',
        rank: interviewingCnt,
        bgcolor: 'info'
    },
    {
        icon: IconTrophyFilled,
        title: 'Offered',
        subtitle: '',
        rank: offerCnt,
        bgcolor: 'success'
    }
];

</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- job Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card flat rounded="md" class="px-4 mb-6">
      <v-row class="mt-md-0 mt-sm-3 mt-3">
          <v-col cols="12" sm="12">
              <div class="text-h6 text-12 my-2 mx-2">
                <v-btn class="text-subtitle-1 text-decoration-underline font-weight-medium px-0" 
                        color="black" 
                        variant="text"
                        @click="emit('selectJob', job)">
                        {{ job.first.name }}
                </v-btn>
              </div>
              <v-card-item class="pt-0 px-0 py-0 mr-2">
                    <div class="d-flex align-center justify-space-between">
                      <div>
                        <v-avatar class="ml-2" size="18">
                          <v-icon size="18">mdi-map-marker</v-icon>
                        </v-avatar>
                        <span class="text-body-2 ml-1" v-text="job.first.location"></span>
                      </div>
                      <div>
                        <v-avatar class="ml-2" size="18">
                          <v-icon size="18">mdi-briefcase</v-icon>
                        </v-avatar>
                        <span class="text-body-2 ml-1" v-text="jobType.get(job.first.jobType)"></span>
                      </div>
                      <div>
                        <v-avatar class="ml-2" size="18">
                          <v-icon size="18">mdi-train-car</v-icon>
                        </v-avatar>
                        <span class="text-body-2 ml-1" v-text="remoteType.get(job.first.remoteType)"></span>
                      </div>
                    </div>
                </v-card-item>
                <v-card-item class="pt-0 pl-2 pb-0">
                  <div class="d-flex align-start justify-space-between">
                    <v-col cols="12" class="container px-0">
                      <!-- <div class="d-flex">
                        <span class="text-subtitle-1" style="min-width: 180px">Resume bonus: </span>
                        <span class="text-subtitle-2" v-text="'$ ' + job.resumeBonus"></span>
                      </div>
                      <div class="d-flex">
                        <span class="text-subtitle-1" style="min-width: 180px">Interview bonus: </span>
                        <span class="text-subtitle-2" v-text="'$ ' + job.interviewBonus"></span>
                      </div> -->
                      <div class="d-flex my-2">
                        <span class="text-subtitle-2 " style="min-width: 120px">Salary: </span>
                        <span class="text-body-2" v-text="currencyFormatter.format(job.first.bottomSalary) + ' - ' + currencyFormatter.format(job.first.topSalary)"></span>
                      </div>
                      <div class="d-flex">
                          <span class="text-subtitle-2" style="min-width: 120px">Total bonus: </span>
                        <span class="text-body-2" v-text="currencyFormatter.format(job.first.totalBonus)"></span>
                      </div>
                    </v-col>
                    <!-- <v-col cols="6" class="text-right">
                      <span class="text-subtitle-1 ">Salary: </span>
                      <span class="text-subtitle-2 ml-2" v-text="'$ ' + job.bottomSalary + ' - $ ' + job.topSalary"></span>
                    </v-col> -->
                  </div>
                </v-card-item>
                <v-card-item class="px-2 py-0 mb-3">
                  <div class="d-flex align-center" v-for="list in candidateStatus" :key="list.title">
                      <v-avatar :class="'my-1 rounded-md bg-light'+ list.bgcolor"  size="18">    
                          <component :is="list.icon" :class="'text-'+ list.bgcolor" stroke-width="2" size="14" />
                      </v-avatar>
                      <div class="pl-3 mt-n1">
                          <div class="text-body-2 font-weight-medium" v-text="list.title"></div>
                          <div class="ml-auto font-weight-normal text-body-2 text-medium-emphasis text-decoration-underline" v-text="list.subtitle"></div>
                      </div>
                      <div class="ml-auto mr-1 font-weight-medium text-body-2 text-medium-emphasis" v-text="list.rank"></div>
                  </div>
                </v-card-item>
              <!-- <v-btn class="mt-0" :color="'primary'">Go Somewhere</v-btn> -->
          </v-col>
          
      </v-row>
  </v-card>
</template>
