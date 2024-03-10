<script setup lang="ts">
import { ref } from 'vue';
import JobDetail from '@/components/apps/blog/detail/jobDetails.vue';
import JobSideCard from '@/components/apps/ecommerce/listing/JobSideCard.vue'

</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Table Basic -->
    <!-- ---------------------------------------------------- -->
    <v-row>
        <v-col cols="9">
          <JobDetail/>
        </v-col>
        <v-col cols="3">
            <JobSideCard></JobSideCard>
        </v-col>
    </v-row>
</template>
