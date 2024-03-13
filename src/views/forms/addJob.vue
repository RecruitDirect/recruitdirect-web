<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import AddJobForm from '@/components/forms/add-job-form/AddJobForm.vue';
import { useRecruiterStore } from '@/stores/authUser';
const usersStore = useRecruiterStore();
// theme breadcrumb
const page = ref({ title: 'Form Layouts' });
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
</script>

<template>
   <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
   <v-row>
        <v-col cols="12" class="mb-12">
            <UiParentCard title="Add job form">
                <AddJobForm :userData="usersStore.userData"/>
            </UiParentCard>           
        </v-col>
   </v-row>           
</template>