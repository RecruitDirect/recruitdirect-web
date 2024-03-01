<script setup lang="ts">
import { ref } from 'vue';
import { useRecruiterStore } from '@/stores/authUser';

// components
import ProfileBannerUser from '@/components/apps/user-profile/ProfileBannerUser.vue';
import IntroCard from '@/components/apps/user-profile/IntroCard.vue';
import RecruiterProfileForm from '@/components/forms/form-horizontal/RecruiterProfileForm.vue';
import { useCompaniesStore } from '@/stores/companies';

const page = ref({ title: 'Recruiter Profile' });
const isUserLoading = ref(true);
const isCompanyLoading = ref(true);
const usersStore = useRecruiterStore();
const companiesStore = useCompaniesStore();

if (usersStore.userData == null || usersStore.userData == undefined) {
    usersStore.loadUser().then(res => {
        isUserLoading.value = false;
    });
}

if (companiesStore.companies == null || companiesStore.companies == undefined || companiesStore.companies.length <= 0 ) {
    companiesStore.loadCompanies().then(res => {
        isCompanyLoading.value = false;
    });
}
</script>

<template v-if="isCompanyLoading.value && isUserLoading.value">
    <ProfileBannerUser :userData="usersStore.userData" :recruiterType="usersStore.recruiterType"/>
    <v-row class="mt-4">
        <v-col cols="12" lg="12" md="12">
            <RecruiterProfileForm 
                :userData="usersStore.userData"
                :recruiterType="usersStore.recruiterType"
                :companies="companiesStore.companies"
                :industries="companiesStore.industries"/>
        </v-col>
    </v-row>
</template>
