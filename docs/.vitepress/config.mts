import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IEASN DOCUMENTS",
  description: "JUST SOME DOCUMENTS",
  lang: "zh-CN",

  locales: {
    root: {
      label: "中文",
      lang: "cn",
    },
    en: {
      label: "English",
      lang: "en", // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: "/en/guide", // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
    },
  },
  vite: {
    server: {
      port: 5454, // 设置默认端口
    },
  },
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documents", link: "/documents" },
    ],

    sidebar: [
      {
        text: "Documents",
        items: [
          { text: "All Examples", link: "/documents" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/JoyNop/doc_ieasn" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present JoyNop(ieasn)",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
  },
});
