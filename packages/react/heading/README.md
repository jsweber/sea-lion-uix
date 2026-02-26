# `react-heading`

Heading 是一个用于显示标题的组件，提供多种级别、尺寸和样式选项，以满足不同层级的标题需求。

## 安装

```sh
pnpm add @sea-lion/react-heading
# 或者
npm install @sea-lion/react-heading
yarn add @sea-lion/react-heading
```

## 使用

在代码中引入组件：

```tsx
import { Heading } from '@sea-lion/react-heading';
```

## 基本使用

```jsx
import { Heading } from "@sea-lion/react-heading";

export default () => (
  <>
    <Heading as="h1" size="9">
      一级标题
    </Heading>
    <Heading as="h2" size="7">
      二级标题
    </Heading>
    <Heading as="h3" size="5">
      三级标题
    </Heading>
    <Heading as="h4" size="3">
      四级标题
    </Heading>
    <Heading as="h5" size="2">
      五级标题
    </Heading>
    <Heading as="h6" size="1">
      六级标题
    </Heading>
  </>
);
```

## 标题样式

Heading 组件支持多种样式选项：

```jsx
// 不同的颜色
<Heading color="blue">蓝色标题</Heading>
<Heading color="amber">琥珀色标题</Heading>

// 不同的字重
<Heading weight="regular">常规粗细</Heading>
<Heading weight="medium">中等粗细</Heading>
<Heading weight="bold">粗体</Heading>

// 文本对齐
<Heading align="left">左对齐</Heading>
<Heading align="center">居中对齐</Heading>
<Heading align="right">右对齐</Heading>

// 截断文本（添加省略号）
<Heading truncate>这是一个非常长的标题，在空间不足时会被截断并显示省略号...</Heading>

// 响应式尺寸
<Heading size={{ initial: '3', sm: '5', lg: '7' }}>
  在不同屏幕尺寸下有不同大小的标题
</Heading>
```

## 属性

### Heading

| 参数         | 说明                     | 类型                                         | 默认值 | 版本  |
| ------------ | ------------------------ | -------------------------------------------- | ------ | ----- |
| as           | 要渲染的 HTML 元素       | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' | 'h1'   | 0.2.0 |
| asChild      | 是否将组件作为子元素传递 | boolean                                      | false  | 0.2.0 |
| size         | 标题文本尺寸             | '1' - '9'                                    | '6'    | 0.2.0 |
| weight       | 文本粗细                 | 'light' \| 'regular' \| 'medium' \| 'bold'   | 'bold' | 0.2.0 |
| align        | 文本对齐方式             | 'left' \| 'center' \| 'right'                | -      | 0.2.0 |
| color        | 文本颜色                 | 'gray' \| 'blue' \| 'green' \| ... (主题色)  | -      | 0.2.0 |
| highContrast | 是否使用高对比度颜色     | boolean                                      | false  | 0.2.0 |
| truncate     | 是否截断文本并显示省略号 | boolean                                      | false  | 0.2.0 |
| textWrap     | 文本换行行为             | 'wrap' \| 'nowrap' \| 'balance' \| 'pretty'  | -      | 0.2.0 |

Heading 组件还支持所有标准的 margin 属性，如 `m`、`mt`、`mb` 等。

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
