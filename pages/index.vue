<template>
  <div class="w-full lg:mx-6 text-gray-600 dark:text-white">
    <h2 class="text-center text-2xl mb-2">
      {{ articles.title }}
    </h2>
    <ul class="flex flex-wrap">
      <li v-for="item in articles.data" :key="item" class="w-full md:w-1/2">
        <NuxtLink :to="item.url">
          <UCard class="h-[15rem] mx-2 my-2">
            <template #header>
              <div class="flex justify-between">
                <div />
                <h3 class="truncate text-center">
                  {{ item.title }}
                </h3>
                <div>
                  <UBadge
                    :color="item.category_color"
                    :label="item.category"
                    variant="soft"
                  />
                </div>
              </div>
            </template>
            <img
              class="w-full h-[10rem] hover:scale-105 hover:transition-all"
              :src="item.img"
              alt=""
            >
            <div class="flex justify-end items-center mt-2 text-gray-400">
              <div class="i-heroicons-clock mr-1" />

              <div class="text-xs">
                {{ item.created_time }}
              </div>
            </div>
          </UCard>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
});

const { data: articles } = await useFetch("/api/articles", {
  pick: ["title", "data"],
});
console.log(articles);
</script>
