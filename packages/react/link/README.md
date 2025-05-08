# `react-link`

Link 是一个链接组件，用于在页面间跳转或打开外部资源，支持自定义样式和各种交互状态。

## 安装

```sh
$ yarn add @sea-lion/react-link
# 或者
$ npm install @sea-lion/react-link
```

## 基本使用

```jsx
import { Link } from "@sea-lion/react-link";

export default () => (
  <div>
    <Link href="https://example.com">点击访问示例网站</Link>
  </div>
);
```

## 不同尺寸

Link 组件提供了多种尺寸选择：

```jsx
<Link size="1" href="#">尺寸 1</Link>
<Link size="2" href="#">尺寸 2</Link>
<Link size="3" href="#">尺寸 3</Link>
<Link size="4" href="#">尺寸 4</Link>
<Link size="5" href="#">尺寸 5</Link>
<Link size="6" href="#">尺寸 6</Link>
<Link size="7" href="#">尺寸 7</Link>
<Link size="8" href="#">尺寸 8</Link>
<Link size="9" href="#">尺寸 9</Link>
```

## 下划线样式

Link 组件提供了多种下划线样式：

```jsx
<Link underline="auto" href="#">自动下划线（默认）</Link>
<Link underline="always" href="#">始终显示下划线</Link>
<Link underline="hover" href="#">悬停时显示下划线</Link>
<Link underline="none" href="#">无下划线</Link>
```

## 文本样式

Link 组件继承了 Text 组件的样式属性：

```jsx
<Link weight="bold" href="#">粗体链接</Link>
<Link truncate href="#">这是一个很长的文本，将会被截断...</Link>
<Link textWrap="nowrap" href="#">不换行文本</Link>
```

## 颜色变体

```jsx
<Link color="blue" href="#">蓝色链接</Link>
<Link color="green" href="#">绿色链接</Link>
<Link color="red" href="#">红色链接</Link>
<Link highContrast href="#">高对比度</Link>
```

## 自定义元素

使用 `asChild` 可以将链接样式应用到自定义元素上：

```jsx
<Link asChild>
  <CustomComponent>自定义组件链接</CustomComponent>
</Link>
```

## 与其他组件结合

```jsx
import { Flex } from "@sea-lion/react-flex";
import { Text } from "@sea-lion/react-text";

<Flex gap="2" align="center">
  <Text>查看我们的</Text>
  <Link href="/about">关于我们</Link>
  <Text>页面获取更多信息</Text>
</Flex>;
```

## 属性

### Link

| 参数         | 说明                           | 类型                                                        | 默认值    | 版本  |
| ------------ | ------------------------------ | ----------------------------------------------------------- | --------- | ----- |
| size         | 链接尺寸                       | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | -         | 0.2.0 |
| weight       | 字重                           | 'light' \| 'regular' \| 'medium' \| 'bold'                  | 'regular' | 0.2.0 |
| underline    | 下划线样式                     | 'auto' \| 'always' \| 'hover' \| 'none'                     | 'auto'    | 0.2.0 |
| color        | 颜色                           | 标准颜色                                                    | -         | 0.2.0 |
| highContrast | 高对比度模式                   | boolean                                                     | false     | 0.2.0 |
| truncate     | 文本截断                       | boolean                                                     | false     | 0.2.0 |
| textWrap     | 文本换行方式                   | 'wrap' \| 'nowrap' \| 'balance' \| 'pretty'                 | 'wrap'    | 0.2.0 |
| asChild      | 将组件的样式和行为应用于子元素 | boolean                                                     | false     | 0.2.0 |

Link 组件还支持所有标准的外边距属性（如 `m`、`mt`、`mb` 等）和 `a` 元素的所有属性（如 `href`、`target` 等）。

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
