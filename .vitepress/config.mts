import { defineConfig } from 'vitepress'
import sidebar from './sidebar'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/xxq-docs-site/',
  title: "夏小柒的文档库",
  description: "夏小柒的文档库",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/02.前端/npm文档' },
      { text: '面试', link: '/docs/01.面试/1.前端/index.md', activeMatch: '/面试/1.前端/' }
    ],
    outlineTitle: "页面导航",
    sidebar: sidebar,
    socialLinks: [

    ],

    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    logo: '/logo.png',
  },

  // 添加 head 配置来引入 Fancybox 相关文件
  head: [
    ['link', { rel: 'icon', href: '/xxq-docs-site/favicon.ico' }],
    [
      "link",
      { rel: "stylesheet", href: "/xxq-docs-site/css/fancybox.css" },
    ],
    ["script", { src: "/xxq-docs-site/js/fancybox.umd.js" }],
  ],

  lastUpdated: true,    // 更新时间
  markdown: {
    config: (md) => {
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery"
      })
    }
  }


})
