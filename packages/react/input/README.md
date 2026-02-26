# `react-input`

Input 是一个用于收集用户输入的文本字段组件，提供多种样式和变体选项。

## 安装

```sh
pnpm add @sea-lion/react-input
# 或者
npm install @sea-lion/react-input
yarn add @sea-lion/react-input
```

## 使用

在代码中引入组件：

```tsx
import { Input } from '@sea-lion/react-input';
```

## 基本使用

```jsx
import { Input } from "@sea-lion/react-input";

export default () => (
  <>
    <Input.Root placeholder="请输入内容..." />

    {/* 带图标的输入框 */}
    <Input.Root>
      <Input.Slot side="left">
        <SearchIcon />
      </Input.Slot>
      <Input.Slot side="right">
        <ClearIcon />
      </Input.Slot>
    </Input.Root>

    {/* 不同类型的输入框 */}
    <Input.Root type="password" placeholder="请输入密码" />
    <Input.Root type="number" placeholder="请输入数字" />
    <Input.Root type="email" placeholder="请输入邮箱" />
  </>
);
```

## 不同变体

Input 组件支持多种变体样式：

```jsx
// 默认变体 (surface)
<Input.Root variant="surface" placeholder="Surface 变体" />

// 经典变体
<Input.Root variant="classic" placeholder="Classic 变体" />

// 柔和变体
<Input.Root variant="soft" placeholder="Soft 变体" />
```

## 不同尺寸

Input 组件提供不同的尺寸选项：

```jsx
// 小尺寸
<Input.Root size="1" placeholder="小尺寸" />

// 中等尺寸（默认）
<Input.Root size="2" placeholder="中等尺寸" />

// 大尺寸
<Input.Root size="3" placeholder="大尺寸" />
```

## 自定义颜色和圆角

```jsx
// 自定义颜色
<Input.Root color="blue" placeholder="蓝色输入框" />
<Input.Root color="green" placeholder="绿色输入框" />

// 自定义圆角
<Input.Root radius="full" placeholder="完全圆角" />
<Input.Root radius="none" placeholder="无圆角" />
```

## 带图标或辅助元素

```jsx
// 带前置图标
<Input.Root>
  <Input.Slot side="left">
    <UserIcon />
  </Input.Slot>
  <Input.Slot side="right">
    <InfoIcon />
  </Input.Slot>
</Input.Root>

// 带单位指示器
<Input.Root>
  <Input.Slot side="right">￥</Input.Slot>
</Input.Root>

// 带验证按钮
<Input.Root>
  <Input.Slot side="right">
    <Button>验证</Button>
  </Input.Slot>
</Input.Root>
```

## 属性

### Input.Root

| 参数         | 说明           | 类型                                                       | 默认值    | 版本  |
| ------------ | -------------- | ---------------------------------------------------------- | --------- | ----- |
| size         | 输入框尺寸     | '1' \| '2' \| '3'                                          | '2'       | 0.2.0 |
| variant      | 输入框变体样式 | 'classic' \| 'surface' \| 'soft'                           | 'surface' | 0.2.0 |
| color        | 输入框主题色   | 'gray' \| 'blue' \| 'green' \| ... (主题色)                | -         | 0.2.0 |
| radius       | 圆角大小       | 'none' \| '1' - '6' \| 'full'                              | -         | 0.2.0 |
| type         | 输入框类型     | 'text' \| 'password' \| 'email' \| ... (HTML5 input types) | 'text'    | 0.2.0 |
| value        | 输入框的值     | string \| number                                           | -         | 0.2.0 |
| defaultValue | 输入框的默认值 | string \| number                                           | -         | 0.2.0 |

Input.Root 组件还支持所有标准的 margin 属性（如 `m`、`mt`、`mb` 等）和 HTML input 元素的标准属性（如 `onChange`、`onFocus` 等）。

### Input.Slot

| 参数  | 说明         | 类型              | 默认值 | 版本  |
| ----- | ------------ | ----------------- | ------ | ----- |
| side  | 插槽位置     | 'left' \| 'right' | -      | 0.2.0 |
| color | 插槽内容颜色 | (主题色)          | -      | 0.2.0 |
| gap   | 插槽内部间距 | '1' - '9'         | -      | 0.2.0 |
| px    | 水平内边距   | '1' - '9'         | -      | 0.2.0 |
| pl    | 左内边距     | '1' - '9'         | -      | 0.2.0 |
| pr    | 右内边距     | '1' - '9'         | -      | 0.2.0 |

## 查看更多

查看[文档](https://www.radix-ui.com/themes/docs/theme/overview)获取更多信息。
