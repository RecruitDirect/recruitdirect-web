<script setup>
import { ref } from 'vue';

import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import EditorMenubar from '@/components/forms/plugins/editor/EditorMenubar.vue';


// theme breadcrumb
const page = ref({ title: 'Editor' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Editor',
        disabled: true,
        href: '#'
    }
]);
const content = ref(`
<p>[The introduction about the role, company and team]</p>
<p></p>
<h5>Role objectives</h5>
<ul>
  <li><p>...</p></li>
  <li><p>...</p></li>
</ul>
<p></p>
<h5>Role responsibilities</h5>
<ul>
  <li><p>...</p></li>
  <li><p>...</p></li>
</ul>
      `)

const editor = useEditor({
    extensions: [StarterKit],
    content: content.value
});
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <UiParentCard title="Editor">
        <div v-if="editor">
            <EditorMenubar :editor="editor" />
        </div>
        <editor-content :editor="editor" />
    </UiParentCard>
    <v-card class="my-6">
      <div class="pa-8" v-html="this.editor?.getHTML()"></div>
    </v-card>
</template>

<style lang="scss"></style>
