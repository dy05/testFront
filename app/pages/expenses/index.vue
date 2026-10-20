<script setup lang="ts">


import type {ExpenseType, UserType, CategoryType} from "~/utils/types.ts";

// const { data: expenses } = await useFetch('/api/expenses')

const isLoading = ref(true);
const sortDesc = ref(true);
const sortBy = ref(null);
const userId = ref(null);

const expenses = ref<ExpenseType[]>([]);
const users = ref<UserType[]>([]);
const categories = ref<CategoryType[]>([]);

const fetchExpenses = async () => {
  try {
    isLoading.value = true;
    let queryParams = '';
    if (sortBy.value !== null) {
      queryParams = '?sort_by=' + sortBy.value + '&sort_desc=' + sortDesc.value;
    }

    if (userId.value !== null) {
      queryParams = queryParams.length ? queryParams + '&' : '?';

      queryParams += 'user_id=' + userId.value;
    }

    const response = await $fetch<{ data: { data: ExpenseType[] } }>(
        `${API_BASE_URL}/expenses` + queryParams
    );

    expenses.value = response.data.data;

  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};


const fetchCategories = async () => {
  try {
    const response = await $fetch<{ data: { data: CategoryType[] } }>(
        `${API_BASE_URL}/categories`
    );

    categories.value = response.data.data;

  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};


const fetchUsers = async () => {
  try {
    const response = await $fetch<{ data: { data: UserType[] } }>(
        `${API_BASE_URL}/users`
    );

    users.value = response.data.data;

  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};


onMounted(() => {
  fetchExpenses();
  fetchCategories();
  fetchUsers();
});
</script>

<template>
  <div>
    <h1>Expenses List</h1>

    <br/>

    <div>
      <p>
        Filters
      </p>

      <div>
        <label for="sortBy">
          Sort by :
        </label>
        <select name="sortBy" v-model="sortBy">
          <option value=""></option>
          <option value="amount">
            Amount
          </option>
          <option value="title">
            Title
          </option>
          <option value="category">
            Category
          </option>
          <option value="user">
            User
          </option>
        </select>
      </div>

      <div>
        <label for="sortDesc">
          Sort Order
        </label>
        <select name="sortDesc" v-model="sortDesc">
          <option value="1">Desc</option>
          <option value="0">asc</option>
        </select>
      </div>
    </div>

    <div>
      <table>
        <thead>
        <tr>
          <td>Title</td>
          <td>Amount</td>
          <td>Category</td>
          <td>User</td>
          <td>Date</td>
        </tr>
        </thead>
        <tbody>
          <tr v-for="expense in expenses" :key="expense.id">
            <td>
              {{ expense.title }}
            </td>
            <td>
              {{ expense.amount }}
            </td>
            <td>
              {{ expense.category_label }}
            </td>
            <td>
              {{ expense.user_name }}
            </td>
            <td>
              {{ expense.date }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
