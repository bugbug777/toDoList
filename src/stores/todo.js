import { defineStore } from 'pinia';
import request from '../utils/axios'
import { successAlert, errorAlert } from '../utils/sweetalert';

export default defineStore('todoStore', {
  state() {
    return {
      status: '全部',
      todos: [],
      content: '',
    }
  },
  getters: {
    tempTodos: (state) => {
      if (state.status === '全部') {
        return state.todos
      } else if (state.status === '待完成') {
        return state.todos.filter(item => item.status === false)
      } else {
        return state.todos.filter(item => item.status === true)
      }
    },
    todoNum: (state) => state.todos.filter(item => item.status === false).length
  },
  actions: {
    updateStatus(e) {
      this.status = e.target.textContent
    },
    async getTodos() {
      try {
        const res = await request('/todos', 'get')
        this.todos = res.data.todos
      } catch (error) {
        errorAlert('不好意思，伺服器剛剛不小心睡著了！')
      }
    },
    async addTodo() {
      try {
        await request('/todos', 'post', { content: this.content })
        successAlert('新增成功！')
        this.getTodos()
      } catch (error) {
        errorAlert('新增失敗')
      }
    },
    async editTodoStatus(todoId, { status, content }) {
      try {
        await request(`/todos/${todoId}`, 'put', { status, content })
        this.getTodos()
      } catch (error) {
        console.dir(error)
        errorAlert('修改失敗！')
      }
    },
    async editTodo(todoId, e) {
      try {
        await request(`/todos/${todoId}`, 'put', { content: e.target.value })
        this.getTodos()
      } catch (error) {
        errorAlert('修改失敗！')
      }
    },
    async deleteTodo(todoId) {
      try {
        await request(`/todos/${todoId}`, 'delete')
        successAlert('刪除成功！')
        this.getTodos()
      } catch (error) {
        errorAlert('刪除失敗')
      }
    }
  }
});