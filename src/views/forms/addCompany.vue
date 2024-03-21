<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import AddCompanyForm from '@/components/forms/add-company-form/AddCompanyForm.vue';
import { useUsersStore } from '@/stores/authUser';
import { useLocationStore } from '@/stores/location';
import { useCompaniesStore } from '@/stores/companies';

const usersStore = useUsersStore();
const companyStore = useCompaniesStore();
const locationStore = useLocationStore();
// theme breadcrumb
const postSuccess = ref(false);


const addCompany = (name: string, url: string, location: string, size: number, logoUrl: string, description: string, userId: number) => {
    console.log(name);
    companyStore.addCompany(name, url, location, size, logoUrl, description, userId)
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
            <UiParentCard title="Add a company">
                <AddCompanyForm 
                    :userData="usersStore.userData"
                    :states="locationStore.states"
                    @addCompany="addCompany"
                />
            </UiParentCard>           
        </v-col>
   </v-row>           
</template>