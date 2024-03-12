<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { IconBusinessplan, IconFileCv, IconStereoGlasses, IconTrophyFilled } from '@tabler/icons-vue';

import { currencyFormatter } from '../../../../utils/math';

const props = defineProps(['jobDetail']);
const jobDetail = ref(props.jobDetail);

const resumeReviewCnt = computed(() => {
    return jobDetail.value.second.filter((item: any) => {
        return item.candidate.status == 'WAITING'
    }).reduce((p: number, r: any) => p + 1, 0);
})

const interviewingCnt = computed(() => {
    return jobDetail.value.second.filter((item: any) => {
        return item.candidate.status == 'INTERVIEWING'
    }).reduce((p: number, r: any) => p + 1, 0);
})

const offerCnt = computed(() => {
    return jobDetail.value.second.filter((item: any) => {
        return item.candidate.status == 'OFFERED'
    }).reduce((p: number, r: any) => p + 1, 0);
})

const candidateStatus: any[] = [
    {
        icon: IconFileCv,
        title: 'Resume review',
        subtitle: '',
        rank: resumeReviewCnt,
        bgcolor: 'warning'
    },
    {
        icon: IconStereoGlasses,
        title: 'Interviewing',
        subtitle: '',
        rank: interviewingCnt,
        bgcolor: 'info'
    },
    {
        icon: IconTrophyFilled,
        title: 'Offered',
        subtitle: '',
        rank: offerCnt,
        bgcolor: 'success'
    }
];

const bonusList: any[] = [
    {
        icon: IconBusinessplan,
        title: 'Recruiting bonus',
    }
];

function startRecruiting() {

}

function launchAI() {

}

</script>
<template>
    <v-sheet class="pa-4 pt-4">
        
        <div class="pa-2 text-h6">Recruiting center</div>

        <div class="my-2 mx-1">
            <div class="d-flex align-center" v-for="list in candidateStatus" :key="list.title">
                <v-avatar :class="'my-1 rounded-md bg-light'+ list.bgcolor"  size="26">    
                    <component :is="list.icon" :class="'text-'+ list.bgcolor" stroke-width="2" size="18" />
                </v-avatar>
                <div class="pl-4 mt-n1">
                    <div class="text-body-2 font-weight-medium" v-text="list.title"></div>
                    <div class="ml-auto font-weight-normal text-body-2 text-medium-emphasis text-decoration-underline" v-text="list.subtitle"></div>
                </div>
                <div class="ml-auto mr-1 font-weight-medium text-body-2 text-medium-emphasis" v-text="list.rank"></div>
            </div>
        </div>
        <v-divider :thickness="1" class="border-opacity-75" color="black"></v-divider>
        <div class="my-4">
            <div class="d-flex align-center" v-for="list in bonusList" :key="list.title">
                <v-avatar class="rounded-md"  size="30">    
                    <component :is="list.icon" stroke-width="2" size="24" />
                </v-avatar>
                <div class="pl-4 mt-n1">
                    <div class="text-body-2 font-weight-medium" v-text="list.title"></div>
                    <div class="ml-auto font-weight-medium text-body-2 text-medium-emphasis" v-text="currencyFormatter.format(jobDetail.first.totalBonus)"></div>
                </div>
            </div>
        </div>
        <v-divider :thickness="1" class="border-opacity-75" color="black"></v-divider>
        <v-card-item class="text-center py-0">
            <v-btn color="primary" @click="startRecruiting()"  block class="mt-5" >Start recruiting</v-btn>
        </v-card-item>
        <v-card-item class="text-center pt-0">
            <img src="@/assets/images/backgrounds/maintenance.svg" width="200" alt="image" />
            <h5 class="text-h5">Empower with AI account manager!</h5>
            <h6 class="text-subtitle-1 text-13 my-4 textSecondary">
                Trying our AI assistant for questions, advices, and actions
            </h6>
            <v-btn block class="btn-grad" @click="launchAI()">Try it!</v-btn>
        </v-card-item>
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

.btn-grad {
    background-image: linear-gradient(to right, #E55D87 0%, #5FC3E4  51%, #E55D87  100%);
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
}

.btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
         
         
</style>
