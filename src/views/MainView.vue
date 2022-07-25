<script setup>
import Navbar from '../components/NavbarComponent.vue'
import TodoBar from '../components/TodobarComponent.vue'
import Todolist from '../components/TodolistComponent.vue'

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import request from '../utils/axios'
import { errorAlert } from '../utils/sweetalert'

const router = useRouter()
const user = ref({})

const checkAuth = async () => {
  try {
    const res = await request('/users/check', 'get')
    user.value = res.data.user
  } catch (error) {
    errorAlert('您尚未登入！')
    router.push('/login')
  }
}
onMounted(() => {
  checkAuth()
})
</script>

<template>
  <div
    class="h-screen bg-[#FFD370] md:bg-[linear-gradient(172.7deg,#FFD370_5.12%,#FFD370_53.33%,#FFD370_53.44%,#FFFFFF_53.45%,#FFFFFF_94.32%)]">
    <Navbar :user="user" />
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