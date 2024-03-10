<script setup lang="ts">
import AddComment from './addCommnet.vue';
import { format } from 'date-fns';
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useBlogStore } from '@/stores/apps/blog';

const title = useRoute();
const getTitle = title.path.split('/').pop();

onMounted(() => {
    store.fetchPost(`${getTitle}`);
    store.fetchPosts();
});
const store = useBlogStore();

const post = computed(() => {
    return store.selectedPost;
});
</script>
<template>
    <v-card elevation="10" rounded="md" class="px-4 pb-6">
        <v-card-item class="pt-4">
            <div class="d-flex" style="align-items: center;">
                <v-avatar rounded="lg" class=" my-4" size="100" cla>
                    <img :src="post.author?.avatar" alt="icon" height="100" />
                </v-avatar>
                <v-col cols="8">
                    <div class="text-h3 font-weight-medium ml-4">Senior Data Scientist</div>
                    <div class="d-flex align-center justify-space-between">
                        <div class="d-flex align-center start">
                            <div>
                            <v-avatar class="ml-2" size="22">
                                <v-icon size="22">mdi-map-marker</v-icon>
                            </v-avatar>
                            <span class="text-body-2 ml-2" v-text="'Seattle'"></span>
                            </div>
                            <div>
                            <v-avatar class="ml-4" size="22">
                                <v-icon size="22">mdi-briefcase</v-icon>
                            </v-avatar>
                            <span class="text-body-2 ml-2" v-text="'Full-time'"></span>
                            </div>
                            <div>
                            <v-avatar class="ml-4" size="22">
                                <v-icon size="22">mdi-train-car</v-icon>
                            </v-avatar>
                            <span class="text-body-2 ml-2" v-text="'Remote'"></span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-center justify-space-between">
                        <div>
                            <v-avatar class="ml-2" size="22">
                                <v-icon size="22">mdi-cash-multiple</v-icon>
                            </v-avatar>
                            <span class="text-body-2 ml-2" v-text="'$120,000 - $190,000'"></span>
                        </div>
                        <div class="my-1">
                            <span class="text-body-2 font-weight-medium" v-text="'Expire at: '"></span>
                            <span class="text-body-2 ml-2" v-text="'Apr 12, 2024'"></span>
                        </div>
                    </div>
                </v-col>
            </div>
        </v-card-item>
        <v-card-item class="pt-4">
            <div class="">
                <div class="text-h5 mb-2">About the company</div>
                <div class="my-1">
                    <span class="text-body-2 font-weight-medium" v-text="'Employees: '"></span>
                    <span class="text-body-2 ml-2" v-text="post.view"></span>
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
                    <p>The internet continues to develop exponentially, and the job hunting for students and junior graduates needs help to collect jobs from a lot of different job websites, tools to improve efficiency of work related to job hunting. Fresherjob is the platform to help those junior friends find more suitable jobs. We’re looking for a skilled web developer to join our team to develop a new generation of platforms to help all the job hunters increase efficiency and opportunities with AI.</p><p></p><h5>Role objectives</h5><ul><li><p>Create well-designed and tested code using best practices for web development, including for responsive design and mobile display</p></li><li><p>Create websites and interfaces using standard web development practices, and incorporate data from back-end APIs or databases</p></li><li><p>Develop or validate testing schedules that address all browsers and devices, ensuring web content/features can be accessed on any computer</p></li></ul><h5>Role responsibilities</h5><ul><li><p>Make small edits requested by customers, develop plans for completing larger projects, and suggest solutions to improve existing websites</p></li><li><p>Perform UI design and coding and create reusable objects and wireframes for web pages or back-end API/services</p></li></ul>
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