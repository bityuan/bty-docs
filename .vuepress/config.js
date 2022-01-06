const { config } = require("vuepress-theme-hope");
const { getFilesName} = require('../utils/fileName')

module.exports = config({
  title: "BitYuan",
  description: "A demo for vuepress-theme-hope",
  base: '/bty-docs/',
  dest: "./docs",
  head: [
    ['link', {rel:'icon',href:'./public/favicon.ico'}]
  ],
  // head: [
  //   ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
  //   [
  //     "script",
  //     { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
  //   ],
  // ],
  
  themeConfig: {
    logo: "/logo.svg",
    hostname: "https://btydocs.github.io",
    darkmode: 'switch',
    themeColor: false,
    breadcrumb: false,
    blog: false,
    feed: false,
    searchPlaceholder:'Search',
    author: "",
    repo: "https://github.com/bityuan/bty-docs",
    pageInfo:['author','time'],
    // -------导航部分
    locales: {
      // 英文部分
      "/": {
        nav: [
          {
            text: "Home",
            link: "/"
          },
          {
            text: "Guide",
            link: "/guide/"
          }
        ],
        // 侧边栏
        sidebar: {
          "/": [
            {
              title: "Guide",
              prefix: "guide/",
              collapsable: false,
              children: getFilesName('./guide'),
            },
          ],
        },
      },
      // 中文部分
      "/zh/": {
        nav: [
          {
            text: "主页",
            link: "/zh/"
          },
          {
            text: "指南",
            link: "/zh/guide/"
          }
        ],
        sidebar: {
          "/zh/": [
            {
              title: "指南",
              prefix: "guide/",
              collapsable: false,
              children: getFilesName('./zh/guide')
            },
          ],
        },
      },
    },
    // -----导航部分
    git: {
      timezone: "Asia/Shanghai",
      contributor:false
    },

    mdEnhance: {
      enableAll: true
    },

    pwa: false
  },
});
