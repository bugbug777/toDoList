<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import todoStore from '../stores/todo'

const tabs = ['全部', '待完成', '已完成']

const todo = todoStore()
const { status, todos, tempTodos, todoNum } = storeToRefs(todo)
const { getTodos, editTodoStatus, editTodo, deleteTodo, updateStatus } = todo
onMounted(() => getTodos())
</script>

<template>
  <div v-if="todos.length" class="rounded-[10px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.15)]">
    <!-- Tabs -->
    <ul class="flex">
      <li v-for="tab in tabs" :key="tab" class="grow">
        <a @click.prevent="updateStatus" :class="{ 'active': status === tab }" class="block text-center font-bold text-[14px] text-[#9F9A91] py-4" href="#">{{
            tab
        }}</a>
      </li>
    </ul>
    <!-- Todos -->
    <div class="p-6">
      <ul class="mb-4">
        <li v-for="(todo, index) in tempTodos" :key="todo._id" class="border-b border-[#E5E5E5] pb-[15px] mb-4">
          <div class="flex">
            <input @change="editTodoStatus(todo._id, todo)" v-model="todo.status" class="mr-4" type="checkbox" :name="`todo${index}`" :id="`todo${index}`">
            <input @change="editTodo(todo._id, $event)" v-model="todo.content" :class="{ 'done': todo.status }" class="grow focus-visible:outline-none"
              :disabled="todo.status" />
            <button @click="deleteTodo(todo._id)" type="button">
              <font-awesome-icon icon="fa-solid fa-xmark" fixed-width />
            </button>
          </div>
        </li>
      </ul>
      <div class="flex justify-between">
        <p class="text-[14px]">{{ todoNum }} 個待完成項目</p>
        <a @click.prevent="" class="text-[14px] text-[#9F9A91]" href="#">清除已完成項目</a>
      </div>
    </div>
  </div>
  <div v-else class="text-center pt-11">
    <p class="mb-4">目前尚無待辦事項</p>
    <img class="block max-w-full mx-auto" src="../assets/images/empty.png" alt="No Todos">
  </div>
</template>