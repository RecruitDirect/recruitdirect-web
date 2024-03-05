<script setup lang="ts">
import { ref } from 'vue';
/* Breadcrumb component */
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

/*Call Components*/
import PaymentGateways from "@/components/widgets/cards/PaymentGateways.vue";
import RecentTransactions from "@/components/widgets/cards/RecentTransactions.vue";
import BlogCards from "@/components/widgets/cards/BlogCards.vue";
import ProductCards from "@/components/widgets/cards/ProductCards.vue";
import MusicCards from "@/components/widgets/cards/MusicCards.vue";
import FollowerCards from "@/components/widgets/cards/FollowerCards.vue";
import UserCards from "@/components/widgets/cards/UserCards.vue";
import ProfileCards from "@/components/widgets/cards/ProfileCards.vue";
import Settings from "@/components/widgets/cards/Settings.vue";
import GiftCards from "@/components/widgets/cards/GiftCards.vue";
import UpcommingActivityCard from "@/components/widgets/cards/UpcommingActivityCard.vue";
import BackgroundCard from "@/components/widgets/cards/BackgroundCard.vue";
import SampleCard from "@/components/widgets/cards/SampleCard.vue";
import ImageCards from "@/components/widgets/cards/ImageCards.vue";
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
</script>
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>

        <JobListCard />
    </v-row>
</template>
