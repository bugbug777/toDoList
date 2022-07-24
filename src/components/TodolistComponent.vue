<script setup>
import { ref } from 'vue'

const tabs = ['全部', '待完成', '已完成']
const status = ref('全部')
const active = ['text-[#333]', 'border-b-2', 'border-[#333]']

const updateStatus = (e) => {
  status.value = e.target.textContent
}

</script>
<template>
  <div class="rounded-[10px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.15)]">
    <!-- Tabs -->
    <ul class="flex">
      <li v-for="tab in tabs" :key="tab" class="grow">
        <a @click.prevent="updateStatus" :class="status === tab ? active : ['text-[#9F9A91]']"
          class="block text-center font-bold text-[14px] py-4" href="#">{{ tab }}</a>
      </li>
    </ul>
    <div class="p-6">
      <ul class="mb-4">
        <li class="border-b border-[#E5E5E5] pb-[15px] mb-4">
          <div class="flex">
            <input class="mr-4" type="checkbox" name="todo1" id="todo1">
            <label class="grow" for="todo1">把冰箱發霉的檸檬拿去丟</label>
            <button type="button">
              <font-awesome-icon icon="fa-solid fa-xmark" fixed-width />
            </button>
          </div>
        </li>
        <li class="border-b border-[#E5E5E5] pb-[15px] mb-4">
          <div class="flex">
            <input class="mr-4" type="checkbox" name="todo2" id="todo2" checked>
            <label class="grow line-through text-[#9F9A91]" for="todo2">打電話叫媽媽匯款給我</label>
            <button type="button">
              <font-awesome-icon icon="fa-solid fa-xmark" fixed-width />
            </button>
          </div>
        </li>
        <li class="border-b border-[#E5E5E5] pb-[15px] mb-4">
          <div class="flex">
            <input class="mr-4" type="checkbox" name="todo1" id="todo1">
            <label class="grow" for="todo1">把冰箱發霉的檸檬拿去丟</label>
            <button type="button">
              <font-awesome-icon icon="fa-solid fa-xmark" fixed-width />
            </button>
          </div>
        </li>
        <li class="border-b border-[#E5E5E5] pb-[15px] mb-4">
          <div class="flex">
            <input class="mr-4" type="checkbox" name="todo2" id="todo2" checked>
            <label class="grow line-through text-[#9F9A91]" for="todo2">打電話叫媽媽匯款給我</label>
            <button type="button">
              <font-awesome-icon icon="fa-solid fa-xmark" fixed-width />
            </button>
          </div>
        </li>
        <li class="border-b border-[#E5E5E5] pb-[15px] mb-4">
          <div class="flex">
            <input class="mr-4" type="checkbox" name="todo1" id="todo1">
            <label class="grow" for="todo1">把冰箱發霉的檸檬拿去丟</label>
            <button type="button">
              <font-awesome-icon icon="fa-solid fa-xmark" fixed-width />
            </button>
          </div>
        </li>
        <li class="border-b border-[#E5E5E5] pb-[15px] mb-4">
          <div class="flex">
            <input class="mr-4" type="checkbox" name="todo2" id="todo2" checked>
            <label class="grow line-through text-[#9F9A91]" for="todo2">打電話叫媽媽匯款給我</label>
            <button type="button">
              <font-awesome-icon icon="fa-solid fa-xmark" fixed-width />
            </button>
          </div>
        </li>
      </ul>
      <div class="flex justify-between">
        <p class="text-[14px]">5 個待完成項目</p>
        <a @click.prevent="" class="text-[14px] text-[#9F9A91]" href="#">清除已完成項目</a>
      </div>
    </div>
  </div>
</template>