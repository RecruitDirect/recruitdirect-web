<script setup lang="ts">
import { ref } from "vue";
import { blogCard } from "@/_mockApis/components/widget/card";
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- job Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-row>
    <v-col cols="8" lg="8" v-for="(card, i) in blogCard" :key="i">
      <v-card elevation="10" rounded="md" height="300" class="px-6">
          <v-row class="mt-md-0 mt-sm-3 mt-3">
              <v-col cols="2" sm="2" class="d-flex py-0 pr-0 align-start justify-center flex-wrap">
                  <v-card-item>
                    <v-avatar rounded="lg" class="" size="120" cla>
                        <img :src="card.coveravatar" :alt="card.avatar" class="h-100 w-100"/>
                    </v-avatar>
                    <div class="text-title-1 my-4 text-center font-weight-medium" v-text="'Tesla'"></div>
                    <div>
                      <v-avatar class="ml-4" size="22">
                        <v-icon size="22">mdi-map-marker</v-icon>
                      </v-avatar>
                      <div class="text-title-1 my-4 text-center font-weight-medium" v-text="'Tesla'"></div>
                    </div>
                  </v-card-item>
              </v-col>
              <v-col cols="10" sm="10">
                  <h5 class="text-h5 text-13 my-5 mx-5">
                    <RouterLink class="text-decoration-underline color-inherits" :to="card.link">{{ 'Senior Software Engineer' }}</RouterLink>
                  </h5>
                  <v-card-item class="pt-0 px-0 py-0">
                        <div class="d-flex align-center justify-space-between">
                          <div class="d-flex align-center start">
                            <div>
                              <v-avatar class="ml-4" size="22">
                                <v-icon size="22">mdi-map-marker</v-icon>
                              </v-avatar>
                              <span class="text-subtitle-1 ml-2" v-text="'Seattle'"></span>
                            </div>
                            <div>
                              <v-avatar class="ml-4" size="22">
                                <v-icon size="22">mdi-briefcase</v-icon>
                              </v-avatar>
                              <span class="text-subtitle-1 ml-2" v-text="'Full-time'"></span>
                            </div>
                            <div>
                              <v-avatar class="ml-4" size="22">
                                <v-icon size="22">mdi-train-car</v-icon>
                              </v-avatar>
                              <span class="text-subtitle-1 ml-2" v-text="'Hybrid'"></span>
                            </div>
                          </div>
                          <div class="pr-4">
                            <v-avatar size="22">
                              <v-icon size="22">mdi-clipboard-text-clock</v-icon>
                            </v-avatar>
                            <span class="text-subtitle-2 ml-2" v-text="card.time"></span>
                          </div>
                        </div>
                    </v-card-item>
                    <v-card-item class="pt-0 pl-4">
                      <div class="d-flex align-start justify-space-between">
                        <v-col cols="6" class="container px-0">
                          <div class="d-flex">
                            <span class="text-subtitle-1" style="min-width: 180px">Resume bonus: </span>
                            <span class="text-subtitle-2" v-text="'$ ' + card.comments"></span>
                          </div>
                          <div class="d-flex">
                            <span class="text-subtitle-1" style="min-width: 180px">Interview bonus: </span>
                            <span class="text-subtitle-2" v-text="'$ 150'"></span>
                          </div>
                          <div class="d-flex">
                              <span class="text-subtitle-1" style="min-width: 180px">Total bonus: </span>
                            <span class="text-subtitle-2" v-text="'$ 1,8000'"></span>
                          </div>
                        </v-col>
                        <v-col cols="6" class="px-0">
                          <span class="text-subtitle-1 ">Salary: </span>
                          <span class="text-subtitle-2 ml-2" v-text="'$ 12,000 - $ 19,000'"></span>
                        </v-col>
                      </div>
                    </v-card-item>
                  <v-btn class="mt-0" :color="'primary'">Go Somewhere</v-btn>
              </v-col>
              
          </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
