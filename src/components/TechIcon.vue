<template>
  <div
    :key="icon"
    :title="title"
    :style="{ '--icon-color': iconColor }"
    class="relative aspect-square overflow-hidden rounded-lg border border-[color-mix(in_oklab,_var(--icon-color)_25%,_transparent)] p-4 transition-all before:absolute before:top-0 before:left-0 before:h-full before:w-full before:shadow-[0_0_16px_0_color-mix(in_oklab,_var(--icon-color)_25%,_transparent)_inset] hover:border-[color-mix(in_oklab,_var(--icon-color)_35%,_transparent)] hover:shadow-[0_10px_50px_0_color-mix(in_oklab,_var(--icon-color)_25%,_transparent)]"
  >
    <!-- Si es un ícono de Devicon, usa <i> -->
    <i v-if="!isCustomImage" ref="iconRef" :class="[icon, 'text-5xl']"></i>
    
    <!-- Si es una imagen personalizada, usa <img> -->
    <img 
      v-else 
      :src="icon" 
      :alt="title"
      class="h-full w-full object-contain"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, useTemplateRef } from "vue";

interface Props {
  icon: string;
  title: string;
}

const props = defineProps<Props>();

const iconRef = useTemplateRef("iconRef");
const iconColor = ref("rgba(0,0,0,0)");

// Detecta si es una imagen personalizada (URL o ruta)
const isCustomImage = computed(() => {
  return props.icon.startsWith('http') || 
         props.icon.startsWith('/') || 
         props.icon.endsWith('.png') || 
         props.icon.endsWith('.svg') ||
         props.icon.endsWith('.jpg') ||
         props.icon.endsWith('.webp');
});

onMounted(() => {
  if (iconRef.value && iconRef.value.parentElement) {
    const styles = getComputedStyle(iconRef.value, "::before");
    const color = styles.color;
    iconRef.value.parentElement.style.setProperty("--icon-color", color);
  }
});
</script>