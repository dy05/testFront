<template>
  <div>
    <header class="flex">
      <nav class="p-2 ml-auto">
        <div class="flex gap-3 font-bold">
          <NuxtLink to="/">
            Accueil
          </NuxtLink>
          <NuxtLink to="/expenses">
            Expenses
          </NuxtLink>
          <NuxtLink to="/expenses/create">
            Add Expense
          </NuxtLink>
          <NuxtLink to="/summary">
            Summary
          </NuxtLink>
        </div>
      </nav>
    </header>
    <NuxtPage />
  </div>
</template>
