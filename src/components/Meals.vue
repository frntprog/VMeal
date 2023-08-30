<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <MealItem v-for="meal of meals" :meal="meal" :key="meal.idMeal" />
  </div>
  <div class="flex justify-center text-gray-600 p-8" v-if="!meals.length">
    There are no meals!
  </div>
</template>

<script setup>
import MealItem from "./MealItem.vue";

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
