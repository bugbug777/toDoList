<script setup>
import logoImg from '@/assets/images/logo_lg.png'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { successAlert } from '../utils/sweetalert'

const props = defineProps({
  user: Object
})

const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  successAlert('成功登出！')
  router.push('/login')
}
</script>

<template>
  <nav class="container py-4 px-8 mx-auto">
    <div class="flex justify-between items-center">
      <h1>
        <router-link to="/" :style="{ backgroundImage: `url(${logoImg})` }" class="block w-[255px] h-[38.45px] bg-no-repeat bg-center bg-cover indent-[101%] whitespace-nowrap overflow-hidden">ONLINE TODO LIST</router-link>
      </h1>
      <ul class="flex">
        <li class="hidden md:block font-bold mr-6">{{ `${user.name} 的待辦` }}</li>
        <li><a @click.prevent="logout" href="#">登出</a></li>
      </ul>
    </div>
  </nav>
</template>