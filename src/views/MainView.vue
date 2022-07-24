<script setup>
import Navbar from '../components/NavbarComponent.vue'
import TodoBar from '../components/TodobarComponent.vue'
import Todolist from '../components/TodolistComponent.vue'
</script>

<template>
  <div
    class="h-screen bg-[#FFD370] md:bg-[linear-gradient(172.7deg,#FFD370_5.12%,#FFD370_53.33%,#FFD370_53.44%,#FFFFFF_53.45%,#FFFFFF_94.32%)]">
    <Navbar />
    <div class="container md:py-6 px-8 mx-auto">
      <div class="md:w-[500px] mx-auto">
        <TodoBar class="mb-4" />
        <Todolist v-if="true" />
        <div v-else class="text-center pt-11">
          <p class="mb-4">目前尚無待辦事項</p>
          <img class="block max-w-full mx-auto" src="../assets/images/empty.png" alt="No Todos">
        </div>
      </div>
    </div>
  </div>
</template>