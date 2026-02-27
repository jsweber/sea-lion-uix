# `react-alert-dialog`

AlertDialog 是确认对话框组件，用于需要用户确认或取消的操作场景。与普通 Dialog 不同，AlertDialog 强制用户在关闭前必须做出明确响应（确认或取消），不支持点击遮罩层关闭。

## 安装

```sh
pnpm add @sea-lion/react-alert-dialog
# 或者
npm install @sea-lion/react-alert-dialog
yarn add @sea-lion/react-alert-dialog
```

## 使用

在代码中引入组件：

```tsx
import * as AlertDialog from '@sea-lion/react-alert-dialog';
```

### 基本用法

```jsx
<AlertDialog.Root>
  <AlertDialog.Trigger asChild>
    <button>打开确认框</button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>确认操作</AlertDialog.Title>
    <AlertDialog.Description>
      确定要执行此操作吗？此操作不可撤销。
    </AlertDialog.Description>
    <AlertDialog.Action>确认</AlertDialog.Action>
    <AlertDialog.Cancel>取消</AlertDialog.Cancel>
  </AlertDialog.Content>
</AlertDialog.Root>
```

### 配合 Button 使用

结合 `Button` 组件以及 Flex 布局排列操作按钮：

```jsx
import { Button } from '@sea-lion/react-button';
import { Flex } from '@sea-lion/react-flex';

<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button>打开对话框</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content maxWidth="600px">
    <AlertDialog.Title>确认操作</AlertDialog.Title>
    <AlertDialog.Description>
      这是一个警告对话框示例。请确认后操作。
    </AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">取消</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button>确认</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

### 尺寸

AlertDialog.Content 支持四种尺寸，通过 `size` 属性设置：

```jsx
{/* 尺寸 1（小） */}
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button>Size 1</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content size="1">
    <AlertDialog.Title>小尺寸对话框</AlertDialog.Title>
    <AlertDialog.Description>这是尺寸为 1 的对话框。</AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel><Button variant="soft" color="gray">取消</Button></AlertDialog.Cancel>
      <AlertDialog.Action><Button>确认</Button></AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>

{/* 尺寸 4（大） */}
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button>Size 4</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content size="4">
    <AlertDialog.Title>大尺寸对话框</AlertDialog.Title>
    <AlertDialog.Description>这是尺寸为 4 的对话框。</AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel><Button variant="soft" color="gray">取消</Button></AlertDialog.Cancel>
      <AlertDialog.Action><Button>确认</Button></AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

### 对齐方式

通过 `align` 属性控制对话框在视口中的垂直位置：

```jsx
{/* 居中对齐（默认） */}
<AlertDialog.Content align="center">...</AlertDialog.Content>

{/* 顶部对齐 */}
<AlertDialog.Content align="start">...</AlertDialog.Content>
```

### 自定义宽度

通过 `width`、`maxWidth`、`minWidth` 等属性控制对话框尺寸：

```jsx
<AlertDialog.Content maxWidth="500px">
  ...
</AlertDialog.Content>

<AlertDialog.Content width="400px" maxWidth="90vw">
  ...
</AlertDialog.Content>
```

### 受控状态

通过 `open` 和 `onOpenChange` 从外部控制对话框的打开状态：

```jsx
const [open, setOpen] = useState(false);

<AlertDialog.Root open={open} onOpenChange={setOpen}>
  <AlertDialog.Trigger>
    <Button onClick={() => setOpen(true)}>打开</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>受控对话框</AlertDialog.Title>
    <AlertDialog.Description>...</AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">取消</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button>确认</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

### 使用场景示例

**删除确认：**

```jsx
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="red">删除数据</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>确认删除？</AlertDialog.Title>
    <AlertDialog.Description>
      此操作将永久删除所选数据，且无法恢复。
    </AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">取消</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button color="red">确认删除</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

**提交确认：**

```jsx
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="green">提交表单</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>确认提交？</AlertDialog.Title>
    <AlertDialog.Description>
      请确认所有信息填写无误后再提交。
    </AlertDialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">返回修改</Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button color="green">确认提交</Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
```

## 何时使用

- 需要用户确认或取消的重要操作
- 删除、提交等不可逆操作前的二次确认
- 需要强制用户做出明确响应、不允许点击遮罩层关闭的场景

## Props / API 属性

### AlertDialog.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `open` | 受控的打开状态 | `boolean` | — |
| `defaultOpen` | 非受控的默认打开状态 | `boolean` | `false` |
| `onOpenChange` | 打开状态变化时的回调 | `(open: boolean) => void` | — |

### AlertDialog.Content

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 对话框尺寸 | `"1" \| "2" \| "3" \| "4"` | `"3"` |
| `align` | 对话框垂直对齐方式 | `"start" \| "center"` | `"center"` |
| `width` | 对话框固定宽度 | `string` | — |
| `minWidth` | 对话框最小宽度 | `string` | — |
| `maxWidth` | 对话框最大宽度 | `string` | — |
| `height` | 对话框高度 | `string` | — |
| `minHeight` | 对话框最小高度 | `string` | — |
| `maxHeight` | 对话框最大高度 | `string` | — |
| `asChild` | 将子元素合并为根元素渲染 | `boolean` | `false` |

### AlertDialog.Trigger

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `asChild` | 将子元素合并为触发器渲染 | `boolean` | `false` |

### AlertDialog.Title

对话框标题，带有正确的 `aria-labelledby` 语义。接受标准 HTML 属性。

### AlertDialog.Description

对话框描述，带有正确的 `aria-describedby` 语义。接受标准 HTML 属性。

### AlertDialog.Action

确认操作按钮的容器，点击后会关闭对话框。

### AlertDialog.Cancel

取消操作按钮的容器，点击后会关闭对话框。

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/alert-dialog) 获取完整 API 与设计规范。
