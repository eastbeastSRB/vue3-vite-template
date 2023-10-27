<script setup lang="ts">
  import { useBasicStore } from "@/store/index";

  defineProps<{ msg: string }>();

  const basicStore = useBasicStore();

  const buttonClick = (): void => {
    basicStore.updateCounter();
  };
</script>

<template>
  <h1 class="text-3xl font-bold">{{ msg }} *</h1>
  <button
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    type="button"
    @click="buttonClick"
  >
    Click
  </button>
</template>

<style scoped></style>
