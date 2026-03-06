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

## 标题尺寸

Heading 提供从 1 到 9 的尺寸范围：

```jsx
<Heading size="9">尺寸 9（最大）</Heading>
<Heading size="8">尺寸 8</Heading>
<Heading size="7">尺寸 7</Heading>
<Heading size="6">尺寸 6（默认）</Heading>
<Heading size="5">尺寸 5</Heading>
<Heading size="4">尺寸 4</Heading>
<Heading size="3">尺寸 3</Heading>
<Heading size="2">尺寸 2</Heading>
<Heading size="1">尺寸 1（最小）</Heading>
```

## 文本粗细

```jsx
<Heading weight="light">Light 粗细</Heading>
<Heading weight="regular">Regular 粗细</Heading>
<Heading weight="medium">Medium 粗细</Heading>
<Heading weight="bold">Bold 粗细（默认）</Heading>
```

## 颜色

```jsx
<Heading color="blue">蓝色标题</Heading>
<Heading color="green">绿色标题</Heading>
<Heading color="red">红色标题</Heading>
<Heading color="amber">琥珀色标题</Heading>
<Heading color="gray">灰色标题</Heading>
```

## 高对比度

```jsx
<Heading color="blue">普通对比度</Heading>
<Heading color="blue" highContrast>高对比度</Heading>
```

## 文本对齐

```jsx
<Heading align="left">左对齐文本</Heading>
<Heading align="center">居中对齐文本</Heading>
<Heading align="right">右对齐文本</Heading>
```

## 文本截断与换行

```jsx
{/* 截断文本，添加省略号 */}
<div style={{ width: '300px' }}>
  <Heading truncate>这是一个非常长的标题，在空间不足时会被截断并显示省略号...</Heading>
</div>

{/* 文本换行控制 */}
<Heading textWrap="balance">使用 balance 换行的标题文本</Heading>
<Heading textWrap="pretty">使用 pretty 换行的标题文本</Heading>
```

## 响应式尺寸

```jsx
<Heading size={{ initial: '3', sm: '5', md: '7', lg: '9' }}>
  响应式标题大小
</Heading>

<Heading align={{ initial: 'left', md: 'center', lg: 'right' }}>
  响应式对齐方式
</Heading>
```

## 实用场景

### 博客文章布局

```jsx
<article>
  <Heading size="8" mb="3">探索现代前端架构的演进</Heading>
  <Heading as="h2" size="5" mt="5" mb="3">前端架构的历史</Heading>
  <p>前端开发领域在过去的十年中经历了剧烈的变革...</p>
  <Heading as="h3" size="3" mt="4" mb="2">单页应用的兴起</Heading>
  <p>随着Ajax的普及和JavaScript框架的发展...</p>
</article>
```

### 产品落地页

```jsx
<div style={{ textAlign: 'center', padding: '48px', background: 'var(--blue-1)' }}>
  <Heading color="blue" size="9" align="center" mb="3">
    未来就在眼前
  </Heading>
  <Heading color="gray" weight="regular" size="4" align="center">
    我们创新的产品让复杂的任务变得简单，帮助您提高工作效率
  </Heading>
</div>
```

## 属性

### Heading

| 参数         | 说明                     | 类型                                         | 默认值 |
| ------------ | ------------------------ | -------------------------------------------- | ------ |
| as           | 要渲染的 HTML 元素       | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' | 'h1'   |
| asChild      | 是否将组件作为子元素传递 | boolean                                      | false  |
| size         | 标题文本尺寸             | '1' - '9'                                    | '6'    |
| weight       | 文本粗细                 | 'light' \| 'regular' \| 'medium' \| 'bold'   | 'bold' |
| align        | 文本对齐方式             | 'left' \| 'center' \| 'right'                | -      |
| color        | 文本颜色                 | 'gray' \| 'blue' \| 'green' \| ... (主题色)  | -      |
| highContrast | 是否使用高对比度颜色     | boolean                                      | false  |
| truncate     | 是否截断文本并显示省略号 | boolean                                      | false  |
| textWrap     | 文本换行行为             | 'wrap' \| 'nowrap' \| 'balance' \| 'pretty'  | -      |

Heading 组件还支持所有标准的 margin 属性，如 `m`、`mt`、`mb` 等。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/heading) 获取完整 API 与设计规范。
