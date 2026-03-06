# `react-dialog`

Dialog 是一个模态对话框组件，用于显示需要用户注意或操作的内容，同时阻止与页面其余部分的交互，直到对话框关闭。支持多种尺寸、对齐方式、自定义宽度以及受控/非受控两种用法。

## 安装

```sh
pnpm add @sea-lion/react-dialog
# 或者
npm install @sea-lion/react-dialog
yarn add @sea-lion/react-dialog
```

## 使用

在代码中引入组件：

```tsx
import * as Dialog from '@sea-lion/react-dialog';
```

### 基本用法

```jsx
<Dialog.Root>
  <Dialog.Trigger asChild>
    <button>打开对话框</button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>标题</Dialog.Title>
    <Dialog.Description>描述内容</Dialog.Description>
    <Dialog.Close asChild>
      <button>关闭</button>
    </Dialog.Close>
  </Dialog.Content>
</Dialog.Root>
```

### 配合 Button 和 Flex 使用

```jsx
import { Button } from '@sea-lion/react-button';
import { Flex } from '@sea-lion/react-flex';

<Dialog.Root>
  <Dialog.Trigger>
    <Button>打开对话框</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>对话框标题</Dialog.Title>
    <Dialog.Description>
      这是一个简单的对话框示例。对话框用于显示需要用户注意或操作的内容，
      同时阻止与页面其余部分的交互，直到对话框关闭。
    </Dialog.Description>
    <Flex justify="end" gap="3" mt="4">
      <Dialog.Close>
        <Button variant="soft" color="gray">取消</Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button>确认</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
```

### 尺寸

通过 `size` 属性控制对话框的整体尺寸：

```jsx
{/* 小尺寸 */}
<Dialog.Root>
  <Dialog.Trigger><Button>小对话框</Button></Dialog.Trigger>
  <Dialog.Content size="1">
    <Dialog.Title size="3">小尺寸对话框</Dialog.Title>
    <Dialog.Description size="1">适合显示简单的信息或操作。</Dialog.Description>
    <Flex justify="end" gap="2" mt="3">
      <Dialog.Close><Button size="1">确定</Button></Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>

{/* 默认尺寸 */}
<Dialog.Root>
  <Dialog.Trigger><Button>默认对话框</Button></Dialog.Trigger>
  <Dialog.Content size="3">
    <Dialog.Title size="5">默认尺寸对话框</Dialog.Title>
    <Dialog.Description size="3">适合大多数场景使用。</Dialog.Description>
    <Flex justify="end" gap="3" mt="4">
      <Dialog.Close><Button>确定</Button></Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>

{/* 大尺寸 */}
<Dialog.Root>
  <Dialog.Trigger><Button>大对话框</Button></Dialog.Trigger>
  <Dialog.Content size="4">
    <Dialog.Title size="6">大尺寸对话框</Dialog.Title>
    <Dialog.Description size="4">适合展示复杂内容或多步骤操作。</Dialog.Description>
    <Flex justify="end" gap="3" mt="4">
      <Dialog.Close><Button size="3">确定</Button></Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
```

### 对齐方式

通过 `align` 属性控制对话框在视口中的垂直位置：

```jsx
{/* 居中对齐（默认） */}
<Dialog.Content align="center">
  <Dialog.Title>居中对话框</Dialog.Title>
  <Dialog.Description>对话框出现在屏幕中央，适合大多数场景。</Dialog.Description>
</Dialog.Content>

{/* 顶部对齐 */}
<Dialog.Content align="start">
  <Dialog.Title>顶部对齐对话框</Dialog.Title>
  <Dialog.Description>对话框出现在屏幕顶部，适合展示较长内容。</Dialog.Description>
</Dialog.Content>
```

### 自定义宽度

通过 `maxWidth`、`width`、`minWidth` 精确控制对话框尺寸：

```jsx
{/* 最大宽度 400px */}
<Dialog.Content maxWidth="400px">
  <Dialog.Title>窄对话框</Dialog.Title>
  <Dialog.Description>适合显示简短信息或简单表单。</Dialog.Description>
</Dialog.Content>

{/* 最大宽度 800px */}
<Dialog.Content maxWidth="800px">
  <Dialog.Title>宽对话框</Dialog.Title>
  <Dialog.Description>适合显示更多内容、表格或复杂表单。</Dialog.Description>
</Dialog.Content>

{/* 固定宽度 500px */}
<Dialog.Content width="500px">
  <Dialog.Title>固定宽度对话框</Dialog.Title>
  <Dialog.Description>在所有屏幕尺寸下保持相同宽度。</Dialog.Description>
</Dialog.Content>
```

