# `react-separator`

Separator 是一个分隔线组件，用于在视觉上分隔不同的内容区域。

## 安装

```sh
$ yarn add @sea-lion/react-separator
# 或者
$ npm install @sea-lion/react-separator
```

## 基本使用

```jsx
import { Separator } from "@sea-lion/react-separator";

export default () => (
  <div>
    <h2>第一部分</h2>
    <p>这是一些内容。</p>

    <Separator my="4" />

    <h2>第二部分</h2>
    <p>这是另一些内容。</p>
  </div>
);
```

## 方向

Separator 组件支持水平和垂直两种方向：

```jsx
// 水平分隔线（默认）
<Separator orientation="horizontal" />

// 垂直分隔线
<Separator orientation="vertical" />
```

## 尺寸

Separator 组件提供了四种尺寸：

```jsx
// 尺寸 1（最小）
<Separator size="1" />

// 尺寸 2（默认）
<Separator size="2" />

// 尺寸 3（中大）
<Separator size="3" />

// 尺寸 4（占满容器）
<Separator size="4" />
```

## 颜色

Separator 组件支持自定义颜色：

```jsx
// 灰色（默认）
<Separator color="gray" />

// 蓝色
<Separator color="blue" />

// 红色
<Separator color="red" />
```

## 垂直分隔线示例

要使用垂直分隔线，需要设置容器的高度：

```jsx
<div style={{ display: "flex", height: "40px", alignItems: "center" }}>
  <span>左侧内容</span>
  <Separator orientation="vertical" mx="2" />
  <span>右侧内容</span>
</div>
```

## 装饰性

默认情况下，Separator 组件被视为装饰性元素。如果分隔线在语义上分隔内容，可以将其设置为非装饰性：

```jsx
<Separator decorative={false} />
```

## 属性

| 参数        | 说明         | 类型                       | 默认值       | 版本  |
| ----------- | ------------ | -------------------------- | ------------ | ----- |
| orientation | 分隔线方向   | 'horizontal' \| 'vertical' | 'horizontal' | 0.2.0 |
| size        | 分隔线尺寸   | '1' \| '2' \| '3' \| '4'   | '1'          | 0.2.0 |
| color       | 颜色         | 标准颜色                   | 'gray'       | 0.2.0 |
| decorative  | 是否为装饰性 | boolean                    | true         | 0.2.0 |

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
