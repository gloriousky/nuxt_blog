<script setup>
const links = [
  {
    label: "All Articles",
    icon: "i-heroicons-list-bullet",
    to: "/",
    badge: 66,
  },

  {
    label: "Frontend",
    icon: "i-heroicons-window-20-solid",
    to: "/",
    badge: 77,
  },
  {
    label: "Investment performance",
    icon: "i-heroicons-chart-bar",
    to: "/",
    badge: 88,
  },
  {
    label: "Travel",
    icon: "i-heroicons-globe-alt",
    to: "/",
    badge: 99,
  },
  {
    label: "Devops",
    icon: "i-heroicons-command-line",
    to: "/",
    badge: 99,
  },
];
</script>

<template>
  <UContainer class="h-dvh my-4">
    <div class="md:flex">
      <UVerticalNavigation
        class="mt-[6rem]"
        :links="links"
        :ui="{
          base: 'hover:bg-gr',
          padding: 'px-3 py-1.5 my-2',
        }"
      />
      <div class="w-full md:mx-6">
        <h2 class="text-center text-2xl mb-2">
          推薦文章
        </h2>
        <ul class="flex flex-wrap">
          <li v-for="i in 6" :key="i" class="w-full md:w-1/2">
            <UCard
              class="h-[15rem] mx-2 my-2"
              :ui="{
                background: 'bg-gray-200 dark:bg-gray-900',
              }"
            >
              <template #header>
                文章標題
              </template>
              文章內容
            </UCard>
          </li>
        </ul>
      </div>
    </div>
  </UContainer>
</template>
