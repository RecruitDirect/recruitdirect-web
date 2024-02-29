<script setup lang="ts">
import { ref } from 'vue';
const show2 = ref(true);

/*Location Select*/
const companySelect = ref('');
const typeSelect = ref('');
const industriesSelects = ref([]);
const props = defineProps(['userData', 'companies', 'recruiterType', 'industries']);
const userInfo = ref(props.userData);
const companies = ref(props.companies);
const industries = ref(props.industries);
const recruiterType = ref(props.recruiterType);
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <div class="d-sm-flex align-center justify-space-between">
                <v-card-title class="text-h5">Recruiter profile</v-card-title>
            </div>
        </v-card-item>
        <v-divider></v-divider>
        <!----Account Details---->
        <v-card-text class="pb-0">
            <h6 class="text-h6">Account Details</h6>
            <div class="mt-6">
                <v-row class="align-center mb-3">
                    <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                        <v-label class=" font-weight-medium">Email</v-label>
                    </v-col>
                    <v-col cols="12" sm="9">
                        <v-text-field
                            color="primary"
                            variant="outlined"
                            type="email"
                            placeholder="your_email"
                            suffix="@example.com"
                            hide-details
                            disabled
                            v-model="userInfo.email"
                        />
                    </v-col>
                </v-row>
                <v-row class="align-center mb-3">
                    <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                        <v-label class=" font-weight-medium">Password</v-label>
                    </v-col>
                    <v-col cols="12" sm="9">
                        <v-text-field
                            color="primary"
                            variant="outlined"
                            :type="show2 ? 'text' : 'password'"
                            placeholder="......"
                            hide-details
                            :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append-inner="show2 = !show2"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
            </div>
        </v-card-text>
        <v-divider></v-divider>
        <!----Personal Info---->
        <v-card-text class="pb-1">
            <h6 class="text-h6">Personal Info</h6>
            <div class="mt-6">
                <v-row class="align-center mb-3">
                    <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                        <v-label class=" font-weight-medium">Full Name</v-label>
                    </v-col>
                    <v-col cols="12" sm="9">
                        <v-text-field color="primary" variant="outlined" type="text" placeholder="Your name" hide-details v-model="userInfo.name"/>
                    </v-col>
                </v-row>
                <v-row class="align-center mb-3">
                    <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                        <v-label class=" font-weight-medium">Company</v-label>
                    </v-col>
                    <v-col cols="12" sm="9">
                        <v-select
                            v-model="companySelect"
                            :items="companies"
                            item-title="name"
                            item-value="id"
                            label="Select"
                            return-object
                            single-line
                            variant="outlined"
                            hide-details
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row class="align-center mb-3">
                    <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                        <v-label class=" font-weight-medium">Recruiter type</v-label>
                    </v-col>
                    <v-col cols="12" sm="9">
                        <v-select
                            v-model="typeSelect"
                            :items="recruiterType"
                            item-title="[1]"
                            item-value="[0]"
                            label="Select"
                            single-line
                            variant="outlined"
                            hide-details
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row class="align-center mb-3">
                    <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                        <v-label class=" font-weight-medium">Url</v-label>
                    </v-col>
                    <v-col cols="12" sm="9">
                        <v-text-field color="primary" variant="outlined" type="text" placeholder="linkedin.com/yoururl" hide-details>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="align-center mb-3">
                    <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                        <v-label class=" font-weight-medium">Phone No</v-label>
                    </v-col>
                    <v-col cols="12" sm="9">
                        <v-text-field color="primary" variant="outlined" type="text" placeholder="123 4567 207" hide-details>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="align-center mb-3">
                    <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                        <v-label class=" font-weight-medium">Work years</v-label>
                    </v-col>
                    <v-col cols="12" sm="9">
                        <v-text-field color="primary" variant="outlined" type="number" placeholder="1" hide-details>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="align-center mb-3">
                    <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
                        <v-label class=" font-weight-medium">Industries</v-label>
                    </v-col>
                    <v-col cols="12" sm="9">
                        <v-select
                            v-model="industriesSelects"
                            :items="industries"
                            item-title="[0]"
                            item-value="[0]"
                            label="Select"
                            single-line
                            variant="outlined"
                            hide-details
                            multiple
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row class="align-center mb-3">
                    <v-col cols="12" sm="9" offset-sm="3">
                        <v-btn color="primary" flat>Submit</v-btn>
                        <v-btn class="bg-lighterror text-error ml-4" flat>Cancel</v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-card-text>
    </v-card>
</template>
