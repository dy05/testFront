<script setup lang="ts">
const { data: expenses } = await useFetch('/api/expenses')

</script>

<template>
  <div>
    <h1>Expenses List</h1>

    <br/>

    <div>
      <table>
        <thead>
          <td>User</td>
          <td>User</td>
        </thead>
        <tbody>
          <tr v-for="(expense, index) in expenses" :key="index">
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
