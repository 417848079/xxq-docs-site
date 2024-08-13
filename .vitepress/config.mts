import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "夏小柒的文档库",
  description: "docs",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/front/npm文档' },
      { text: '面试', link: '/docs/interview-question/前端面试题' }
    ],
    outlineTitle: "页面导航",
    sidebar: [
      { // 默认规则
        text: '前端',
        collapsed: false,
        items: [
          { text: 'npm文档', link: '/docs/front/npm文档' },
        ]
      },
      {
        text: '后端',
        collapsed: false,
        items: [
          { text: 'Java学习笔记', link: '/docs/back/Java学习笔记' },
        ]
      },
      {
        text: '面试',
        items: [
          { text: '前端面试题', link: '/docs/interview-question/前端面试题' },
          { text: 'JAVA面试题', link: '/docs/interview-question/JAVA面试题' },
        ]
      },
      { // 默认规则
        text: '学习笔记',
        items: [
          { text: 'Java学习笔记', link: '/docs/back/Java学习笔记' },
          { text: 'k8s-1.27.x', link: '/docs/k8s/k8s-1.27.x.md' }
        ]
      },
      {
        text: 'docker',
        items: [
          { text: 'docker安装redis', link: '/docs/docker/docker安装redis' },
          { text: 'k8s-1.27.x', link: '/docs/k8s/k8s-1.27.x.md' },
          { text: 'Docker问题记录', link: '/docs/docker/Docker问题记录' },
        ]
      },
      {
        text: "问题记录",
        items: [
          { text: '需要知道', link: '/docs/study/需要知道' },
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    }
  },
  base: '/'
})
