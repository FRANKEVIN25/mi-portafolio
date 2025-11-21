<script setup lang="ts">
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const laptopLottie = `${import.meta.env.BASE_URL}lotties/laptop.lottie`;
</script>

<template>
  <DotLottieVue
    class="h-full"
    :src="laptopLottie"
    autoplay
    loop
    :speed="0.75"
    useFrameInterpolation
  />
</template>