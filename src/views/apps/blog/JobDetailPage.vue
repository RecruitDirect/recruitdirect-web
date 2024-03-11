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
console.log(jobId.value)
if (jobsStore.currentJob == null || jobsStore.currentJob == undefined) {
    jobsStore.fetchJob(jobId).then(res => {
        loading.value = false;
    });
}

</script>

<template v-if="loading == false">
    <!-- ---------------------------------------------------- -->
    <!-- Table Basic -->
    <!-- ---------------------------------------------------- -->
    <v-row>
        <v-col cols="9">
          <JobDetail :jobDetail="jobsStore.currentJob"/>
          <div>{{ $route.params.jobId }}</div>
        </v-col>
        <v-col cols="3">
            <JobSideCard></JobSideCard>
        </v-col>
    </v-row>
</template>
