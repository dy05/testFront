<script setup lang="ts">
const { data: users } = await useFetch('/api/users')

const expense = ref({
  category_id: null,
  title: null,
  amount: null,
  user_id: null,
  date: null,
})

const addExpense = () => {

}
</script>

<template>
  <div>
    <h1>Add Expense</h1>

    <br/>

    <div>
      <form @submit.prevent="addExpense">
        <div class="mb-4">
          <label for="title">
            Title
          </label>
          <input type="text" name="title" v-model="expense.title">
        </div>

        <div class="mb-4">
          <label for="amount">
            Amount
          </label>
          <input type="text" name="amount" v-model="expense.amount">
        </div>

        <div class="mb-4">
          <label for="category_id">
            Category
          </label>
          <select name="category_id" v-model="expense.category_id">
            <option value=""></option>
<!--            <option v-for="category in categories" :value="category.id" :key="category.id">-->
<!--              {{ category.label}}-->
<!--            </option>-->
          </select>
        </div>

        <div class="mb-4">
          <label for="date">
            Date
          </label>
          <input type="date" name="date" v-model="expense.date">
        </div>

        <div class="mb-4">
          <label for="user_id">
            User
          </label>
          <select name="user_id" v-model="expense.user_id">
            <option value=""></option>
            <!--            <option v-for="user in users" :value="user.id" :key="user.id">-->
            <!--              {{ user.name}}-->
            <!--            </option>-->
          </select>
        </div>

        <div class="flex ml-auto">
          <button type="submit">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
