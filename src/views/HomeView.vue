<script setup lang="ts">
  import { storeToRefs } from "pinia";

  import HelloWorld from "@/components/HelloWorld.vue";
  import { useBasicStore } from "@/store/index";

  const { counter } = storeToRefs(useBasicStore());
</script>

<template>
  <div class="h-screen items-center flex justify-center">
    <h1 class="text-3xl font-bold">
      <HelloWorld msg="hey vue3 template" />
      <div class="inline-flex m-5">
        <icon-bx-caret-right color="blue" />
        <icon-logos-intel height="400" />
        <icon-logos-microsoft-windows />
        <icon-logos:youtube />
        <icon-cryptocurrency-color:bch />
        <icon-svg-spinners:tadpole />
        <icon-la:ambulance />
        {{ counter }}
      </div>
    </h1>
  </div>
</template>

<style scoped></style>
