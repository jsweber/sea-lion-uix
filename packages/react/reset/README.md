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

## 用途

Reset 组件可以应用于任何 HTML 元素，用于清除其默认样式：

```jsx
<Reset>
  <input type="text" placeholder="无默认样式的输入框" />
</Reset>

<Reset>
  <ul>
    <li>无默认样式的列表项 1</li>
    <li>无默认样式的列表项 2</li>
  </ul>
</Reset>

<Reset>
  <a href="#">无默认样式的链接</a>
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

## 属性

| 参数     | 说明               | 类型            | 默认值 | 版本  |
| -------- | ------------------ | --------------- | ------ | ----- |
| children | 需要重置样式的内容 | React.ReactNode | -      | 0.2.0 |
| asChild  | 是否作为子元素渲染 | boolean         | false  | 0.2.0 |

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
