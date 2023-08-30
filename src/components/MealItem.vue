<template>
  <div
    :key="meal.idMeal"
    class="bg-white shadow rounded-xl hover:scale-105 transition-all max-w-[400px]"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-48 w-full object-cover"
      />
    </router-link>
    <div class="p-3 pb-5">
      <h3 class="pt-1 font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quod
        placeat quas commodi, excepturi quos expedita.
      </p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "./YouTubeButton.vue";

const { meal } = defineProps({
  meal: Object,
});
</script>
