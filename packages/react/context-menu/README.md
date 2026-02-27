# `react-context-menu`

ContextMenu 是在用户右击或长按元素时显示的菜单，提供与该上下文相关的操作选项。支持子菜单、复选框、单选框、分组标签、禁用项等丰富的菜单能力。

## 安装

```sh
pnpm add @sea-lion/react-context-menu
# 或者
npm install @sea-lion/react-context-menu
yarn add @sea-lion/react-context-menu
```

## 使用

在代码中引入组件：

```tsx
import * as ContextMenu from '@sea-lion/react-context-menu';
```

### 基本用法

```jsx
<ContextMenu.Root>
  <ContextMenu.Trigger>
    <Box>右击此处</Box>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item>编辑</ContextMenu.Item>
    <ContextMenu.Item>复制</ContextMenu.Item>
    <ContextMenu.Item>粘贴</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item>删除</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>
```

### 菜单变体

通过 `variant` 属性切换 Content 的视觉风格：

```jsx
{/* Soft 变体（默认） */}
<ContextMenu.Content variant="soft">
  <ContextMenu.Label>编辑选项</ContextMenu.Label>
  <ContextMenu.Item>剪切</ContextMenu.Item>
  <ContextMenu.Item>复制</ContextMenu.Item>
  <ContextMenu.Item>粘贴</ContextMenu.Item>
</ContextMenu.Content>

{/* Solid 变体 */}
<ContextMenu.Content variant="solid">
  <ContextMenu.Label>编辑选项</ContextMenu.Label>
  <ContextMenu.Item>剪切</ContextMenu.Item>
  <ContextMenu.Item>复制</ContextMenu.Item>
  <ContextMenu.Item>粘贴</ContextMenu.Item>
</ContextMenu.Content>

{/* 高对比度 */}
<ContextMenu.Content highContrast>
  <ContextMenu.Label>编辑选项</ContextMenu.Label>
  <ContextMenu.Item>剪切</ContextMenu.Item>
  <ContextMenu.Item>复制</ContextMenu.Item>
</ContextMenu.Content>
```

### 颜色

通过 `color` 属性为菜单内容设置主题色：

```jsx
<ContextMenu.Content color="blue">
  <ContextMenu.Item>选项 1</ContextMenu.Item>
  <ContextMenu.Item>选项 2</ContextMenu.Item>
</ContextMenu.Content>

<ContextMenu.Content color="crimson">
  <ContextMenu.Item>选项 1</ContextMenu.Item>
  <ContextMenu.Item>选项 2</ContextMenu.Item>
</ContextMenu.Content>

<ContextMenu.Content color="green">
  <ContextMenu.Item>选项 1</ContextMenu.Item>
  <ContextMenu.Item>选项 2</ContextMenu.Item>
</ContextMenu.Content>
```

### 尺寸

通过 `size` 属性控制菜单的紧凑程度：

```jsx
{/* 尺寸 1（紧凑） */}
<ContextMenu.Content size="1">
  <ContextMenu.Item>选项 1</ContextMenu.Item>
  <ContextMenu.Item>选项 2</ContextMenu.Item>
</ContextMenu.Content>

{/* 尺寸 2（默认） */}
<ContextMenu.Content size="2">
  <ContextMenu.Item>选项 1</ContextMenu.Item>
  <ContextMenu.Item>选项 2</ContextMenu.Item>
</ContextMenu.Content>
```

### 子菜单

使用 `Sub`、`SubTrigger` 和 `SubContent` 创建多级子菜单：

```jsx
<ContextMenu.Root>
  <ContextMenu.Trigger>
    <Box>右击显示带子菜单的菜单</Box>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item>查看</ContextMenu.Item>
    <ContextMenu.Item>刷新</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger>更多选项</ContextMenu.SubTrigger>
      <ContextMenu.SubContent>
        <ContextMenu.Item>选项 1</ContextMenu.Item>
        <ContextMenu.Item>选项 2</ContextMenu.Item>
        <ContextMenu.Item>选项 3</ContextMenu.Item>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger>排序方式</ContextMenu.SubTrigger>
      <ContextMenu.SubContent>
        <ContextMenu.RadioGroup value="name">
          <ContextMenu.RadioItem value="name">按名称</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="date">按日期</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="size">按大小</ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
  </ContextMenu.Content>
</ContextMenu.Root>
```

### 复选框和单选框

使用 `CheckboxItem` 实现多选切换，使用 `RadioGroup` + `RadioItem` 实现单选：

