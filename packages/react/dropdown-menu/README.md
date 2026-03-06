# `react-dropdown-menu`

DropdownMenu 是一个下拉菜单组件，在用户点击触发器后显示一系列选项，支持多级子菜单、复选框、单选框等功能。

## 安装

```sh
pnpm add @sea-lion/react-dropdown-menu
# 或者
npm install @sea-lion/react-dropdown-menu
yarn add @sea-lion/react-dropdown-menu
```

## 使用

在代码中引入组件：

```tsx
import * as DropdownMenu from '@sea-lion/react-dropdown-menu';
```

### 基本用法

```jsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild>
    <button>打开菜单</button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item onSelect={() => {}}>选项 1</DropdownMenu.Item>
    <DropdownMenu.Item onSelect={() => {}}>选项 2</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>子菜单</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item>子项</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### 配合 Button 使用（含快捷键）

使用 `TriggerIcon` 和 `shortcut` 属性增强交互体验：

```jsx
import { Button } from '@sea-lion/react-button';

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>
      菜单选项 <DropdownMenu.TriggerIcon />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>新建文档</DropdownMenu.Item>
    <DropdownMenu.Item>打开文件...</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item shortcut="⌘S">保存</DropdownMenu.Item>
    <DropdownMenu.Item shortcut="⇧⌘S">另存为...</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>导出</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### 尺寸

通过 `size` 属性控制下拉菜单内容的紧凑程度：

```jsx
{/* 小尺寸 */}
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>小菜单</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content size="1">
    <DropdownMenu.Item>选项 1</DropdownMenu.Item>
    <DropdownMenu.Item>选项 2</DropdownMenu.Item>
    <DropdownMenu.Item>选项 3</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>

{/* 默认尺寸 */}
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>默认菜单</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content size="2">
    <DropdownMenu.Item>选项 1</DropdownMenu.Item>
    <DropdownMenu.Item>选项 2</DropdownMenu.Item>
    <DropdownMenu.Item>选项 3</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### 子菜单

使用 `Sub`、`SubTrigger` 和 `SubContent` 创建多级菜单：

```jsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>
      高级选项 <DropdownMenu.TriggerIcon />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>普通操作</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>文件操作</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item>新建文件</DropdownMenu.Item>
        <DropdownMenu.Item>删除文件</DropdownMenu.Item>
        <DropdownMenu.Item>重命名</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>编辑操作</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item shortcut="⌘C">复制</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘V">粘贴</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘X">剪切</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>退出</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### 复选框和单选框

通过 `CheckboxItem` 实现开关切换，通过 `RadioGroup` + `RadioItem` 实现单选组：

```jsx
const [checked, setChecked] = useState(true);
const [fontSize, setFontSize] = useState('medium');

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>
      格式选项 <DropdownMenu.TriggerIcon />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.CheckboxItem
      checked={checked}
      onCheckedChange={setChecked}
    >
      粗体
    </DropdownMenu.CheckboxItem>
    <DropdownMenu.Separator />
    <DropdownMenu.Label>字体大小</DropdownMenu.Label>
    <DropdownMenu.RadioGroup value={fontSize} onValueChange={setFontSize}>
      <DropdownMenu.RadioItem value="small">小</DropdownMenu.RadioItem>
      <DropdownMenu.RadioItem value="medium">中</DropdownMenu.RadioItem>
      <DropdownMenu.RadioItem value="large">大</DropdownMenu.RadioItem>
    </DropdownMenu.RadioGroup>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### 分组与标签

使用 `Label` 和 `Separator` 对菜单项进行分组展示：

```jsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>账户选项 <DropdownMenu.TriggerIcon /></Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Label>账户管理</DropdownMenu.Label>
    <DropdownMenu.Item>个人资料</DropdownMenu.Item>
    <DropdownMenu.Item>账户设置</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Label>工作区</DropdownMenu.Label>
    <DropdownMenu.Item>切换团队</DropdownMenu.Item>
    <DropdownMenu.Item>创建新团队</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item color="red">退出登录</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

### 禁用菜单项

通过 `disabled` 属性禁用特定菜单项：

```jsx
<DropdownMenu.Content>
  <DropdownMenu.Item>编辑</DropdownMenu.Item>
  <DropdownMenu.Item disabled>删除（无权限）</DropdownMenu.Item>
  <DropdownMenu.Item>复制</DropdownMenu.Item>
</DropdownMenu.Content>
```

## 何时使用

- 提供一组相关操作的入口
- 节省页面空间，隐藏次要功能
- 显示与某个控件相关的选项列表
- 提供分层级的命令或选项
- 实现选择、切换或分组相关功能

## Props / API 属性

### DropdownMenu.Root

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `open` | 受控的打开状态 | `boolean` | — |
| `defaultOpen` | 非受控的默认打开状态 | `boolean` | `false` |
| `onOpenChange` | 打开状态变化时的回调 | `(open: boolean) => void` | — |
| `modal` | 是否以模态模式渲染 | `boolean` | `true` |
| `dir` | 文本方向 | `"ltr" \| "rtl"` | — |

### DropdownMenu.Trigger

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `asChild` | 将子元素合并为触发器渲染 | `boolean` | `false` |

### DropdownMenu.Content

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `size` | 菜单尺寸 | `"1" \| "2"` | `"2"` |
| `variant` | 视觉变体 | `"soft" \| "solid"` | `"soft"` |
| `color` | 主题颜色 | `string` | — |
| `highContrast` | 使用高对比度颜色 | `boolean` | `false` |

### DropdownMenu.Item

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `disabled` | 禁用该菜单项 | `boolean` | `false` |
| `onSelect` | 选中时的回调 | `(event: Event) => void` | — |
| `color` | 单项颜色 | `string` | — |
| `shortcut` | 显示快捷键提示 | `string` | — |

### DropdownMenu.CheckboxItem

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `checked` | 是否选中 | `boolean` | — |
| `onCheckedChange` | 选中状态变化回调 | `(checked: boolean) => void` | — |
| `disabled` | 禁用该项 | `boolean` | `false` |
| `shortcut` | 显示快捷键提示 | `string` | — |

### DropdownMenu.RadioGroup

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 当前选中值 | `string` | — |
| `onValueChange` | 选中值变化回调 | `(value: string) => void` | — |

### DropdownMenu.RadioItem

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 该项的值（必填） | `string` | — |
| `disabled` | 禁用该项 | `boolean` | `false` |
| `shortcut` | 显示快捷键提示 | `string` | — |

### DropdownMenu.Sub / SubTrigger / SubContent

用于创建子菜单。`Sub` 包裹 `SubTrigger`（子菜单触发器）和 `SubContent`（子菜单内容）。

### DropdownMenu.TriggerIcon

显示在触发器内的下拉箭头图标，通常放置于触发器文本后面。

### DropdownMenu.Label

分组标签，不可交互，仅用于展示菜单分组名称。

### DropdownMenu.Separator

分隔线，用于在视觉上区分菜单项组。

## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/dropdown-menu) 获取完整 API 与设计规范。
