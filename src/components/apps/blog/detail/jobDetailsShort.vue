<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { currencyFormatter } from '../../../../utils/math';

const route = useRoute();
const jobId = route.path.split('/').pop();
const panel = ref([1]);
const props = defineProps(['jobDetail', 'jobType', 'remoteType']);

</script>
<template>
    <v-card elevation="10" rounded="md" class="px-4 pb-6">
        <v-card-item class="pt-4">
            <div class="d-flex" style="align-items: center;">
                <v-col cols="9">
                    <div class="text-h3 font-weight-medium">{{ props.jobDetail.first.name }}</div>
                    <div class="d-flex align-center justify-space-between">
                        <div class="d-flex align-center start">
                            <div>
                            <v-avatar class="ml-0" size="18">
                                <v-icon size="18">mdi-map-marker</v-icon>
                            </v-avatar>
                            <span class="text-body-2 ml-2" v-text="props.jobDetail.first.location"></span>
                            </div>
                            <div>
                            <v-avatar class="ml-4" size="18">
                                <v-icon size="18">mdi-briefcase</v-icon>
                            </v-avatar>
                            <span class="text-body-2 ml-2" v-text="jobType.get(props.jobDetail.first.jobType)"></span>
                            </div>
                            <div>
                            <v-avatar class="ml-4" size="18">
                                <v-icon size="18">mdi-train-car</v-icon>
                            </v-avatar>
                            <span class="text-body-2 ml-2" v-text="remoteType.get(props.jobDetail.first.remoteType)"></span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-center justify-space-between">
                        <div>
                            <v-avatar class="ml-0" size="18">
                                <v-icon size="18">mdi-cash-multiple</v-icon>
                            </v-avatar>
                            <span class="text-body-2 ml-2" v-text="currencyFormatter.format(props.jobDetail.first.bottomSalary) + ' - ' + currencyFormatter.format(props.jobDetail.first.topSalary)"></span>
                        </div>
                        <div class="my-1">
                            <span class="text-body-2 font-weight-medium" v-text="'Expire at: '"></span>
                            <span class="text-body-2 ml-2" v-text="props.jobDetail.first.expirationTime"></span>
                        </div>
                    </div>
                </v-col>
            </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-expansion-panels v-model="panel">
            <v-expansion-panel elevation="0" variant="accordion">
                <v-expansion-panel-title class="font-weight-medium custom-accordion d-flex align-center"> Job requirements : 
                    <template v-slot:actions="{ expanded }" class="align-center">
                        <v-btn @click.stop="" color="primary" prepend-icon="mdi-square-edit-outline"> Edit job </v-btn>
                        <v-icon class="ma-auto"
                        :icon="expanded ? 'mdi-unfold-less-horizontal' : 'mdi-unfold-more-horizontal'"
                        ></v-icon>
                    </template>
                    
                </v-expansion-panel-title>
                <v-expansion-panel-text class="acco-body">
                    <v-card-item class="pt-4">

            <div class="job-desc-container">
                <div class="text-h5">About the role</div>
                <div class="job-desc">
                    <div v-html="props.jobDetail.first.description"></div>
                </div>
                <div class="text-h5 my-3">Candidate requirements</div>
                <div class="job-desc">
                    <h5>Required skills and qualifications</h5>
                    <ul>
                        <li>Be able to work with UX/UI designer to implement the front-end development</li>
                        <li>Extensive knowledge of web applications, programming languages, and web services — including API, CSS, CSS3, Sass,  cross-browser compatibility, HTML, JavaScript, jQuery, PHP, security principles, responsive development</li>
                        <li>Proficiency with content management systems, including WordPress, Figma,  SquareSpace, WIX, WooCommerce</li>
                    </ul>
                    <h5>Advanced skills and qualifications</h5>
                    <ul>
                        <li>Experience on backend website development e.g. API development, nodeJS</li>
                        <li>Experience with crawling system (and scrapy website content)</li>
                        <li>Experience with front-end frameworks e.g. Vue.js, react.js</li>
                        <li>Knowledge of chatGPT</li>
                    </ul>
                </div>
                
            </div>
        </v-card-item>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        
        
    </v-card>
    <!-- <v-card elevation="10" class=" pa-6 mt-6" rounded="md">
        <h3 class="text-h4 mb-6">Comments <v-chip class="bg-primary" size="small" v-text="post.comments?.length"></v-chip></h3>
        <template v-for="(comments, i) in post.comments" :key="post.id">
            <AddComment :comments="comments" />
        </template>
    </v-card> -->
</template>

<style scoped lang="scss">

.job-desc-container {
    & ul {
        margin-left: 30px;
        & li {
            font-size: 0.75rem !important;
            font-weight: 400;
            line-height: 1.25rem;
            letter-spacing: 0.0178571429em !important;
            font-family: inherit !important;
            text-transform: none !important;
        }
    }
    & p {
        font-size: 0.75rem !important;
        font-weight: 400;
        line-height: 1.25rem;
        letter-spacing: 0.0178571429em !important;
        font-family: inherit !important;
        text-transform: none !important;
    }
}

.job-desc {
    & > p {
        margin-top: 10px;
        margin-bottom: 10px
    }
}
</style>