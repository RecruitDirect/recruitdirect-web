<script setup lang="ts">
import { ref } from 'vue';
import { userAuthStore } from '@/stores/auth';

// components
import ProfileBanner from '@/components/apps/user-profile/ProfileBanner.vue';
import IntroCard from '@/components/apps/user-profile/IntroCard.vue';


const page = ref({ title: 'Recruiter Profile' });
const authStore = userAuthStore();
</script>

<template>
    <ProfileBanner />
    <v-row class="mt-4">
        <v-col cols="12" lg="4" md="4">
            <IntroCard />
        </v-col>
    </v-row>
</template>
