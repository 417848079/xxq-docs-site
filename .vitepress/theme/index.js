import DefaultTheme from 'vitepress/theme'
import './styles/sidebar.css' // 引入侧边栏美化样式
import './styles/custom.css' // 引入自定义样式
import './styles/var.css' // 引入自定义变量样式

export default {
  ...DefaultTheme,
  // 可以在这里添加其他自定义组件或配置
}