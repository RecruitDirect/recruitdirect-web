<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useJobsStore } from '@/stores/jobList'
import { useCompaniesStore } from '@/stores/companies'

import PostedJobListCard from '@/components/widgets/cards/PostedJobListCard.vue';

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
        <v-col cols="6" md="6" sm="6">
            <PostedJobListCard v-for="job in jobsStore.jobs" :key="job.first.id"
                    :job="job"
                    :jobType="jobsStore.jobType"
                    :remoteType="jobsStore.remoteType"
            />
        </v-col>
    </v-row>
</template>
