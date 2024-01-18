<script setup lang="ts">
const { footer } = useAppConfig();
</script>

<template>
  <div
    class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]"
  >
    <div>
      {{ footer.credits }}
    </div>
    <div class="flex items-center justify-end lg:flex-1 gap-2">
      <UButton
        v-for="(link, index) of footer?.links"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
      />
    </div>
  </div>
</template>
