<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoIcon from '@/assets/images/logos/recruit-direct-logo-min.png';
</script>
<template>
    <div class="logo">
        <RouterLink to="/">
            <img :src="LogoIcon" alt="home" />
        </RouterLink>
    </div>
</template>
