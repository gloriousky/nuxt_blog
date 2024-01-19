<script setup>
const { theme, header, ui } = useAppConfig();

const colorPicker = [
  [
    {
      slot: "red",
      click: () => {
        ui.primary = "red";
      },
    },
    {
      slot: "orange",
      click: () => {
        ui.primary = "orange";
      },
    },
    {
      slot: "amber",
      click: () => {
        ui.primary = "amber";
      },
    },
    {
      slot: "yellow",
      click: () => {
        ui.primary = "yellow";
      },
    },
    {
      slot: "lime",
      click: () => {
        ui.primary = "lime";
      },
    },
    {
      slot: "green",
      click: () => {
        ui.primary = "green";
      },
    },
    {
      slot: "emerald",
      click: () => {
        ui.primary = "emerald";
      },
    },
    {
      slot: "teal",
      click: () => {
        ui.primary = "teal";
      },
    },
    {
      slot: "cyan",
      click: () => {
        ui.primary = "cyan";
      },
    },
    {
      slot: "sky",
      click: () => {
        ui.primary = "sky";
      },
    },
    {
      slot: "blue",
      click: () => {
        ui.primary = "blue";
      },
    },
    {
      slot: "indigo",
      click: () => {
        ui.primary = "indigo";
      },
    },
    {
      slot: "violet",
      click: () => {
        ui.primary = "violet";
      },
    },
    {
      slot: "purple",
      click: () => {
        ui.primary = "purple";
      },
    },
    {
      slot: "fuchsia",
      click: () => {
        ui.primary = "fuchsia";
      },
    },
    {
      slot: "pink",
      click: () => {
        ui.primary = "pink";
      },
    },
    {
      slot: "rose",
      click: () => {
        ui.primary = "rose";
      },
    },
  ],

  [
    {
      slot: "slate",
      click: () => {
        ui.gray = "slate";
      },
    },
    {
      slot: "gray",
      click: () => {
        ui.gray = "cool";
      },
    },
    {
      slot: "zinc",
      click: () => {
        ui.gray = "zinc";
      },
    },
    {
      slot: "neutral",
      click: () => {
        ui.gray = "neutral";
      },
    },
    {
      slot: "stone",
      click: () => {
        ui.gray = "stone";
      },
    },
  ],
];

const switchDarkMode = () => {
  theme.darkMode = !theme.darkMode;
  if (localStorage.getItem("nuxt-color-mode") === "light") {
    localStorage.setItem("nuxt-color-mode", "dark");
    document.documentElement.classList.toggle("dark");
  } else {
    localStorage.setItem("nuxt-color-mode", "light");
    document.documentElement.classList.toggle("dark");
  }
};
</script>

<template>
  <div
    class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]"
  >
    <NuxtLink class="lg:flex-1 flex items-center gap-1.5" to="/">
      <h1 class="text-primary text-2xl font-semibold">
        Gloriousky.Dev
      </h1>
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
      <UDropdown
        :items="colorPicker"
        :popper="{ offsetDistance: 0, placement: 'bottom-start' }"
        :ui="{ padding: 'flex flex-wrap p-1', item: { base: 'w-1/5' } }"
      >
        <UButton v-bind="{ color: 'primary', variant: 'ghost' }">
          <span class="i-heroicons-swatch-20-solid flex-shrink-0 h-5 w-5" />
        </UButton>
        <template #red>
          <div class="bg-red-500 rounded-full w-3 h-3" />
        </template>
        <template #orange>
          <div class="bg-orange-500 rounded-full w-3 h-3" />
        </template>
        <template #amber>
          <div class="bg-amber-500 rounded-full w-3 h-3" />
        </template>
        <template #yellow>
          <div class="bg-yellow-500 rounded-full w-3 h-3" />
        </template>
        <template #lime>
          <div class="bg-lime-500 rounded-full w-3 h-3" />
        </template>
        <template #green>
          <div class="bg-green-500 rounded-full w-3 h-3" />
        </template>
        <template #emerald>
          <div class="bg-emerald-500 rounded-full w-3 h-3" />
        </template>
        <template #teal>
          <div class="bg-teal-500 rounded-full w-3 h-3" />
        </template>
        <template #cyan>
          <div class="bg-cyan-500 rounded-full w-3 h-3" />
        </template>
        <template #sky>
          <div class="bg-sky-500 rounded-full w-3 h-3" />
        </template>
        <template #blue>
          <div class="bg-blue-500 rounded-full w-3 h-3" />
        </template>
        <template #indigo>
          <div class="bg-indigo-500 rounded-full w-3 h-3" />
        </template>
        <template #violet>
          <div class="bg-violet-500 rounded-full w-3 h-3" />
        </template>
        <template #purple>
          <div class="bg-purple-500 rounded-full w-3 h-3" />
        </template>
        <template #fuchsia>
          <div class="bg-fuchsia-500 rounded-full w-3 h-3" />
        </template>
        <template #pink>
          <div class="bg-pink-500 rounded-full w-3 h-3" />
        </template>
        <template #rose>
          <div class="bg-rose-500 rounded-full w-3 h-3" />
        </template>
        <template #slate>
          <div class="bg-slate-500 rounded-full w-3 h-3" />
        </template>
        <template #gray>
          <div class="bg-gray-500 rounded-full w-3 h-3" />
        </template>
        <template #zinc>
          <div class="bg-zinc-500 rounded-full w-3 h-3" />
        </template>
        <template #neutral>
          <div class="bg-neutral-500 rounded-full w-3 h-3" />
        </template>
        <template #stone>
          <div class="bg-stone-500 rounded-full w-3 h-3" />
        </template>
      </UDropdown>

      <UButton
        v-bind="{ color: 'gray', variant: 'ghost' }"
        @click="switchDarkMode"
      >
        <span
          class="flex-shrink-0 h-5 w-5"
          :class="
            theme.darkMode
              ? 'i-heroicons-moon-20-solid'
              : 'i-heroicons-sun-20-solid'
          "
        />
      </UButton>
      <UButton
        v-for="(item, index) of header?.links"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...item }"
      />
    </div>
  </div>
</template>
