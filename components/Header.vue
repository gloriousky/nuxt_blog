<script setup lang="ts">
const { header } = useAppConfig();
</script>

<template>
  <div
    class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]"
  >
    <NuxtLink class="lg:flex-1 flex items-center gap-1.5" to="/">
      <h1 class="hover:text-primary text-2xl font-semibold">David's blog</h1>
    </NuxtLink>
    <ul class="items-center gap-x-8 hidden lg:flex">
      <li v-for="(item, idx) of header?.tabs" :key="idx" class="relative">
        <NuxtLink
          class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
          :to="item.to"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
    <div class="flex items-center justify-end lg:flex-1 gap-2">
      <UButton
        v-for="(link, index) of header?.links"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
      />
    </div>
  </div>
</template>
