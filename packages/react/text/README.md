# `react-text`

Text 是一个文本组件，用于显示不同样式和尺寸的文本内容。组件支持多种尺寸、字重、对齐方式和颜色选项。

## 安装

```sh
$ yarn add @sea-lion/react-text
# 或者
$ npm install @sea-lion/react-text
```

## 基本使用

```jsx
import { Text } from "@sea-lion/react-text";

export default () => {
  return (
    <>
      <Text>这是默认文本样式</Text>
      <Text size="3" weight="medium">
        这是中等大小中等字重的文本
      </Text>
      <Text color="blue">这是蓝色文本</Text>
      <Text color="red" highContrast>
        这是高对比度红色文本
      </Text>
    </>
  );
};
```

## 不同尺寸

Text 组件支持九种尺寸：

```jsx
<Text size="1">文本尺寸 1 (最小)</Text>
<Text size="2">文本尺寸 2</Text>
<Text size="3">文本尺寸 3</Text>
<Text size="4">文本尺寸 4</Text>
<Text size="5">文本尺寸 5</Text>
<Text size="6">文本尺寸 6</Text>
<Text size="7">文本尺寸 7</Text>
<Text size="8">文本尺寸 8</Text>
<Text size="9">文本尺寸 9 (最大)</Text>
```

## 不同字重

Text 组件支持四种字重：

```jsx
<Text weight="light">轻量字重 (Light)</Text>
<Text weight="regular">常规字重 (Regular)</Text>
<Text weight="medium">中等字重 (Medium)</Text>
<Text weight="bold">粗体字重 (Bold)</Text>
```

## 文本对齐

可以控制文本的对齐方式：

```jsx
<Text textAlign="left">左对齐文本</Text>
<Text textAlign="center">居中对齐文本</Text>
<Text textAlign="right">右对齐文本</Text>
```

## 文本颜色

Text 组件支持多种颜色：

```jsx
<Text color="gray">灰色文本</Text>
<Text color="blue">蓝色文本</Text>
<Text color="green">绿色文本</Text>
<Text color="red">红色文本</Text>
<Text color="purple">紫色文本</Text>
<Text color="orange">橙色文本</Text>
<!-- 更多颜色选项 -->
```

## 高对比度文本

使用 `highContrast` 属性可以增加文本颜色与背景的对比度：

```jsx
<Text color="gray" highContrast>高对比度灰色</Text>
<Text color="blue" highContrast>高对比度蓝色</Text>
<Text color="green" highContrast>高对比度绿色</Text>
<Text color="red" highContrast>高对比度红色</Text>
```

## 文本截断

当文本内容过长时，可以使用 `truncate` 属性进行截断：

```jsx
<Text truncate>
  这是一段很长的文本，将被截断显示省略号，因为设置了 truncate 属性
</Text>
```

## 不同元素类型

Text 组件可以渲染为不同的 HTML 元素：

```jsx
<Text as="span">这是一个 span 元素 (默认)</Text>
<Text as="div">这是一个 div 元素</Text>
<Text as="label">这是一个 label 元素</Text>
<Text as="p">这是一个段落 (p) 元素</Text>
```

## 属性

| 参数         | 说明         | 类型                                                        | 默认值 | 版本  |
| ------------ | ------------ | ----------------------------------------------------------- | ------ | ----- |
| as           | 渲染元素类型 | 'span' \| 'div' \| 'label' \| 'p'                           | 'span' | 0.2.0 |
| size         | 文本尺寸     | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | -      | 0.2.0 |
| weight       | 字重         | 'light' \| 'regular' \| 'medium' \| 'bold'                  | -      | 0.2.0 |
| textAlign    | 文本对齐方式 | 'left' \| 'center' \| 'right'                               | -      | 0.2.0 |
| color        | 文本颜色     | string                                                      | -      | 0.2.0 |
| highContrast | 是否高对比度 | boolean                                                     | false  | 0.2.0 |
| truncate     | 是否截断文本 | boolean                                                     | false  | 0.2.0 |
| textWrap     | 文本换行方式 | 'wrap' \| 'nowrap' \| 'balance' \| 'pretty'                 | -      | 0.2.0 |

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
