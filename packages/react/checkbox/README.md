# `react-checkbox`

Checkbox 是一个复选框组件，用于在表单中进行多选操作。支持选中、未选中、半选状态，多种颜色主题和禁用状态。

## 安装

```sh
pnpm add @sea-lion/react-checkbox
# 或者
npm install @sea-lion/react-checkbox
yarn add @sea-lion/react-checkbox
```

## 使用

在代码中引入组件：

```tsx
import { Checkbox } from '@sea-lion/react-checkbox';
```

### 基本用法

```jsx
<Checkbox />
<Checkbox defaultChecked />
<Checkbox checked={checked} onCheckedChange={setChecked} />
<Checkbox checked="indeterminate" />
```

### 不同状态

Checkbox 支持三种状态：选中、未选中和半选（`indeterminate`）。

```jsx
<Flex direction="column" gap="4">
  <Flex align="center" gap="2">
    <Checkbox defaultChecked />
    <Text>选中状态</Text>
  </Flex>

  <Flex align="center" gap="2">
    <Checkbox checked="indeterminate" />
    <Text>半选状态</Text>
  </Flex>

  <Flex align="center" gap="2">
    <Checkbox disabled />
    <Text color="gray">禁用状态</Text>
  </Flex>

  <Flex align="center" gap="2">
    <Checkbox disabled defaultChecked />
    <Text color="gray">禁用且选中</Text>
  </Flex>
</Flex>
```

### 不同颜色

通过 `color` 属性设置复选框颜色主题：

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Flex key={color} align="center" gap="2">
      <Checkbox color={color} defaultChecked />
      <Text>{color} 主题</Text>
    </Flex>
  ))}
</Flex>
```

### 高对比度

通过 `highContrast` 属性启用高对比度模式，使复选框在深色背景下更清晰：

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <Flex key={color} align="center" gap="2">
      <Checkbox color={color} highContrast defaultChecked />
      <Text>高对比度 {color}</Text>
    </Flex>
  ))}
</Flex>
```

### 表单应用

在表单中受控使用 Checkbox：

```jsx
const [checked, setChecked] = React.useState(false);

<Flex direction="column" gap="4">
  <Text size="3" weight="bold">用户协议</Text>

  <Flex align="start" gap="2">
    <Checkbox
      checked={checked}
      onCheckedChange={() => setChecked(!checked)}
    />
    <Text size="2">我已阅读并同意《用户协议》和《隐私政策》</Text>
  </Flex>

  <button disabled={!checked}>下一步</button>
</Flex>
```

## Props / API

### Checkbox

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `checked` | 复选框的选中状态 | `boolean \| "indeterminate"` | - |
| `defaultChecked` | 初始选中状态（非受控） | `boolean` | `false` |
| `onCheckedChange` | 选中状态变化时的回调 | `(checked: boolean \| "indeterminate") => void` | - |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `color` | 颜色主题 | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | - |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |
| `size` | 复选框尺寸 | `"1" \| "2" \| "3"` | `"2"` |
| `name` | 表单字段名称 | `string` | - |
| `value` | 表单字段值 | `string` | - |
| `required` | 是否必填 | `boolean` | `false` |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/checkbox) 获取完整 API 与设计规范。
