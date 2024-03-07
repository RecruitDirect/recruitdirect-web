<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useJobsStore } from '@/stores/jobList'

import JobListCard from '@/components/widgets/cards/JobListCard.vue';
import JobsFilters from '@/components/apps/ecommerce/listing/JobsFilters.vue';

// theme breadcrumb
const page = ref({ title: 'Cards' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        href: '#'
    },
    {
        text: 'Cards',
        disabled: true,
        href: '#'
    }
]);
const loading = ref(true)
const jobsStore = useJobsStore()

onMounted(() => {
    jobsStore.loadJobs().then(res => {
        loading.value = false;
    });
});

</script>

<template>
    <!-- -------------------------------------- -->
    <!-- Left Sidebar -->
    <!-- -------------------------------------- -->    
    <v-row>
        <v-col cols="3">
            <JobsFilters />
        </v-col>
        <v-col cols="8" md="8" sm="8">
            <JobListCard v-for="job in jobsStore.jobs" :key="job.id"
                    :job="job"
                    :jobType="jobsStore.jobType"
                    :remoteType="jobsStore.remoteType"
            />
        </v-col>
    </v-row>
</template>
