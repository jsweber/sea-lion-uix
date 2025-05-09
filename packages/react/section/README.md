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
// 小尺寸 (24px 内边距)
<Section size="1">{/* 内容 */}</Section>

// 中等尺寸 (40px 内边距)
<Section size="2">{/* 内容 */}</Section>

// 大尺寸 (64px 内边距，默认)
<Section size="3">{/* 内容 */}</Section>

// 超大尺寸 (80px 内边距)
<Section size="4">{/* 内容 */}</Section>
```

## 显示控制

使用 `display` 属性控制区域的显示状态：

```jsx
// 隐藏区域
<Section display="none">{/* 内容 */}</Section>

// 显示区域（默认）
<Section display="initial">{/* 内容 */}</Section>
```

## 响应式设计

Section 组件支持响应式属性，可以根据屏幕尺寸调整内边距和显示状态：

```jsx
// 在小屏幕上使用较小的内边距，在大屏幕上使用较大的内边距
<Section size={{ sm: '2', lg: '4' }}>{/* 内容 */}</Section>

// 在小屏幕上隐藏，在大屏幕上显示
<Section display={{ sm: 'none', lg: 'initial' }}>{/* 内容 */}</Section>
```

## 属性

| 参数    | 说明                 | 类型                     | 默认值 | 版本  |
| ------- | -------------------- | ------------------------ | ------ | ----- |
| size    | 区域的垂直内边距大小 | '1' \| '2' \| '3' \| '4' | '3'    | 0.2.0 |
| display | 区域的显示状态       | 'none' \| 'initial'      | -      | 0.2.0 |
| asChild | 是否作为子元素渲染   | boolean                  | false  | 0.2.0 |

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
