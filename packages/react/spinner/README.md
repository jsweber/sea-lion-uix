# `react-spinner`

Spinner 是一个加载指示器组件，用于表示内容正在加载中。

## 安装

```sh
$ yarn add @sea-lion/react-spinner
# 或者
$ npm install @sea-lion/react-spinner
```

## 基本使用

```jsx
import { Spinner } from "@sea-lion/react-spinner";

export default () => (
  <div>
    <Spinner />
  </div>
);
```

## 不同尺寸

Spinner 组件提供三种尺寸：

```jsx
// 尺寸 1（最小）
<Spinner size="1" />

// 尺寸 2（默认）
<Spinner size="2" />

// 尺寸 3（最大）
<Spinner size="3" />
```

## 包裹内容

Spinner 可以包裹其他内容，在加载时显示加载动画，加载完成后显示内容：

```jsx
import { Spinner } from "@sea-lion/react-spinner";
import { useState, useEffect } from "react";

export default () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟数据加载
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Spinner loading={loading}>
      <div>加载完成后显示的内容</div>
    </Spinner>
  );
};
```

## 自定义样式

```jsx
// 添加外边距
<Spinner mt="4" mb="4" />

// 自定义颜色
<div style={{ color: "red" }}>
  <Spinner />
</div>
```

## 属性

| 参数    | 说明           | 类型              | 默认值 | 版本  |
| ------- | -------------- | ----------------- | ------ | ----- |
| size    | 尺寸           | '1' \| '2' \| '3' | '2'    | 0.2.0 |
| loading | 是否显示加载中 | boolean           | true   | 0.2.0 |

同时支持所有标准的外边距（margin）属性。

## 查看更多

查看[文档](https://www.radix-ui.com/themes/docs/theme/overview)获取更多信息。
