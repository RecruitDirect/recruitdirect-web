<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useJobsStore } from '@/stores/jobList'

import PostedJobListCard from '@/components/widgets/cards/PostedJobListCard.vue';
import JobDetailsShort from '@/components/apps/blog/detail/jobDetailsShort.vue';
import CandidateList from './CandidateList.vue';

const loading = ref(true)
const jobsStore = useJobsStore()
const selectedJob = ref();

onMounted(() => {
    jobsStore.loadJobs().then(res => {
        loading.value = false;
        selectedJob.value = res[0];
    });
});

const selectJob = (job: object) => {
    selectedJob.value = job;
}

</script>

<template >
    <!-- -------------------------------------- -->
    <!-- Left Sidebar -->
    <!-- -------------------------------------- -->    
    <v-row v-if="!loading">
        <v-col cols="4" md="4" sm="4">
            <perfect-scrollbar style="height: 900px;">
                    <PostedJobListCard v-for="job in jobsStore.jobs" :key="job.first.id"
                            :job="job"
                            :jobType="jobsStore.jobType"
                            :remoteType="jobsStore.remoteType"
                            @selectJob="selectJob"
                    />
            </perfect-scrollbar>
        </v-col>
        <v-col cols="8" md="8" sm="8">
            <JobDetailsShort
                    :jobDetail="selectedJob"
                    :jobType="jobsStore.jobType"
                    :remoteType="jobsStore.remoteType"
            />
            <v-divider class="my-2"/>
            <CandidateList></CandidateList>
        </v-col>
    </v-row>
</template>
