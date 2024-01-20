<template>
  <div>
    <UContainer class="lg:flex h-dvh my-4">
      <UVerticalNavigation
        class="mt-[6rem]"
        :links="links"
        :ui="{
          base: 'hover:bg-gr',
          padding: 'px-3 py-1.5 my-2',
        }"
      />
      <slot />
    </UContainer>
  </div>
</template>
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
