# `react-callout`

Callout 是一个用于展示重要信息、提示、警告等内容的组件。包含图标和文本，支持不同的视觉样式、尺寸和颜色主题。

主要特点：

- 支持三种尺寸：1、2、3
- 提供三种视觉变体：soft、surface、outline
- 可自定义颜色主题，支持高对比度模式
- 包含 Icon 和 Text 两个子组件

## 安装

```sh
pnpm add @sea-lion/react-callout
# 或者
npm install @sea-lion/react-callout
yarn add @sea-lion/react-callout
```

## 使用

在代码中引入组件：

```tsx
import * as Callout from '@sea-lion/react-callout';
```

### 基本用法

Callout 由 `Root`、`Icon` 和 `Text` 三个子组件组成：

```jsx
import { InfoCircledIcon } from '@radix-ui/react-icons';

<Callout.Root>
  <Callout.Icon>
    <InfoCircledIcon width="20" height="20" />
  </Callout.Icon>
  <Callout.Text>
    这是一个基础的 Callout 提示框，用于展示重要信息。
  </Callout.Text>
</Callout.Root>
```

### 不同尺寸

支持尺寸 `"1"`、`"2"`、`"3"`：

```jsx
<Flex direction="column" gap="4">
  {['1', '2', '3'].map((size) => (
    <Callout.Root key={size} size={size}>
      <Callout.Icon>
        <InfoCircledIcon width="20" height="20" />
      </Callout.Icon>
      <Callout.Text>
        尺寸 {size} 的 Callout 提示框
      </Callout.Text>
    </Callout.Root>
  ))}
</Flex>
```

### 不同变体

通过 `variant` 属性设置 Callout 的视觉风格：

```jsx
<Flex direction="column" gap="4">
  <Callout.Root variant="soft">
    <Callout.Icon><InfoCircledIcon /></Callout.Icon>
    <Callout.Text>soft 变体 — 柔和背景</Callout.Text>
  </Callout.Root>

  <Callout.Root variant="surface">
    <Callout.Icon><InfoCircledIcon /></Callout.Icon>
    <Callout.Text>surface 变体 — 表面样式</Callout.Text>
  </Callout.Root>

  <Callout.Root variant="outline">
    <Callout.Icon><InfoCircledIcon /></Callout.Icon>
    <Callout.Text>outline 变体 — 描边样式</Callout.Text>
  </Callout.Root>
</Flex>
```

### 不同颜色与使用场景

结合颜色与图标，区分不同的信息类型：

```jsx
import { InfoCircledIcon, CheckCircledIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';

<Flex direction="column" gap="4">
  {/* 信息提示 */}
  <Callout.Root color="blue" variant="soft">
    <Callout.Icon>
      <InfoCircledIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      系统将于今晚 24:00 进行例行维护，请提前保存您的工作。
    </Callout.Text>
  </Callout.Root>

  {/* 成功提示 */}
  <Callout.Root color="green" variant="surface">
    <Callout.Icon>
      <CheckCircledIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      您的更改已成功保存，所有设置已生效。
    </Callout.Text>
  </Callout.Root>

  {/* 警告提示 */}
  <Callout.Root color="yellow" variant="outline">
    <Callout.Icon>
      <ExclamationTriangleIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      您的存储空间即将用完，请及时清理不必要的文件。
    </Callout.Text>
  </Callout.Root>

  {/* 错误提示 */}
  <Callout.Root color="red" variant="soft">
    <Callout.Icon>
      <ExclamationTriangleIcon width="20" height="20" />
    </Callout.Icon>
    <Callout.Text>
      操作失败，请稍后再试或联系管理员。
    </Callout.Text>
  </Callout.Root>
</Flex>
```

### 高对比度

通过 `highContrast` 属性启用高对比度模式：

```jsx
<Flex direction="column" gap="4">
  {['soft', 'surface', 'outline'].map((variant) => (
    <Callout.Root key={variant} variant={variant} highContrast>
      <Callout.Icon>
        <InfoCircledIcon width="20" height="20" />
      </Callout.Icon>
      <Callout.Text>
        高对比度的 {variant} Callout 提示框
      </Callout.Text>
    </Callout.Root>
  ))}
</Flex>
```

## Props / API

### Callout.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 提示框尺寸 | `"1" \| "2" \| "3"` | `"2"` |
| `variant` | 视觉变体 | `"soft" \| "surface" \| "outline"` | `"soft"` |
| `color` | 颜色主题 | `"gray" \| "gold" \| "blue" \| "green" \| "red" \| "yellow" \| ...` | `"blue"` |
| `highContrast` | 是否使用高对比度 | `boolean` | `false` |
| `role` | ARIA 角色 | `string` | `"group"` |
| `children` | 子节点（Icon + Text） | `React.ReactNode` | - |

### Callout.Icon

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `children` | 图标内容 | `React.ReactNode` | - |

### Callout.Text

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `children` | 提示文本内容 | `React.ReactNode` | - |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/callout) 获取完整 API 与设计规范。
