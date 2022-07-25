<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import request from '../utils/axios'
import { successAlert, errorAlert } from '../utils/sweetalert'

const router = useRouter()
const user = reactive({
  email: "",
  password: "",
})

const login = async () => {
  try {
    const res = await request('/users/sign_in', 'post', user)
    localStorage.setItem('token', res.data.token)
    successAlert('登入成功！')
    router.push('/')
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      errorAlert('伺服器睡著啦，請嘗試重新登入！')
    } else {
      errorAlert('驗證失敗！')
    }
  }
}
</script>

<template>
  <div class="bg-[#FFD370]">
    <div class="container h-screen mx-auto">
      <div class="h-full flex justify-center items-center">
        <div class="grid grid-cols-12 gap-x-4">
          <div class="hidden md:block col-start-2 col-span-5">
            <img class="max-w-full" src="../assets/images/left.png" alt="Hero">
          </div>
          <div class="col-span-12 md:col-start-8 md:col-span-4">
            <VForm @submit="login" v-slot="{ errors }" class="h-full flex flex-col justify-center text-[#333]">
              <img class="block sm:hidden mb-4" src="../assets/images/logo_lg.png" alt="Logo">
              <h1 class="text-center md:text-left font-bold text-2xl mb-8 md:mb-6">最實用的線上待辦事項服務</h1>
              <div class="mb-4">
                <label class="block text-[14px] font-bold mb-1" for="email">Email</label>
                <VField
                  name="Email"
                  rules="required|email"
                  v-model="user.email"
                  class="block w-full rounded-[10px] placeholder-shown:text-[#9F9A91] focus-visible:outline-amber-700 py-3 px-4 mb-1"
                  id="email" type="text" placeholder="請輸入Email" />
                  <ErrorMessage name="Email">
                  <p class="text-sm text-bold text-red-500">{{ errors.Email }}</p>
                </ErrorMessage>
              </div>
              <div class="mb-6">
                <label class="block text-[14px] font-bold mb-1" for="password">密碼</label>
                <VField
                  name="Password"
                  rules="required"
                  v-model="user.password"
                  class="block w-full rounded-[10px] placeholder-shown:text-[#9F9A91] focus-visible:outline-amber-700 py-3 px-4"
                  id="password" type="password" placeholder="請輸入密碼" />
                  <ErrorMessage name="Password">
                  <p class="text-sm text-bold text-red-500">{{ errors.Password }}</p>
                </ErrorMessage>
              </div>
              <input
                class="block cursor-pointer rounded-[10px] text-white hover:text-gray-300 bg-[#333] py-3 px-12 | mx-auto mb-6"
                type="submit" value="登入">
              <div class="text-center">
                <router-link class="" to="/register">註冊帳號</router-link>
              </div>
            </VForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>