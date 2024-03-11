<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useJobsStore } from '@/stores/jobList'
import { useCompaniesStore } from '@/stores/companies'

import JobListCard from '@/components/widgets/cards/JobListCard.vue';
import JobsFilters from '@/components/apps/ecommerce/listing/JobsFilters.vue';

const loading = ref(true)
const isCompanyLoading = ref(true)
const jobsStore = useJobsStore()
const companiesStore = useCompaniesStore();

onMounted(() => {
    jobsStore.loadJobs().then(res => {
        loading.value = false;
    });
});

if (companiesStore.companies == null || companiesStore.companies == undefined || companiesStore.companies.length <= 0 ) {
    companiesStore.loadCompanies().then(res => {
        isCompanyLoading.value = false;
    });
}
else {
    isCompanyLoading.value = true;
}

const searchJobs = (searchValue: String, jobTypes: Array<String>, remoteTypes: Array<String>, companies: Array<Object>) => {
    loading.value = true;
    jobsStore.searchJobs(searchValue, jobTypes, remoteTypes, companies).then(res => {
        loading.value = false;
    })
    .catch(error => {
        console.log(error);
    });
}

</script>

<template v-if="loading.value == false && isCompanyLoading.value === false">
    <!-- -------------------------------------- -->
    <!-- Left Sidebar -->
    <!-- -------------------------------------- -->    
    <v-row>
        <v-col cols="3">
            <JobsFilters 
                    :jobType="jobsStore.jobType"
                    :remoteType="jobsStore.remoteType"
                    :companies="companiesStore.companies"
                    @searchJob="searchJobs"
            />
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
