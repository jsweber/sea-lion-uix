# `react-reset`

Reset 是一个样式重置组件，用于清除 HTML 元素的默认样式，确保在不同浏览器中的一致外观。

## 安装

```sh
$ yarn add @sea-lion/react-reset
# 或者
$ npm install @sea-lion/react-reset
```

## 基本使用

```jsx
import { Reset } from "@sea-lion/react-reset";

export default () => {
  return (
    <Reset>
      <button>这是一个没有默认样式的按钮</button>
    </Reset>
  );
};
```

## HTML 元素重置

Reset 组件可以应用于各种 HTML 元素，清除其默认样式：

```jsx
{/* 重置输入框 */}
<Reset>
  <input type="text" placeholder="无默认样式的输入框" />
</Reset>

{/* 重置列表 */}
<Reset>
  <ul>
    <li>无默认样式的列表项 1</li>
    <li>无默认样式的列表项 2</li>
  </ul>
</Reset>

{/* 重置链接 */}
<Reset>
  <a href="#">无默认样式的链接</a>
</Reset>

{/* 重置单选按钮 */}
<Reset>
  <input type="radio" />
</Reset>

{/* 重置复选框 */}
<Reset>
  <input type="checkbox" />
</Reset>
```

## 组合使用

Reset 组件通常作为其他组件的基础，可以与其他样式组件结合使用：

```jsx
import { Reset } from "@sea-lion/react-reset";
import { Box } from "@sea-lion/react-box";

export default () => {
  return (
    <Reset>
      <Box padding="4" background="gray-3" borderRadius="3">
        <button>组合样式的按钮</button>
      </Box>
    </Reset>
  );
};
```

## 构建自定义表单

利用 Reset 组件可以构建完全自定义样式的表单，避免浏览器默认样式的干扰：

```jsx
<Reset>
  <form style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px' }}>
    <input
      type="text"
      placeholder="用户名"
      style={{ padding: '10px', border: '1px solid var(--gray-7)', borderRadius: '4px' }}
    />
    <input
      type="password"
      placeholder="密码"
      style={{ padding: '10px', border: '1px solid var(--gray-7)', borderRadius: '4px' }}
    />
    <button
      style={{
        padding: '10px',
        background: 'var(--blue-9)',
        color: 'white',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      登录
    </button>
  </form>
</Reset>
```

## 自定义按钮示例

```jsx
<Reset>
  <button
    style={{
      padding: '8px 16px',
      background: 'var(--blue-9)',
      color: 'white',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    确认
  </button>
</Reset>

<Reset>
  <button
    style={{
      padding: '8px 16px',
      background: 'transparent',
      color: 'var(--gray-11)',
      border: '1px solid var(--gray-7)',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    取消
  </button>
</Reset>
```

## 何时使用

- 需要从零开始构建自定义样式的 HTML 元素时
- 作为自定义 UI 组件的基础，确保跨浏览器样式一致性
- 需要覆盖浏览器的 User-Agent Stylesheet 时
- 构建高度定制化的表单元素（输入框、按钮、下拉选择等）
- 需要移除链接、列表等元素的默认装饰样式时

## 属性

| 参数     | 说明               | 类型            | 默认值 |
| -------- | ------------------ | --------------- | ------ |
| children | 需要重置样式的内容 | React.ReactNode | -      |
| asChild  | 是否作为子元素渲染 | boolean         | false  |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/reset) 获取完整 API 与设计规范。