```jsx
const [showToolbar, setShowToolbar] = useState(true);
const [theme, setTheme] = useState('light');

<ContextMenu.Root>
  <ContextMenu.Trigger>
    <Box>右击查看</Box>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Label>视图选项</ContextMenu.Label>
    <ContextMenu.CheckboxItem
      checked={showToolbar}
      onCheckedChange={setShowToolbar}
    >
      显示工具栏
    </ContextMenu.CheckboxItem>
    <ContextMenu.CheckboxItem>显示状态栏</ContextMenu.CheckboxItem>
    <ContextMenu.Separator />
    <ContextMenu.Group>
      <ContextMenu.Label>主题</ContextMenu.Label>
      <ContextMenu.RadioGroup value={theme} onValueChange={setTheme}>
        <ContextMenu.RadioItem value="light">浅色</ContextMenu.RadioItem>
        <ContextMenu.RadioItem value="dark">深色</ContextMenu.RadioItem>
        <ContextMenu.RadioItem value="system">跟随系统</ContextMenu.RadioItem>
      </ContextMenu.RadioGroup>
    </ContextMenu.Group>
  </ContextMenu.Content>
</ContextMenu.Root>
```

### 禁用选项

通过 `disabled` 属性禁用特定菜单项：

```jsx
<ContextMenu.Content>
  <ContextMenu.Item>编辑</ContextMenu.Item>
  <ContextMenu.Item disabled>删除（无权限）</ContextMenu.Item>
  <ContextMenu.Item>复制</ContextMenu.Item>
  <ContextMenu.Separator />
  <ContextMenu.Sub>
    <ContextMenu.SubTrigger>共享</ContextMenu.SubTrigger>
    <ContextMenu.SubContent>
      <ContextMenu.Item>通过邮件</ContextMenu.Item>
      <ContextMenu.Item disabled>通过信息（不可用）</ContextMenu.Item>
      <ContextMenu.Item>创建链接</ContextMenu.Item>
    </ContextMenu.SubContent>
  </ContextMenu.Sub>
</ContextMenu.Content>
```

## 何时使用

- 需要为用户提供特定元素或区域的附加操作
- 需要减少界面复杂度，隐藏不常用的功能
- 遵循桌面应用的常见交互，让用户通过右键访问功能
- 在移动设备上通过长按提供额外选项

## Props / API 属性

### ContextMenu.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `onOpenChange` | 菜单打开状态变化时的回调 | `(open: boolean) => void` | — |
| `modal` | 是否以模态模式渲染 | `boolean` | `true` |

### ContextMenu.Trigger

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `asChild` | 将子元素合并为触发器渲染 | `boolean` | `false` |
| `disabled` | 禁用触发器 | `boolean` | `false` |

### ContextMenu.Content

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 菜单尺寸 | `"1" \| "2"` | `"2"` |
| `variant` | 视觉变体 | `"soft" \| "solid"` | `"soft"` |
| `color` | 主题颜色 | `string` | — |
| `highContrast` | 使用高对比度颜色 | `boolean` | `false` |

### ContextMenu.Item

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `disabled` | 禁用该菜单项 | `boolean` | `false` |
| `onSelect` | 选中时的回调 | `(event: Event) => void` | — |
| `color` | 单项颜色 | `string` | — |
| `shortcut` | 显示快捷键提示 | `string` | — |

### ContextMenu.CheckboxItem

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `checked` | 是否选中 | `boolean` | — |
| `onCheckedChange` | 选中状态变化回调 | `(checked: boolean) => void` | — |
| `disabled` | 禁用该项 | `boolean` | `false` |

### ContextMenu.RadioGroup

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 当前选中值 | `string` | — |
| `onValueChange` | 选中值变化回调 | `(value: string) => void` | — |

### ContextMenu.RadioItem

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 该项的值（必填） | `string` | — |
| `disabled` | 禁用该项 | `boolean` | `false` |

### ContextMenu.Sub / SubTrigger / SubContent

用于创建子菜单。`Sub` 包裹 `SubTrigger`（触发器）和 `SubContent`（子菜单内容）。

### ContextMenu.Label

分组标签，不可交互，仅用于展示菜单分组名称。

### ContextMenu.Separator

分隔线，用于在视觉上区分菜单项组。

### ContextMenu.Group

对相关菜单项进行逻辑分组。

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/context-menu) 获取完整 API 与设计规范。
