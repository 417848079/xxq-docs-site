# 不常用CSS样式

## grid-template-rows: masonry

`grid-template-rows: masonry`可以让网格按照内容自动排列，类似于瀑布流。支持的浏览器少

```css
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: masonry;
}
```

## break-inside: avoid

`break-inside: avoid`可以让元素内部不允许换行，适用于一些需要固定宽度的元素。

## aspect-ratio

`aspect-ratio` 可以设置元素的长宽比，可以用于一些需要固定比例的元素。

## backface-visibility

 是一个CSS属性，它决定了当一个元素的背面朝向观察者时，这个背面是否是可见的。这个属性主要用于3D转换场景，当元素在3D空间中旋转而可能展示其背面时，可以通过这个属性来控制背面是否显示。
