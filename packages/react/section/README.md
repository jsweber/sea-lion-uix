# `react-section`

Section 是一个布局组件，用于创建具有预设垂直内边距的区域，帮助组织页面内容的层次结构。

## 安装

```sh
$ yarn add @sea-lion/react-section
# 或者
$ npm install @sea-lion/react-section
```

## 基本使用

```jsx
import { Section } from "@sea-lion/react-section";

export default () => {
  return (
    <Section>
      <h2>区域标题</h2>
      <p>这是一个具有预设垂直内边距的区域，用于组织内容。</p>
    </Section>
  );
};
```

## 尺寸

Section 组件支持四种尺寸，控制垂直内边距的大小：

```jsx
{/* 小尺寸 (24px 内边距) */}
<Section size="1">{/* 内容 */}</Section>

{/* 中等尺寸 (40px 内边距) */}
<Section size="2">{/* 内容 */}</Section>

{/* 大尺寸 (64px 内边距，默认) */}
<Section size="3">{/* 内容 */}</Section>

{/* 超大尺寸 (80px 内边距) */}
<Section size="4">{/* 内容 */}</Section>
```

## 显示控制

使用 `display` 属性控制区域的显示状态：

```jsx
{/* 隐藏区域 */}
<Section display="none">{/* 内容 */}</Section>

{/* 显示区域（默认） */}
<Section display="initial">{/* 内容 */}</Section>
```

## 响应式设计

Section 组件支持响应式属性，可以根据屏幕尺寸调整内边距和显示状态：

```jsx
{/* 在小屏幕上使用较小的内边距，在大屏幕上使用较大的内边距 */}
<Section size={{ initial: '1', sm: '2', md: '3' }}>{/* 内容 */}</Section>

{/* 在小屏幕上隐藏，在大屏幕上显示 */}
<Section display={{ initial: 'none', md: 'initial' }}>{/* 内容 */}</Section>
```

## 实用场景

### 页面布局

使用不同尺寸的 Section 来构建具有层次感的页面结构：

```jsx
{/* 头部区域 */}
<Section size="2">
  <h1>网站标题</h1>
</Section>

{/* 主要内容区 */}
<Section size="3">
  <h2>欢迎使用</h2>
  <p>这是主要内容区域。</p>
</Section>

{/* 特性展示区（带背景色） */}
<Section size="3" style={{ backgroundColor: 'var(--gray-2)' }}>
  <h2>产品特性</h2>
  <div style={{ display: 'flex', gap: '24px' }}>
    <div>特性一</div>
    <div>特性二</div>
    <div>特性三</div>
  </div>
</Section>
```

### 卡片内容容器

Section 可以作为卡片内容的容器，提供统一的内边距：

```jsx
<div style={{ width: '300px', border: '1px solid var(--gray-5)', borderRadius: '8px', overflow: 'hidden' }}>
  <div style={{ height: '150px', backgroundColor: 'var(--blue-5)' }} />
  <Section size="1">
    <h3>产品标题</h3>
    <p>这是产品的简要描述。</p>
    <a href="#">了解更多</a>
  </Section>
</div>
```

## 何时使用

- 需要在页面上划分不同的内容区域时
- 需要为内容区域添加统一的垂直内边距时
- 构建具有层次感的落地页、文档页面等布局时
- 需要在不同屏幕尺寸下控制区域显示或内边距大小时

## 属性

| 参数    | 说明                 | 类型                     | 默认值 |
| ------- | -------------------- | ------------------------ | ------ |
| size    | 区域的垂直内边距大小 | '1' \| '2' \| '3' \| '4' | '3'    |
| display | 区域的显示状态       | 'none' \| 'initial'      | -      |
| asChild | 是否作为子元素渲染   | boolean                  | false  |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/section) 获取完整 API 与设计规范。
