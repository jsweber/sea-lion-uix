# `react-inset`

Inset 是一个容器组件，用于创建负边距效果，可以将内容向外延伸超出父元素的边界。

## 安装

```sh
$ yarn add @sea-lion/react-inset
# 或者
$ npm install @sea-lion/react-inset
```

## 基本使用

```jsx
import { Inset } from "@sea-lion/react-inset";

export default () => (
  <div style={{ padding: "20px", border: "1px solid", borderRadius: "8px" }}>
    <Inset>
      <img
        src="/example-image.jpg"
        style={{ display: "block", width: "100%" }}
      />
    </Inset>
    <div style={{ padding: "20px" }}>
      <h3>带有 Inset 的卡片</h3>
      <p>Inset 组件使图片可以扩展到容器边缘，无需额外边距</p>
    </div>
  </div>
);
```

## 不同边的 Inset

Inset 组件可以应用于容器的不同边：

```jsx
// 应用于顶部
<Inset side="top">
  <img src="/banner.jpg" />
</Inset>

// 应用于底部
<Inset side="bottom">
  <div className="footer-content" />
</Inset>

// 应用于左侧
<Inset side="left">
  <div className="sidebar" />
</Inset>

// 应用于右侧
<Inset side="right">
  <div className="right-panel" />
</Inset>

// 应用于水平方向
<Inset side="x">
  <div className="horizontal-content" />
</Inset>

// 应用于垂直方向
<Inset side="y">
  <div className="vertical-content" />
</Inset>
```

## 裁剪方式

Inset 支持不同的裁剪方式：

```jsx
// 边框盒裁剪（默认）
<Inset clip="border-box">
  <img src="/image.jpg" />
</Inset>

// 内边距盒裁剪
<Inset clip="padding-box">
  <img src="/image.jpg" />
</Inset>
```

## 内边距控制

```jsx
// 保持当前内边距
<Inset p="current">
  <div className="content" />
</Inset>

// 移除内边距
<Inset p="0">
  <div className="content" />
</Inset>

// 控制特定方向的内边距
<Inset px="0" py="current">
  <div className="content" />
</Inset>
```

## 属性

### Inset

| 参数 | 说明            | 类型                                                          | 默认值       | 版本  |
| ---- | --------------- | ------------------------------------------------------------- | ------------ | ----- |
| side | 应用 Inset 的边 | 'all' \| 'x' \| 'y' \| 'top' \| 'bottom' \| 'left' \| 'right' | 'all'        | 0.2.0 |
| clip | 裁剪盒模型      | 'border-box' \| 'padding-box'                                 | 'border-box' | 0.2.0 |
| p    | 所有方向内边距  | 'current' \| '0'                                              | -            | 0.2.0 |
| px   | 水平方向内边距  | 'current' \| '0'                                              | -            | 0.2.0 |
| py   | 垂直方向内边距  | 'current' \| '0'                                              | -            | 0.2.0 |
| pt   | 顶部内边距      | 'current' \| '0'                                              | -            | 0.2.0 |
| pr   | 右侧内边距      | 'current' \| '0'                                              | -            | 0.2.0 |
| pb   | 底部内边距      | 'current' \| '0'                                              | -            | 0.2.0 |
| pl   | 左侧内边距      | 'current' \| '0'                                              | -            | 0.2.0 |

Inset 组件还支持所有标准的外边距属性（如 `m`、`mt`、`mb` 等）。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/inset) 获取完整 API 与设计规范。
