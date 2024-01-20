<template>
  <div class="w-full lg:mx-6">
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
</template>
<script setup>
definePageMeta({
  layout: "default",
});
</script>
