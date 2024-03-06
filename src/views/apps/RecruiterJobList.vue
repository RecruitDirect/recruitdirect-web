<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useJobsStore } from '@/stores/jobList'

/* Breadcrumb component */
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

import JobListCard from '@/components/widgets/cards/JobListCard.vue';

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
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="8" md="8" sm="8" v-for="job in jobsStore.jobs" :key="job.id">
            <JobListCard :job="job"
                         :jobType="jobsStore.jobType"
                         :remoteType="jobsStore.remoteType"
            />
        </v-col>
    </v-row>
</template>
