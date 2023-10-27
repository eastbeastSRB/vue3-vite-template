<script setup lang="ts">
  import { storeToRefs } from "pinia";

  import HelloWorld from "@/components/HelloWorld.vue";
  import { useBasicStore } from "@/store/index";

  const { counter } = storeToRefs(useBasicStore());

  import CaretRight from "~icons/bx/caret-right";
</script>

<template>
  <div class="h-screen items-center flex justify-center">
    <h1 class="text-3xl font-bold">
      <HelloWorld msg="hey vue3 template" />
      <div class="inline-flex m-5">
        <caret-right />
        {{ counter }}
      </div>
    </h1>
  </div>
</template>

<style scoped></style>