### 受控对话框

通过 `open` 和 `onOpenChange` 从外部完整控制对话框状态：

```jsx
const [open, setOpen] = useState(false);

<Dialog.Root open={open} onOpenChange={setOpen}>
  <Dialog.Trigger>
    <Button>打开受控对话框</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>受控对话框</Dialog.Title>
    <Dialog.Description>
      此对话框的开关状态由 React 状态控制，适合需要精确控制行为的场景。
    </Dialog.Description>
    <Flex direction="column" gap="3" mt="4">
      <p>当前状态: {open ? '打开' : '关闭'}</p>
      <Flex justify="end" gap="3">
        <Button variant="soft" color="gray" onClick={() => setOpen(false)}>取消</Button>
        <Button onClick={() => {
          console.log('确认操作');
          setOpen(false);
        }}>确认</Button>
      </Flex>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
```

### 带表单的对话框

在对话框内嵌入表单，收集用户输入：

```jsx
<Dialog.Root>
  <Dialog.Trigger>
    <Button>打开表单对话框</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>用户信息</Dialog.Title>
    <Dialog.Description>请填写以下信息完成注册。所有字段均为必填。</Dialog.Description>

    <form style={{ marginTop: 'var(--space-4)' }}>
      <Flex direction="column" gap="3">
        <Box>
          <label htmlFor="name">姓名</label>
          <input id="name" placeholder="请输入姓名" />
        </Box>
        <Box>
          <label htmlFor="email">电子邮件</label>
          <input id="email" type="email" placeholder="your.email@example.com" />
        </Box>
        <Box>
          <label htmlFor="bio">自我介绍</label>
          <textarea id="bio" placeholder="请简单介绍一下您自己" />
        </Box>
        <Flex justify="end" gap="3" mt="2">
          <Dialog.Close>
            <Button variant="soft" color="gray">取消</Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>提交</Button>
          </Dialog.Close>
        </Flex>
      </Flex>
    </form>
  </Dialog.Content>
</Dialog.Root>
```

### 非受控（默认打开）

```jsx
<Dialog.Root defaultOpen>
  <Dialog.Content>
    <Dialog.Title>默认打开的对话框</Dialog.Title>
    <Dialog.Description>页面加载后此对话框默认处于打开状态。</Dialog.Description>
    <Dialog.Close>
      <Button mt="4">关闭</Button>
    </Dialog.Close>
  </Dialog.Content>
</Dialog.Root>
```

## 何时使用

- 需要用户确认重要操作
- 显示用户需要立即注意的信息
- 收集用户输入而不离开当前页面
- 显示需要用户决策的警告或错误信息
- 展示详细内容而不导航到新页面

## Props / API 属性

### Dialog.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `open` | 受控的打开状态 | `boolean` | — |
| `defaultOpen` | 非受控的默认打开状态 | `boolean` | `false` |
| `onOpenChange` | 打开状态变化时的回调 | `(open: boolean) => void` | — |

### Dialog.Content

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 对话框尺寸 | `"1" \| "2" \| "3" \| "4"` | `"3"` |
| `align` | 对话框在视口中的垂直对齐方式 | `"center" \| "start"` | `"center"` |
| `width` | 固定宽度 | `string` | — |
| `minWidth` | 最小宽度 | `string` | — |
| `maxWidth` | 最大宽度 | `string` | — |
| `height` | 高度 | `string` | — |
| `minHeight` | 最小高度 | `string` | — |
| `maxHeight` | 最大高度 | `string` | — |

### Dialog.Trigger

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `asChild` | 将子元素合并为触发器渲染 | `boolean` | `false` |

### Dialog.Close

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `asChild` | 将子元素合并为关闭按钮渲染 | `boolean` | `false` |

### Dialog.Title

对话框标题，带有正确的 `aria-labelledby` 语义。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 字体尺寸 | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | — |

### Dialog.Description

对话框描述，带有正确的 `aria-describedby` 语义。

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 字体尺寸 | `"1" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | — |

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/dialog) 获取完整 API 与设计规范。
