<script setup lang="ts">
import { onMounted, ref } from 'vue';
import JobDetail from '@/components/apps/blog/detail/jobDetails.vue';
import JobSideCard from '@/components/apps/ecommerce/listing/JobSideCard.vue'

import { useJobsStore } from '@/stores/jobList'
import { useRoute } from 'vue-router';

const loading = ref(true)
const jobsStore = useJobsStore()
const route = useRoute()

const jobId = ref(route.params.jobId)

onMounted(() => {
    console.log(jobsStore.currentJob);
    if (jobsStore.currentJob == null || jobsStore.currentJob == undefined) {
        jobsStore.fetchJob(jobId.value).then(res => {
            loading.value = false;
            console.log(jobsStore.currentJob);
        });
    }
});

</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Table Basic -->
    <!-- ---------------------------------------------------- -->
    <v-row v-if="!loading.value && jobsStore.currentJob">
        <v-col cols="9">
          <JobDetail 
                :jobDetail="jobsStore.currentJob"
                :jobType="jobsStore.jobType"
                :remoteType="jobsStore.remoteType"
            />
        </v-col>
        <v-col cols="3">
            <JobSideCard />
        </v-col>
    </v-row>
</template>
