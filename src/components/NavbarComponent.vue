<template>
  <nav class="container py-4 px-8 mx-auto">
    <div class="flex justify-between items-center">
      <h1>
        <router-link to="/" class="block w-[255px] h-[38.45px] bg-[url('src/assets/images/logo_lg.png')] bg-no-repeat bg-center bg-cover indent-[101%] whitespace-nowrap overflow-hidden">ONLINE TODO LIST</router-link>
      </h1>
      <ul class="flex">
        <li class="hidden md:block font-bold mr-6">王小明的待辦</li>
        <li><a href="#">登出</a></li>
      </ul>
    </div>
  </nav>
</template>