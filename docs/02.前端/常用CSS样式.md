# 常用CSS样式

## 1. 鼠标变形状

```css
cursor: pointer;  /**pointer - 小手 */
```

## 2.超出3行显示省略号

```css
overflow: hidden;  /**隐藏 */
text-overflow: ellipsis;  /**显示省略号 */
display: -webkit-box;  /**多行文本溢出显示省略号 */
-webkit-line-clamp: 3;  /**显示几行 */
-webkit-box-orient: vertical;  /**垂直方向 */
```

## 不定高度实现过度动画

```css
div{
  height: 0;
  transition: 1s
}
.wrap:hover div{
  height: calc-size(auto)
}
```
