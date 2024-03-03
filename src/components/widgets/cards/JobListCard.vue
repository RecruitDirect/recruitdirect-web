<script setup lang="ts">
import { ref } from "vue";
import { blogCard } from "@/_mockApis/components/widget/card";
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Image Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-row>
    <v-col cols="12" lg="12" v-for="(card, i) in blogCard" :key="i">
      <v-card elevation="10" rounded="md" height="300">
          <v-row class="mt-md-0 mt-sm-3 mt-3">
              <v-col cols="2" sm="2" class="d-flex py-0 pr-0 align-center justify-center flex-wrap">
                  <v-card-item>
                    <v-avatar rounded="lg" class="ml-2 mt-2 mb-2" size="120" cla>
                        <img :src="card.coveravatar" :alt="card.avatar" class="h-100 w-100"/>
                    </v-avatar>
                  </v-card-item>
                    <div class="text-subtitle-1 text-medium-emphasis mt-1" v-text="card.title"></div>
              </v-col>
              <v-col cols="8" sm="8">
                  <h5 class="text-h5 text-13 my-6">
                        <RouterLink class="text-decoration-underline color-inherits" :to="card.link">{{ card.title }}</RouterLink>
                  </h5>
                  <v-card-item class="pt-0">
                        <v-chip class="text-body-2 font-weight-medium bg-grey100 text-decoration-none" size="small" v-text="card.category"></v-chip>
                        <div class="d-flex align-center justify-space-between">
                            <div>
                              <v-icon size="22">mdi-map-marker</v-icon>
                                <v-avatar class="" size="18">
                                    <MapPinIcon size="18" />
                                </v-avatar>
                                <span class="text-subtitle-1 ml-2" v-text="card.view"></span>
                                <v-avatar class="ml-4" size="18">
                                    <Message2Icon size="18" />
                                </v-avatar>
                                <span class="text-subtitle-1 ml-2" v-text="card.comments"></span>
                            </div>
                            <div>
                                <v-avatar size="10">
                                    <CircleIcon size="10" />
                                </v-avatar>
                                <span class="text-subtitle-2 ml-2" v-text="card.time"></span>
                            </div>
                        </div>
                    </v-card-item>
                  <v-btn class="mt-0" :color="'primary'">Go Somewhere</v-btn>
              </v-col>
              
          </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
