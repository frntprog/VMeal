<template></template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js";

let ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data;
});
</script>
