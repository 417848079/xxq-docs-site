// import path from 'node:path';
// import fs from 'node:fs';
// // 文件根目录
// const DIR_PATH = path.resolve();
// // 白名单，过滤不是文章的文件和文件夹
// const WHITE_LIST = ['index.md','node_modules',]

// // 判断是否是文件夹
// const isDirectory = (path) => fs.lstatSync(path).isDirectory()

// // 取差值
const fs = require('fs');
const path = require('path');
function generateSidebar(dirPath) {
  console.log(dirPath, 'dirPath');

  const sidebar = [];
  const files = fs.readdirSync(dirPath, { withFileTypes: true });

  files.forEach(file => {
    if (file.isDirectory()) {
      // 递归处理子目录
      const subSidebar = generateSidebar(path.join(dirPath, file.name));
      if (subSidebar.length > 0) {
        sidebar.push({
          text: file.name,
          items: subSidebar,
          collapsed:false
        });
      }
    } else if (file.name.endsWith('.md')) {
      // 添加 Markdown 文件到侧边栏
      sidebar.push({
        text: path.basename(file.name, '.md'),
        link: `/${path.relative(process.cwd(), path.join(dirPath, file.name))}`,
      });
    }
  });

  return sidebar;
}
// 都放在 `docs` 目录下
const sidebarData = generateSidebar(path.join(__dirname, '../docs'));
fs.writeFileSync(path.join(__dirname, 'sidebar.js'), 'export default' + JSON.stringify(sidebarData));
