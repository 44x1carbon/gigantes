const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Gigantes",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: "gigantes",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  locales: {
    "/": {
      lang: "ja-JP",
    },

    "/en/": {
      lang: "en-US",
    },
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "44x1carbon/gigantes",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    locales: {
      "/": {
        nav: [
          { text: "ガイド", link: "/guide/" },
          { text: "API", link: "/api/" },
        ],
        sidebar: {
          "/": [
            {
              title: "ガイド",
              path: "/guide/",
              children: [
                {
                  title: "はじめに",
                  path: "/guide/",
                },
                {
                  title: "DOM 要素を特定する",
                  path: "/guide/selector",
                },
                {
                  title: "情報を抽出する",
                  path: "/guide/extract",
                },
                {
                  title: "高度な使い方",
                  path: "/guide/advanced",
                },
              ],
            },
          ],
        },
      },
      "/en/": {
        nav: [
          { text: "Guide", link: "/en/guide/" },
          { text: "API", link: "/api/" },
        ],
        sidebar: {
          "/en/": [
            {
              title: "Guide",
              path: "/en/guide/",
              children: [
                {
                  title: "Introduction.",
                  path: "/en/guide/",
                },
                {
                  title: "Identify the DOM element",
                  path: "/en/guide/selector",
                },
                {
                  title: "Extracting information",
                  path: "/en/guide/extract",
                },
                {
                  title: "Advanced usage",
                  path: "/en/guide/advanced",
                },
              ],
            },
          ],
        },
      },
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    [
      "vuepress-plugin-typedoc",
      // Plugin / TypeDoc options
      {
        entryPoints: ["../../src/index.ts"],
        tsconfig: "../../tsconfig.json",

        allReflectionsHaveOwnDocument: true,
      },
    ],
  ],
};
