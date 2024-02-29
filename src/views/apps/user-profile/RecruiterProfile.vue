<script setup lang="ts">
import { ref } from 'vue';
import { useUsersStore } from '@/stores/authUser';

// components
import ProfileBanner from '@/components/apps/user-profile/ProfileBanner.vue';
import IntroCard from '@/components/apps/user-profile/IntroCard.vue';
import FormSeprator from '../../../components/forms/form-horizontal/FormSeprator.vue';


const page = ref({ title: 'Recruiter Profile' });
const isLoading = ref(true);
const usersStore = useUsersStore();

if (usersStore.userData == null || usersStore.userData == undefined) {
    usersStore.loadUser().then(res => {
        isLoading.value = false;
    });
}
</script>

<template v-if="isLoading.value">
    <ProfileBanner :userData="usersStore.userData"/>
    <v-row class="mt-4">
        <v-col cols="12" lg="4" md="4">
            <IntroCard />
        </v-col>
        <v-col cols="12" lg="8" md="8">
            <FormSeprator :userData="usersStore.userData"/>
        </v-col>
    </v-row>
</template>
