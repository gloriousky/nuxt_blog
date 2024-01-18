<script setup>
const links = [
  {
    label: "All Articles",
    icon: "i-heroicons-home",
    to: "/",
    badge: 66,
  },
  {
    label: "Frontend",
    icon: "i-heroicons-chart-bar",
    to: "/",
    badge: 77,
  },
  {
    label: "Javascript",
    icon: "i-heroicons-command-line",
    to: "/",
    badge: 88,
  },
  {
    label: "Travel",
    icon: "i-heroicons-command-line",
    to: "/",
    badge: 99,
  },
];
</script>

<template>
  <UContainer class="h-dvh my-4">
    <div class="flex">
      <UVerticalNavigation class="py-8" :links="links" />
      <div class="w-full mx-6">
        <h2 class="text-center text-2xl mb-2">
          推薦文章
        </h2>
        <ul class="flex flex-wrap">
          <li v-for="i in 6" :key="i" class="w-1/2">
            <UCard
              class="h-[15rem] mx-2 my-2"
              :ui="{
                background: 'bg-red-500 dark:bg-gray-900',
              }"
            >
              <template #header>
                文章標題
              </template>
              文章內容
              <Placeholder class="h-32" />
            </UCard>
          </li>
        </ul>
      </div>
    </div>
  </UContainer>
</template>
