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
    <span>加载中...</span>
  </div>
);
```

## 不同尺寸

Spinner 组件提供三种尺寸：

```jsx
{/* 尺寸 1（最小） */}
<Spinner size="1" />

{/* 尺寸 2（默认） */}
<Spinner size="2" />

{/* 尺寸 3（最大） */}
<Spinner size="3" />
```

## 自定义颜色

通过设置父元素的颜色来自定义 Spinner 颜色：

```jsx
<div style={{ color: 'var(--blue-9)' }}>
  <Spinner />
</div>

<div style={{ color: 'var(--red-9)' }}>
  <Spinner />
</div>

<div style={{ color: 'var(--green-9)' }}>
  <Spinner />
</div>

<div style={{ color: 'var(--purple-9)' }}>
  <Spinner />
</div>
```

## 包裹内容

Spinner 可以包裹其他内容，在加载时显示加载动画，加载完成后显示内容：

```jsx
import { Spinner } from "@sea-lion/react-spinner";
import { useState, useEffect } from "react";

export default () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

## 与按钮组合

Spinner 可以与按钮组合，用于表示提交或处理状态：

```jsx
import { Spinner } from "@sea-lion/react-spinner";
import { Button } from "@sea-lion/react-button";

{/* 加载状态的按钮 */}
<Button disabled>
  <Spinner size="1" />
  提交中
</Button>

{/* 正常状态 */}
<Button>提交</Button>
```

## 加载卡片

```jsx
<div style={{ border: '1px solid var(--gray-5)', borderRadius: '6px', padding: '16px', width: '300px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
    <Spinner size="1" />
    <span>正在加载数据...</span>
  </div>
</div>
```

## 自定义样式

```jsx
{/* 添加外边距 */}
<Spinner mt="4" mb="4" />

{/* 自定义颜色（通过父元素） */}
<div style={{ color: "var(--blue-9)" }}>
  <Spinner />
</div>
```

## 何时使用

- 页面或组件正在加载数据时
- 操作需要一段时间才能完成时（如表单提交、文件上传）
- 需要告知用户等待过程，避免误操作时
- 与按钮配合使用，表示操作正在进行中

## 属性

| 参数    | 说明           | 类型              | 默认值 |
| ------- | -------------- | ----------------- | ------ |
| size    | 尺寸           | '1' \| '2' \| '3' | '2'    |
| loading | 是否显示加载中 | boolean           | true   |

同时支持所有标准的外边距（margin）属性，如 `m`、`mt`、`mb` 等。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/spinner) 获取完整 API 与设计规范。
