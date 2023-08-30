<template>
  <div class="bg-gray-200 h-full">
    <navbar />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import navbar from "./NavBar.vue";
</script>
