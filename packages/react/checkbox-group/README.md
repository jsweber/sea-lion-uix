# `react-checkbox-group`

CheckboxGroup 是一组复选框组件，用于从一组数据中选择多个值。与单独使用的 Checkbox 相比，提供统一的值管理和布局控制，更适合成组使用。

## 安装

```sh
pnpm add @sea-lion/react-checkbox-group
# 或者
npm install @sea-lion/react-checkbox-group
yarn add @sea-lion/react-checkbox-group
```

## 使用

在代码中引入组件：

```tsx
import * as CheckboxGroup from '@sea-lion/react-checkbox-group';
```

### 基本用法

```jsx
<CheckboxGroup.Root value={selected} onValueChange={setSelected}>
  <CheckboxGroup.Item value="1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="2">选项 2</CheckboxGroup.Item>
  <CheckboxGroup.Item value="3">选项 3</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 非受控用法（默认值）

使用 `defaultValue` 设置初始选中项，状态由组件内部管理：

```jsx
<CheckboxGroup.Root defaultValue={['apple', 'banana']}>
  <CheckboxGroup.Item value="apple">苹果</CheckboxGroup.Item>
  <CheckboxGroup.Item value="banana">香蕉</CheckboxGroup.Item>
  <CheckboxGroup.Item value="orange">橙子</CheckboxGroup.Item>
  <CheckboxGroup.Item value="pear">梨</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 受控用法

通过 `value` 和 `onValueChange` 完全控制选中状态：

```jsx
const [value, setValue] = useState(['option2']);

<CheckboxGroup.Root value={value} onValueChange={setValue}>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
</CheckboxGroup.Root>

<p>当前选中值: {value.join(', ') || '无'}</p>
```

### 尺寸

支持三种尺寸：`"1"`（小）、`"2"`（中，默认）、`"3"`（大）：

```jsx
<CheckboxGroup.Root size="1" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root size="2" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root size="3" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 变体

支持三种视觉变体：`"classic"`（默认）、`"surface"`、`"soft"`：

```jsx
<CheckboxGroup.Root variant="classic" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Classic 风格</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root variant="surface" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Surface 风格</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root variant="soft" defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">Soft 风格</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 颜色

通过 `color` 属性设置主题色，支持设计系统中的全部颜色令牌：

```jsx
<CheckboxGroup.Root color="blue" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">蓝色（默认）</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root color="crimson" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">猩红色</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root color="grass" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">草绿色</CheckboxGroup.Item>
</CheckboxGroup.Root>

<CheckboxGroup.Root color="amber" defaultValue={['opt1']}>
  <CheckboxGroup.Item value="opt1">琥珀色</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 高对比度

使用 `highContrast` 属性增强可见性，适合对可访问性有更高要求的场景：

```jsx
<CheckboxGroup.Root color="blue" highContrast defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">高对比度选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">高对比度选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 排列方向

通过 `orientation` 控制选项的排列方向：

```jsx
{/* 垂直排列（默认） */}
<CheckboxGroup.Root defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

{/* 水平排列 */}
<CheckboxGroup.Root
  orientation="horizontal"
  defaultValue={['option1']}
  style={{ flexDirection: 'row', alignItems: 'center' }}
>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 禁用状态

支持整组禁用或单个选项禁用：

```jsx
{/* 整组禁用 */}
<CheckboxGroup.Root disabled defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
</CheckboxGroup.Root>

{/* 个别选项禁用 */}
<CheckboxGroup.Root defaultValue={['option1']}>
  <CheckboxGroup.Item value="option1">选项 1</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option2" disabled>选项 2（禁用）</CheckboxGroup.Item>
  <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
</CheckboxGroup.Root>
```

### 表单用法（必选字段）

配合表单使用时，可设置 `name`（字段名）和 `required`（是否必选）：

```jsx
<form>
  <CheckboxGroup.Root required name="required-options" defaultValue={['option1']}>
    <CheckboxGroup.Item value="option1">选项 1（必选）</CheckboxGroup.Item>
    <CheckboxGroup.Item value="option2">选项 2</CheckboxGroup.Item>
    <CheckboxGroup.Item value="option3">选项 3</CheckboxGroup.Item>
  </CheckboxGroup.Root>
</form>
```

## 何时使用

- 当用户需要从一组数据中选择多个选项时
- 当用户需要在开/关状态之间切换多个选项时
- 需要与表单一起使用，收集多个选项值的情况
- 适用于配置项的选择、多条件筛选、数据列表的批量操作等场景

## Props / API 属性

### CheckboxGroup.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 复选框尺寸 | `"1" \| "2" \| "3"` | `"2"` |
| `variant` | 视觉变体 | `"classic" \| "soft" \| "surface"` | `"classic"` |
| `color` | 主题颜色 | `"gray" \| "blue" \| "crimson" \| "green" \| ...` | — |
| `highContrast` | 使用高对比度颜色 | `boolean` | `false` |
| `disabled` | 禁用整个复选框组 | `boolean` | `false` |
| `orientation` | 排列方向 | `"horizontal" \| "vertical"` | `"vertical"` |
| `value` | 受控选中值（数组） | `string[]` | — |
| `defaultValue` | 非受控默认选中值 | `string[]` | `[]` |
| `onValueChange` | 选中值变化时的回调 | `(value: string[]) => void` | — |
| `required` | 是否为必选字段 | `boolean` | `false` |
| `name` | 表单字段名称 | `string` | — |

### CheckboxGroup.Item

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 该选项的值（必填） | `string` | — |
| `disabled` | 禁用该选项 | `boolean` | `false` |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/checkbox-group) 获取完整 API 与设计规范。
