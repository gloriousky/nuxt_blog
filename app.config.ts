export default defineAppConfig({
  ui: {
    primary: "purple" /** Primary color of your UI */,
    gray: "slate",
    footer: {
      bottom: {
        left: "text-sm text-gray-500 dark:text-gray-400",
        wrapper: "border-t border-gray-200 dark:border-gray-800",
      },
    },
    button: {
      default: {
        color: "cyan",
      },
    },
  },
  seo: {
    siteName: "Nuxt UI - David'",
  },
  header: {
    logo: {
      alt: "",
      light: "",
      dark: "",
    },
    search: true,
    colorMode: true,
    links: [
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/gloriousky",
        target: "_blank",
        "aria-label": "Docs template on GitHub",
      },
      {
        icon: "i-simple-icons-linkedin",
        to: "https://www.linkedin.com/in/zhe-xi-lin-b75358200/",
        target: "_blank",
        "aria-label": "Docs template on Linkedin",
      },
    ],
    tabs: [
      {
        label: "Blog",
        icon: "i-heroicons-square-3-stack-3d",
        to: "/blog",
        children: [
          {
            label: "Features",
            to: "/blog#features",
            exactHash: true,
            icon: "i-heroicons-beaker",
            description: "Discover all the features of Nuxt UI Pro.",
          },
          {
            label: "Pricing",
            to: "/blog#pricing",
            exactHash: true,
            icon: "i-heroicons-credit-card",
            description: "A simple pricing, for solo developers or teams.",
          },
          {
            label: "Guide",
            to: "/blog/guide",
            icon: "i-heroicons-book-open",
            description: "Learn how to use Nuxt UI Pro in your app.",
          },
          {
            label: "Components",
            to: "/blog/components",
            icon: "i-heroicons-cube-transparent",
            description:
              "Discover all the components available in Nuxt UI Pro.",
          },
        ],
      },
      {
        label: "Documentation",
        icon: "i-heroicons-book-open",
        to: "/getting-started",
      },
      {
        label: "Projects",
        icon: "i-simple-icons-stackblitz",
        to: "/",
      },
      {
        label: "About me",
        icon: "i-heroicons-academic-cap",
        to: "/about",
      },
    ],
  },
  footer: {
    credits: "Copyright © 2023",
    colorMode: false,
    links: [
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/gloriousky",
        target: "_blank",
        "aria-label": "Docs template on GitHub",
      },
      {
        icon: "i-simple-icons-linkedin",
        to: "https://www.linkedin.com/in/zhe-xi-lin-b75358200/",
        target: "_blank",
        "aria-label": "Docs template on Linkedin",
      },
    ],
  },
  toc: {
    title: "Table of Contents",
    bottom: {
      title: "Community",
      edit: "https://github.com/nuxt-ui-pro/docs/edit/main/content",
      links: [
        {
          icon: "i-heroicons-star",
          label: "Star on GitHub",
          to: "https://github.com/nuxt/ui",
          target: "_blank",
        },
        {
          icon: "i-heroicons-book-open",
          label: "Nuxt UI Pro docs",
          to: "https://ui.nuxt.com/pro/guide",
          target: "_blank",
        },
        {
          icon: "i-simple-icons-nuxtdotjs",
          label: "Purchase a license",
          to: "https://ui.nuxt.com/pro/purchase",
          target: "_blank",
        },
      ],
    },
  },
});
