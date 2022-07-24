<template>
  <div class="container h-screen mx-auto">
    <div class="h-full flex justify-center items-center">
      <div class="grid grid-cols-12 gap-x-4">
        <div class="hidden md:flex items-center col-start-2 col-span-5">
          <img class="block max-w-full" src="../assets/images/left.png" alt="Hero">
        </div>
        <div class="col-span-12 md:col-start-8 md:col-span-4">
          <form @submit.prevent="" class="h-full flex flex-col justify-center text-[#333]">
            <img class="block sm:hidden mb-4" src="../assets/images/logo_lg.png" alt="Logo">
            <h1 class="text-center md:text-left font-bold text-2xl mb-8 md:mb-6">註冊帳號</h1>
            <div class="mb-4">
              <label class="block text-[14px] font-bold mb-1" for="email">Email</label>
              <input class="block w-full rounded-[10px] placeholder-shown:text-[#9F9A91] focus-visible:outline-amber-700 py-3 px-4" id="email"
                type="text" placeholder="請輸入Email">
            </div>
            <div class="mb-4">
              <label class="block text-[14px] font-bold mb-1" for="name">您的暱稱</label>
              <input class="block w-full rounded-[10px] placeholder-shown:text-[#9F9A91] focus-visible:outline-amber-700 py-3 px-4" id="name"
                type="text" placeholder="請輸入您的暱稱">
            </div>
            <div class="mb-4">
              <label class="block text-[14px] font-bold mb-1" for="password">密碼</label>
              <input class="block w-full rounded-[10px] placeholder-shown:text-[#9F9A91] focus-visible:outline-amber-700 py-3 px-4" id="password"
                type="password" placeholder="請輸入密碼">
            </div>
            <div class="mb-6">
              <label class="block text-[14px] font-bold mb-1" for="confirmPassword">再次輸入密碼</label>
              <input class="block w-full rounded-[10px] placeholder-shown:text-[#9F9A91] focus-visible:outline-amber-700 py-3 px-4" id="confirmPassword"
                type="password" placeholder="請再次輸入密碼">
            </div>
            <input class="block cursor-pointer rounded-[10px] text-white hover:text-gray-300 bg-[#333] py-3 px-12 | mx-auto mb-6" type="submit" value="註冊帳號">
            <div class="text-center">
              <router-link class="" to="/login">登入</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>