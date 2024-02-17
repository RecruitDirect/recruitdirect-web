<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Logo from '@/assets/images/logos/recruit-direct-logo-white.png';
</script>
<template>
    <div class="logo">
        <RouterLink to="/">
            <img :src="Logo" alt="home" />
        </RouterLink>
    </div>
</template>
