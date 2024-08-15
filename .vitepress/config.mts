import { defineConfig } from 'vitepress'
import sidebar from './sidebar'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "夏小柒的文档库",
  description: "docs",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/前端/npm文档' },
      { text: '面试', link: '/docs/面试/前端面试题', activeMatch: '/面试/' }
    ],
    outlineTitle: "页面导航",
    sidebar: sidebar,
    // sidebar: [
    //   { // 默认规则
    //     text: '前端',
    //     collapsed: false,
    //     items: [
    //       { text: 'npm文档', link: '/docs/front/npm文档' },
    //     ]
    //   },
    //   {
    //     text: '后端',
    //     collapsed: false,
    //     items: [
    //       { text: 'Java学习笔记', link: '/docs/back/Java学习笔记' },
    //     ]
    //   },
    //   {
    //     text: '面试',
    //     items: [
    //       { text: '前端面试题', link: '/docs/interview-question/前端面试题' },
    //       { text: 'JAVA面试题', link: '/docs/interview-question/JAVA面试题' },
    //     ]
    //   },
    //   { // 默认规则
    //     text: '学习笔记',
    //     items: [
    //       { text: 'Java学习笔记', link: '/docs/back/Java学习笔记' },
    //       { text: 'k8s-1.27.x', link: '/docs/k8s/k8s-1.27.x.md' }
    //     ]
    //   },
    //   { 
    //     text: 'git',
    //     items: [
    //       { text: 'git基本使用', link: '/docs/git/git基本使用' },
    //     ]
    //   },
    //   {
    //     text: 'docker',
    //     items: [
    //       { text: 'docker基础', link: '/docs/docker/docker基础' },
    //       { text: 'docker安装redis', link: '/docs/docker/docker安装redis' },
    //       { text: 'k8s-1.27.x', link: '/docs/k8s/k8s-1.27.x.md' },
    //       { text: 'Docker问题记录', link: '/docs/docker/Docker问题记录' },
    //     ]
    //   },
    //   {
    //     text: "问题记录",
    //     items: [
    //       { text: '需要知道', link: '/docs/study/需要知道' },
    //     ]
    //   }
    // ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
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
    }
  },
  lastUpdated: true, // 更新时间
  base: '/xxq-docs-site/'

})
