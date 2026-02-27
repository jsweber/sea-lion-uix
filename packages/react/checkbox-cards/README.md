# `react-checkbox-cards`

CheckboxCards 是一个卡片式复选框组件，用于在网格布局中进行多选操作，结合了卡片的视觉效果和复选框的功能。

主要特点：

- 支持三种尺寸：1、2、3
- 提供两种视觉变体：surface、classic
- 支持网格布局与高对比度模式
- 支持受控与非受控使用方式

## 安装

```sh
pnpm add @sea-lion/react-checkbox-cards
# 或者
npm install @sea-lion/react-checkbox-cards
yarn add @sea-lion/react-checkbox-cards
```

## 使用

在代码中引入组件：

```tsx
import * as CheckboxCards from '@sea-lion/react-checkbox-cards';
```

### 基本用法

```jsx
<CheckboxCards.Root>
  <CheckboxCards.Item value="a">选项 A</CheckboxCards.Item>
  <CheckboxCards.Item value="b">选项 B</CheckboxCards.Item>
  <CheckboxCards.Item value="c">选项 C</CheckboxCards.Item>
</CheckboxCards.Root>
```

### 带图标和文字

通常将图标与文字组合使用，丰富卡片内容：

```jsx
import { InfoCircledIcon, RocketIcon, GearIcon } from '@radix-ui/react-icons';

<CheckboxCards.Root color="blue">
  <CheckboxCards.Item value="option1">
    <InfoCircledIcon width="20" height="20" />
    <Text>数据分析</Text>
  </CheckboxCards.Item>
  <CheckboxCards.Item value="option2">
    <RocketIcon width="20" height="20" />
    <Text>自动化处理</Text>
  </CheckboxCards.Item>
  <CheckboxCards.Item value="option3">
    <GearIcon width="20" height="20" />
    <Text>系统设置</Text>
  </CheckboxCards.Item>
</CheckboxCards.Root>
```

### 不同尺寸

支持尺寸 `"1"`、`"2"`、`"3"`：

```jsx
<Flex direction="column" gap="4">
  {['1', '2', '3'].map((size) => (
    <CheckboxCards.Root key={size} size={size}>
      <CheckboxCards.Item value="option1">
        <InfoCircledIcon width="20" height="20" />
        <Text>尺寸 {size}</Text>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="option2">
        <RocketIcon width="20" height="20" />
        <Text>示例选项</Text>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
  ))}
</Flex>
```

### 不同变体

通过 `variant` 属性设置卡片的视觉风格：

```jsx
<Flex direction="column" gap="4">
  <CheckboxCards.Root variant="surface">
    <CheckboxCards.Item value="option1">
      <Text>surface 变体</Text>
    </CheckboxCards.Item>
    <CheckboxCards.Item value="option2">
      <Text>示例选项</Text>
    </CheckboxCards.Item>
  </CheckboxCards.Root>

  <CheckboxCards.Root variant="classic">
    <CheckboxCards.Item value="option1">
      <Text>classic 变体</Text>
    </CheckboxCards.Item>
    <CheckboxCards.Item value="option2">
      <Text>示例选项</Text>
    </CheckboxCards.Item>
  </CheckboxCards.Root>
</Flex>
```

### 不同颜色

通过 `color` 属性设置选中状态的颜色主题：

```jsx
<Flex direction="column" gap="4">
  {['gray', 'gold', 'bronze', 'red', 'blue', 'green'].map((color) => (
    <CheckboxCards.Root key={color} color={color}>
      <CheckboxCards.Item value="option1">
        <Text>{color} 主题</Text>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="option2">
        <Text>示例选项</Text>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
  ))}
</Flex>
```

### 受控用法

通过 `value` 和 `onValueChange` 实现受控选择：

```jsx
const [values, setValues] = React.useState([]);

<Flex direction="column" gap="4">
  <Text size="3" weight="bold">选择功能模块：</Text>

  <CheckboxCards.Root
    value={values}
    onValueChange={setValues}
    color="blue"
  >
    <CheckboxCards.Item value="analytics">
      <InfoCircledIcon width="20" height="20" />
      <Flex direction="column" gap="1">
        <Text weight="bold">数据分析</Text>
        <Text size="2" color="gray">提供详细的数据分析报告</Text>
      </Flex>
    </CheckboxCards.Item>

    <CheckboxCards.Item value="automation">
      <RocketIcon width="20" height="20" />
      <Flex direction="column" gap="1">
        <Text weight="bold">自动化处理</Text>
        <Text size="2" color="gray">自动执行重复性任务</Text>
      </Flex>
    </CheckboxCards.Item>

    <CheckboxCards.Item value="settings">
      <GearIcon width="20" height="20" />
      <Flex direction="column" gap="1">
        <Text weight="bold">系统设置</Text>
        <Text size="2" color="gray">自定义系统配置选项</Text>
      </Flex>
    </CheckboxCards.Item>
  </CheckboxCards.Root>

  <Text size="2" color="gray">
    已选择: {values.length ? values.join(', ') : '未选择任何选项'}
  </Text>
</Flex>
```

### 高对比度

通过 `highContrast` 属性启用高对比度模式：

```jsx
<CheckboxCards.Root highContrast>
  <CheckboxCards.Item value="option1">
    <Text>高对比度选项一</Text>
  </CheckboxCards.Item>
  <CheckboxCards.Item value="option2">
    <Text>高对比度选项二</Text>
  </CheckboxCards.Item>
</CheckboxCards.Root>
```

## Props / API

### CheckboxCards.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 受控选中值列表 | `string[]` | - |
| `defaultValue` | 默认选中值列表（非受控） | `string[]` | - |
| `onValueChange` | 选中值变化时的回调 | `(value: string[]) => void` | - |
| `size` | 卡片尺寸 | `"1" \| "2" \| "3"` | `"2"` |
| `variant` | 视觉变体 | `"surface" \| "classic"` | `"surface"` |
| `color` | 选中状态颜色主题 | `"gray" \| "gold" \| "bronze" \| "red" \| "blue" \| "green"` | `"blue"` |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |
| `columns` | 网格列数 | `string \| object` | - |

### CheckboxCards.Item

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 该选项的值（必填） | `string` | - |
| `disabled` | 是否禁用该选项 | `boolean` | `false` |
| `children` | 卡片内容 | `React.ReactNode` | - |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/checkbox-cards) 获取完整 API 与设计规范。
