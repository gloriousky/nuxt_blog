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
    siteName: "Gloriousky Dev",
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
        "aria-label": "GitHub",
      },
      {
        icon: "i-simple-icons-linkedin",
        to: "https://www.linkedin.com/in/zhe-xi-lin-b75358200/",
        target: "_blank",
        "aria-label": "Linkedin",
      },
    ],
    tabs: [
      {
        label: "Blog",
        icon: "i-heroicons-square-3-stack-3d",
        to: "/",
      },
      {
        label: "Projects",
        icon: "i-simple-icons-stackblitz",
        to: "/",
      },
      {
        label: "About",
        icon: "i-heroicons-academic-cap",
        to: "/",
      },
    ],
  },
  footer: {
    credits: "Copyright © 2024",
    colorMode: false,
    links: [
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/gloriousky",
        target: "_blank",
        "aria-label": "GitHub",
      },
      {
        icon: "i-simple-icons-linkedin",
        to: "https://www.linkedin.com/in/zhe-xi-lin-b75358200/",
        target: "_blank",
        "aria-label": "Linkedin",
      },
    ],
  },
});
