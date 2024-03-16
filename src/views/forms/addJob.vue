<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import AddJobForm from '@/components/forms/add-job-form/AddJobForm.vue';
import { useUsersStore } from '@/stores/authUser';
import { useJobsStore } from '@/stores/jobList';
import { useCompaniesStore } from '@/stores/companies';
import { useLocationStore } from '@/stores/location';


const usersStore = useUsersStore();
const jobsStore = useJobsStore();
const companyStore = useCompaniesStore();
const locationStore = useLocationStore();
// theme breadcrumb
const postSuccess = ref(false);
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Add Job',
        disabled: true,
        href: '#'
    }
]);

const postJob = (jobTitle: string, jobType: string, remoteType: string,
                jobCategory: Array<string>, location: string, expirationDate: string, 
                bonus: number, bottomSalary: number, topSalary: number, hiringClientId: number, 
                desc: string, skillDesc: string) => {
                    console.log(hiringClientId, jobTitle);
    jobsStore.postJob(jobTitle, jobType, remoteType, jobCategory, location, expirationDate, 
                        bonus, bottomSalary, topSalary, hiringClientId, desc, skillDesc)
    .then(res => {
        postSuccess.value = true;
    })
    .catch(error => {
        console.log(error);
    });
}
</script>

<template>
   <v-row>
        <v-col cols="8" class="mb-8">
            <UiParentCard title="Post job information">
                <AddJobForm 
                    :userData="usersStore.userData"
                    :industries="companyStore.industries"
                    :remoteTypes="jobsStore.remoteType"
                    :jobTypes="jobsStore.jobType"
                    :states="locationStore.states"
                    @postJob="postJob"
                />
            </UiParentCard>           
        </v-col>
   </v-row>           
</template>