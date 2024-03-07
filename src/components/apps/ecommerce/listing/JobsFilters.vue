<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

const panel = ref([0, 1, 2, 3, 4]);
const selectedJobTypes = ref([]);
const selectedRemoteTypes = ref([]);
const selectCompanies = ref([]);
const searchValue = ref('');

const props = defineProps(['jobType', 'remoteType', 'companies']);
const jobType = ref(props.jobType);
const remoteType = ref(props.remoteType);
const companies = ref(props.companies);

function search() {
    console.log('searching');
}

</script>
<template>
    <v-sheet class="pa-4 pt-1">
        <v-btn color="primary" @click="search()" block class="my-5" size="large" elevation-10>Search</v-btn>
        <v-text-field
            variant="outlined"
            v-model="searchValue"
            prepend-inner-icon="mdi-magnify"
            placeholder="Search location"
            hide-details
            density="compact"
            color="primary"
            class="my-4"
            @keydown.enter="search()"
        ></v-text-field>
        <v-divider />
        <v-expansion-panels multiple v-model="panel">
            <v-expansion-panel elevation="0">
                <v-expansion-panel-title class="font-weight-medium custom-accordion"> Job Type </v-expansion-panel-title>
                <v-expansion-panel-text class="acco-body">
                    <v-row no-gutters>
                        <v-col cols="12" v-for="jtype in jobType">
                            <v-checkbox :label="jtype[1]" v-model="selectedJobTypes" color="primary" :value="jtype[0]" hide-details> </v-checkbox>
                        </v-col>
                    </v-row>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-divider />
            <v-expansion-panel elevation="0">
                <v-expansion-panel-title class="font-weight-medium custom-accordion"> Remote Type </v-expansion-panel-title>
                <v-expansion-panel-text class="acco-body">
                    <v-row no-gutters>
                        <v-col cols="12" v-for="remote in remoteType">
                            <v-checkbox :label="remote[1]" v-model="selectedRemoteTypes" color="primary" :value="remote[0]" hide-details> </v-checkbox>
                        </v-col>
                    </v-row>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-divider />
            <v-expansion-panel elevation="0">
                <v-card-title class="font-weight-medium custom-accordion"> Company </v-card-title>
                <v-select
                    v-model="selectCompanies"
                    :items="companies"
                    item-title="name"
                    item-value="id"
                    label="Select"
                    return-object
                    single-line
                    variant="outlined"
                    hide-details
                    multiple
                ></v-select>
            </v-expansion-panel>
            <v-divider />
        </v-expansion-panels>
    </v-sheet>
</template>
<style lang="scss">
.custom-accordion {
    padding: 18px 2px;

    min-height: 30px !important;
    .v-expansion-panel-title__overlay {
        background-color: transparent;
    }
}
.acco-body {
    .v-expansion-panel-text__wrapper {
        padding: 5px 0;
    }
}
.custom-radio-box {
    .v-selection-control-group {
        flex-wrap: wrap;
    }
}

</style>
