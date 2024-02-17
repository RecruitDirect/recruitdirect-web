<script setup>
import { computed } from 'vue';
import LogoLight from './LogoLight.vue';
import LogoIcon from './LogoIcon.vue';
import { useCustomizerStore } from '@/stores/customizer';

const customizer = useCustomizerStore();
</script>
<template>
    <LogoLight/>
</template>
