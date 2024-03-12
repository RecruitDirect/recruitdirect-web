<script setup lang="ts">
import Logo from '@/layouts/full/logo/LogoDark.vue';
/* Login form */
import LoginForm from '@/components/auth/LoginForm.vue';
</script>

<template>
    <div class="pa-3">
        <v-row class="h-100vh mh-100 auth">
            <v-col cols="12" lg="7" xl="8"
                class="d-lg-flex align-center justify-center authentication">
                <div class="auth-header pt-lg-5 pt-2 px-sm-6 px-3 pb-lg-5 pb-0">
                    <div class="position-relative">
                        <Logo />
                    </div>
                </div>
                <div style="max-height: 80%;" class="d-lg-flex">
                    <img src="@/assets/images/backgrounds/recruitdirect_home1.png" class="d-none d-lg-flex"
                        alt="login-background" />
                </div>
            </v-col>
            <v-col cols="12" lg="5" xl="4" class="d-flex align-center justify-center bg-surface">
                <div class="mt-xl-0 mt-5 mw-100">
                    <h2 class="text-h3 font-weight-semibold mb-2">Welcome to RecruitDirect</h2>
                    <div class="text-subtitle-1 mb-6">Your recruiting platform</div>
                    <LoginForm />
                    <h6 class="text-h6  text-medium-emphasis  d-flex align-center mt-6 font-weight-medium">
                        New to RecruitDirect?
                        <v-btn class="pl-0 text-primary text-body-1 opacity-1 pl-2 font-weight-medium" height="auto"
                            to="/auth/register" variant="plain">Create an account</v-btn>
                    </h6>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
