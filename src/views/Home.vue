<template>
  <div class="flex mt-2 justify-center gap-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js";

const letters = "ABCDEFGHIJKLMOPQRSTUVWXYZ".split("");
let ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data;
});
</script>
