<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { currencyFormatter } from '../../../../utils/math';

const route = useRoute();
const jobId = route.path.split('/').pop();

const props = defineProps(['jobDetail', 'jobType', 'remoteType']);
const jobDetail = ref(props.jobDetail);

</script>
<template>
    <v-card elevation="10" rounded="md" class="px-4 pb-6">
        <v-card-item class="pt-4">
            <div class="d-flex" style="align-items: center;">
                <v-avatar rounded="lg" class=" my-4" size="100" cla>
                    <img :src="jobDetail.company.name" :alt="jobDetail.company.name" height="100" />
                </v-avatar>
                <v-col cols="8">
                    <div class="text-h3 font-weight-medium ml-4">{{ jobDetail.name }}</div>
                    <div class="d-flex align-center justify-space-between">
                        <div class="d-flex align-center start">
                            <div>
                            <v-avatar class="ml-2" size="22">
                                <v-icon size="22">mdi-map-marker</v-icon>
                            </v-avatar>
                            <span class="text-body-2 ml-2" v-text="jobDetail.location"></span>
                            </div>
                            <div>
                            <v-avatar class="ml-4" size="22">
                                <v-icon size="22">mdi-briefcase</v-icon>
                            </v-avatar>
                            <span class="text-body-2 ml-2" v-text="jobType.get(jobDetail.jobType)"></span>
                            </div>
                            <div>
                            <v-avatar class="ml-4" size="22">
                                <v-icon size="22">mdi-train-car</v-icon>
                            </v-avatar>
                            <span class="text-body-2 ml-2" v-text="remoteType.get(jobDetail.remoteType)"></span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-center justify-space-between">
                        <div>
                            <v-avatar class="ml-2" size="22">
                                <v-icon size="22">mdi-cash-multiple</v-icon>
                            </v-avatar>
                            <span class="text-body-2 ml-2" v-text="currencyFormatter.format(jobDetail.bottomSalary) + ' - ' + currencyFormatter.format(jobDetail.topSalary)"></span>
                        </div>
                        <div class="my-1">
                            <span class="text-body-2 font-weight-medium" v-text="'Expire at: '"></span>
                            <span class="text-body-2 ml-2" v-text="jobDetail.expirationTime"></span>
                        </div>
                    </div>
                </v-col>
            </div>
        </v-card-item>
        <v-card-item class="pt-4">
            <div class="">
                <div class="text-h5 mb-2">About the {{ jobDetail.company.name }}</div>
                <div class="my-1">
                    <span class="text-body-2 font-weight-medium" v-text="'Employees: '"></span>
                    <span class="text-body-2 ml-2" v-text="jobDetail.company.size"></span>
                    <span class="text-body-2 font-weight-medium ml-4" v-text="'website: '"></span>
                    <a class="text-decoration-underline text-body-2 font-weight-medium" :href="jobDetail.company.url">{{ jobDetail.company.url }}</a>
                </div>
                <div class=" text-body-2 font-weight-regular">
                    <p>
                    The internet continues to develop exponentially, and the job hunting for students and junior graduates needs help to collect jobs from a lot of different job websites, tools to improve efficiency of work related to job hunting. Fresherjob is the platform to help those junior friends find more suitable jobs. We’re looking for a skilled web developer to join our team to develop a new generation of platforms to help all the job hunters increase efficiency and opportunities with AI.
                    </p>
                </div>
            </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-item class="pt-4">
            <div class="job-desc-container">
                <div class="text-h5">About the role</div>
                <div class="job-desc">
                    <div v-html="jobDetail.description"></div>
                </div>
            </div>
        </v-card-item>
        <v-card-item class="pt-4">
            <div class="job-desc-container">
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