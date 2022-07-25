<script setup>
import { ref, onMounted } from 'vue'
import request from '../utils/axios'
import { errorAlert } from '../utils/sweetalert';

const tabs = ['全部', '待完成', '已完成']
const status = ref('全部')
const active = ['text-[#333]', 'border-b-2', 'border-[#333]']
const updateStatus = (e) => {
  status.value = e.target.textContent
}

const todos = ref([])
const getTodos = async () => {
  try {
    const res = await request('/todos', 'get')
    todos.value = res.data.todos
  } catch (error) {
    console.log(error)
    errorAlert('不好意思，伺服器剛剛不小心睡著了！')
  }
}
onMounted(() => getTodos())

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
    <!-- Todos -->
    <div class="p-6">
      <ul class="mb-4">
        <li v-for="(todo, index) in todos" :key="todo._id" class="border-b border-[#E5E5E5] pb-[15px] mb-4">
          <div class="flex">
            <input v-model="todo.status" class="mr-4" type="checkbox" :name="`todo${index}`" :id="`todo${index}`">
            <input v-model="todo.content" :class="{ 'done': todo.status }" class="grow focus-visible:outline-none" :disabled="todo.status" />
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

<style lang="postcss" scoped>
.done {
  @apply line-through text-[#9F9A91] disabled:bg-white
}
</style>