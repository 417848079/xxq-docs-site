import { defineConfig } from "vitepress";
import sidebar from "./sidebar";
import mdItCustomAttrs from "markdown-it-custom-attrs";
import { withMermaid } from 'vitepress-plugin-mermaid';

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  vite: {
    optimizeDeps: {
      include: ['dayjs', 'mermaid'],
      exclude: ['dayjs/min']
    }
  },
  base: "/xxq-docs-site/",
  title: "夏小柒的文档库",
  description: "夏小柒的文档库",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "npm文档", link: "/docs/02.前端/npm文档" },
      { text: "git基本使用", link: "/docs/git/git基本使用" },
      {
        text: "面试",
        items: [
          {
            text: "JavaScript",
            items: [
              { text: "Vue面试题", link: "/docs/01.面试/1.前端/Vue面试题" },
              { text: "JavaScript面试题", link: "/docs/01.面试/1.前端/JavaScript面试题" },
              { text: "index", link: "/docs/01.面试/1.前端/index" },
              { text: "index2", link: "/docs/01.面试/1.前端/index2" },
            ],
          },
          {
            text: "Java",
            items: [
              { text: "Java面试题", link: "/docs/01.面试/JAVA/JAVA面试题" },
            ],
          },
        ],
      },
    ],
    outlineTitle: "页面导航",
    sidebar: sidebar,
    socialLinks: [
      { icon: "github", link: "" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#FFC107" d="M17.5,44c-3.6,0-6.5-1.6-6.5-3.5s2.9-3.5,6.5-3.5s6.5,1.6,6.5,3.5S21.1,44,17.5,44z M37,40.5c0-1.9-2.9-3.5-6.5-3.5S24,38.6,24,40.5s2.9,3.5,6.5,3.5S37,42.4,37,40.5z"></path><path fill="#37474F" d="M37.2,22.2c-0.1-0.3-0.2-0.6-0.3-1c0.1-0.5,0.1-1,0.1-1.5c0-1.4-0.1-2.6-0.1-3.6C36.9,9.4,31.1,4,24,4S11,9.4,11,16.1c0,0.9,0,2.2,0,3.6c0,0.5,0,1,0.1,1.5c-0.1,0.3-0.2,0.6-0.3,1c-1.9,2.7-3.8,6-3.8,8.5C7,35.5,8.4,35,8.4,35c0.6,0,1.6-1,2.5-2.1C13,38.8,18,43,24,43s11-4.2,13.1-10.1C38,34,39,35,39.6,35c0,0,1.4,0.5,1.4-4.3C41,28.2,39.1,24.8,37.2,22.2z"></path><path fill="#ECEFF1" d="M14.7,23c-0.5,1.5-0.7,3.1-0.7,4.8C14,35.1,18.5,41,24,41s10-5.9,10-13.2c0-1.7-0.3-3.3-0.7-4.8H14.7z"></path><path fill="#FFF" d="M23,13.5c0,1.9-1.1,3.5-2.5,3.5S18,15.4,18,13.5s1.1-3.5,2.5-3.5S23,11.6,23,13.5z M27.5,10c-1.4,0-2.5,1.6-2.5,3.5s1.1,3.5,2.5,3.5s2.5-1.6,2.5-3.5S28.9,10,27.5,10z"></path><path fill="#37474F" d="M22,13.5c0,0.8-0.4,1.5-1,1.5s-1-0.7-1-1.5s0.4-1.5,1-1.5S22,12.7,22,13.5z M27,12c-0.6,0-1,0.7-1,1.5s0.4-0.5,1-0.5s1,1.3,1,0.5S27.6,12,27,12z"></path><path fill="#FFC107" d="M32,19.5c0,0.8-3.6,2.5-8,2.5s-8-1.7-8-2.5s3.6-1.5,8-1.5S32,18.7,32,19.5z"></path><path fill="#FF3D00" d="M38.7,21.2c-0.4-1.5-1-2.2-2.1-1.3c0,0-5.9,3.1-12.5,3.1v0.1l0-0.1c-6.6,0-12.5-3.1-12.5-3.1c-1.1-0.8-1.7-0.2-2.1,1.3c-0.4,1.5-0.7,2,0.7,2.8c0.1,0.1,1.4,0.8,3.4,1.7c-0.6,3.5-0.5,6.8-0.5,7c0.1,1.5,1.3,1.3,2.9,1.3c1.6-0.1,2.9,0,2.9-1.6c0-0.9,0-2.9,0.3-5c1.6,0.3,3.2,0.6,5,0.6l0,0v0c7.3,0,13.7-3.9,13.9-4C39.3,23.3,39,22.8,38.7,21.2z"></path><path fill="#DD2C00" d="M13.2,27.7c1.6,0.6,3.5,1.3,5.6,1.7c0-0.6,0.1-1.3,0.2-2c-2.1-0.5-4-1.1-5.5-1.7C13.4,26.4,13.3,27.1,13.2,27.7z"></path></svg>',
        },
        link: "https://qm.qq.com/q/lQVM3itkpc",
      },
    ],

    search: {
      provider: "local",
    },
    lastUpdated: {
      text: "最后更新时间",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    logo: "/logo.png",
  },

  // 添加 head 配置来引入 Fancybox 相关文件
  head: [
    ["link", { rel: "icon", href: "/xxq-docs-site/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "/xxq-docs-site/css/fancybox.css" }],
    ["script", { src: "/xxq-docs-site/js/fancybox.umd.js" }],
  ],

  lastUpdated: true, // 更新时间
  markdown: {
    config: (md) => {
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      })
    },
  },
  mermaid: {
    theme: 'default',
    gantt: { barHeight: 130 },
    flowchart: { useMaxWidth: false }, // 允许自由缩放
    // 其他 Mermaid 配置...
  }
}));
