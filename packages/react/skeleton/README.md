# `react-skeleton`

Skeleton 是一个加载占位符组件，用于在数据加载时显示内容的轮廓，提升用户体验。

## 安装

```sh
$ yarn add @sea-lion/react-skeleton
# 或者
$ npm install @sea-lion/react-skeleton
```

## 基本使用

```jsx
import { Skeleton } from "@sea-lion/react-skeleton";

export default () => (
  <div>
    <Skeleton width="200px" height="20px" />
    <Skeleton width="100%" height="20px" my="2" />
    <Skeleton width="80%" height="20px" />
  </div>
);
```

## 包裹现有内容

Skeleton 可以包裹现有内容，在加载时显示占位符，加载完成后显示内容：

```jsx
import { Skeleton } from "@sea-lion/react-skeleton";
import { useState, useEffect } from "react";

export default () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟数据加载
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Skeleton loading={loading}>
        <h2>数据已加载完成</h2>
        <p>这是加载完成后显示的内容。</p>
      </Skeleton>
    </div>
  );
};
```

## 自定义宽度和高度

```jsx
// 固定宽度
<Skeleton width="200px" height="24px" />

// 响应式宽度
<Skeleton width={{ initial: "100%", sm: "80%", lg: "50%" }} height="24px" />

// 使用预设尺寸
<Skeleton width="full" height="5" />
```

## 文本占位符

当作为空元素使用时，Skeleton 默认为块级元素，高度为 `--space-3`：

```jsx
// 空的骨架加载器用作文本占位符
<Skeleton />
<Skeleton width="80%" my="2" />
<Skeleton width="60%" />
```

## 列表占位符

```jsx
<div>
  {Array(5)
    .fill(null)
    .map((_, index) => (
      <div
        key={index}
        style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
      >
        <Skeleton width="40px" height="40px" style={{ borderRadius: "50%" }} />
        <div style={{ marginLeft: "12px", flex: 1 }}>
          <Skeleton height="14px" mb="2" />
          <Skeleton width="60%" height="14px" />
        </div>
      </div>
    ))}
</div>
```

## 卡片占位符

```jsx
<div
  style={{
    width: "300px",
    padding: "16px",
    border: "1px solid #eee",
    borderRadius: "8px",
  }}
>
  <Skeleton width="100%" height="180px" mb="3" />
  <Skeleton width="70%" height="24px" mb="2" />
  <Skeleton width="100%" height="16px" mb="1" />
  <Skeleton width="100%" height="16px" mb="1" />
  <Skeleton width="40%" height="16px" />
</div>
```

## 属性

| 参数      | 说明                   | 类型                       | 默认值 | 版本  |
| --------- | ---------------------- | -------------------------- | ------ | ----- |
| loading   | 是否显示加载占位符     | boolean                    | true   | 0.2.0 |
| width     | 宽度（支持响应式）     | CSSProperties['width']     | -      | 0.2.0 |
| minWidth  | 最小宽度（支持响应式） | CSSProperties['minWidth']  | -      | 0.2.0 |
| maxWidth  | 最大宽度（支持响应式） | CSSProperties['maxWidth']  | -      | 0.2.0 |
| height    | 高度（支持响应式）     | CSSProperties['height']    | -      | 0.2.0 |
| minHeight | 最小高度（支持响应式） | CSSProperties['minHeight'] | -      | 0.2.0 |
| maxHeight | 最大高度（支持响应式） | CSSProperties['maxHeight'] | -      | 0.2.0 |
| children  | 加载完成后显示的内容   | React.ReactNode            | -      | 0.2.0 |

同时支持所有标准的外边距（margin）属性。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/skeleton) 获取完整 API 与设计规范。
