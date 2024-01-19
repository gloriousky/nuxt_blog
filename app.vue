<script setup lang="ts">
const { seo } = useAppConfig();

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation(),
);

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  ogSiteName: seo?.siteName,
});

provide("navigation", navigation);
</script>

<template>
  <div class="p-4 h-dvh">
    <Header />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Footer />

    <!-- <ClientOnly>
      <LazyUDocsSearch :files="files" :navigation="navigation" />
    </ClientOnly> -->

    <!-- <UNotifications /> -->
  </div>
</template>
