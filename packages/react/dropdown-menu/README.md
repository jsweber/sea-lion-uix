# `react-dropdown-menu`

DropdownMenu 是一个下拉菜单组件，它可以在用户点击触发器后显示一系列选项，支持多级子菜单、复选框、单选框等功能。

## 安装

```sh
$ yarn add @sea-lion/react-dropdown-menu
# 或者
$ npm install @sea-lion/react-dropdown-menu
```

## 基本使用

```jsx
import * as DropdownMenu from "@sea-lion/react-dropdown-menu";
import { Button } from "@sea-lion/react-button";

export default () => (
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
);
```

## 何时使用

- 提供一组相关操作的入口
- 节省页面空间，隐藏次要功能
- 显示与某个控件相关的选项列表
- 提供分层级的命令或选项
- 实现选择、切换或分组相关功能

## 特点

- 支持不同尺寸（1-4）的菜单样式
- 提供高对比度模式和多种颜色选项
- 支持键盘导航和快捷键显示
- 内置子菜单、分组、分隔符功能
- 支持复选框和单选框选项
- 自动处理溢出和滚动

## API

### DropdownMenu.Root

| 参数         | 说明               | 类型                    | 默认值 | 版本  |
| ------------ | ------------------ | ----------------------- | ------ | ----- |
| defaultOpen  | 默认是否打开       | boolean                 | false  | 0.2.1 |
| open         | 是否打开（受控）   | boolean                 | -      | 0.2.1 |
| onOpenChange | 打开状态变化回调   | (open: boolean) => void | -      | 0.2.1 |
| modal        | 是否为模态下拉菜单 | boolean                 | true   | 0.2.1 |
| children     | 子元素             | ReactNode               | -      | 0.2.1 |

### DropdownMenu.Content

| 参数         | 说明           | 类型                                   | 默认值   | 版本  |
| ------------ | -------------- | -------------------------------------- | -------- | ----- |
| size         | 菜单尺寸       | '1' \| '2' \| '3' \| '4'               | '2'      | 0.2.1 |
| variant      | 菜单样式变体   | 'solid' \| 'soft'                      | 'solid'  | 0.2.1 |
| color        | 菜单主题色     | string                                 | 'gray'   | 0.2.1 |
| highContrast | 是否高对比度   | boolean                                | false    | 0.2.1 |
| align        | 对齐方式       | 'start' \| 'center' \| 'end'           | 'start'  | 0.2.1 |
| side         | 弹出位置       | 'top' \| 'right' \| 'bottom' \| 'left' | 'bottom' | 0.2.1 |
| sideOffset   | 侧边偏移       | number                                 | 4        | 0.2.1 |
| alignOffset  | 对齐偏移       | number                                 | 0        | 0.2.1 |
| container    | 指定挂载的容器 | HTMLElement                            | -        | 0.2.1 |

### DropdownMenu.Item

| 参数     | 说明         | 类型                   | 默认值 | 版本  |
| -------- | ------------ | ---------------------- | ------ | ----- |
| color    | 选项颜色     | string                 | 'gray' | 0.2.1 |
| shortcut | 快捷键提示   | ReactNode              | -      | 0.2.1 |
| disabled | 是否禁用     | boolean                | false  | 0.2.1 |
| onSelect | 选择事件回调 | (event: Event) => void | -      | 0.2.1 |
| children | 子元素       | ReactNode              | -      | 0.2.1 |

### DropdownMenu.CheckboxItem

| 参数            | 说明             | 类型                       | 默认值 | 版本  |
| --------------- | ---------------- | -------------------------- | ------ | ----- |
| checked         | 是否选中         | boolean                    | -      | 0.2.1 |
| onCheckedChange | 选中状态变化回调 | (checked: boolean) => void | -      | 0.2.1 |
| color           | 选项颜色         | string                     | 'gray' | 0.2.1 |
| shortcut        | 快捷键提示       | ReactNode                  | -      | 0.2.1 |
| disabled        | 是否禁用         | boolean                    | false  | 0.2.1 |
| children        | 子元素           | ReactNode                  | -      | 0.2.1 |

### DropdownMenu.RadioGroup & DropdownMenu.RadioItem

| 参数          | 说明       | 类型                    | 默认值 | 版本  |
| ------------- | ---------- | ----------------------- | ------ | ----- |
| value         | 选中的值   | string                  | -      | 0.2.1 |
| onValueChange | 值变化回调 | (value: string) => void | -      | 0.2.1 |
| color         | 选项颜色   | string                  | 'gray' | 0.2.1 |
| shortcut      | 快捷键提示 | ReactNode               | -      | 0.2.1 |
| disabled      | 是否禁用   | boolean                 | false  | 0.2.1 |
| children      | 子元素     | ReactNode               | -      | 0.2.1 |

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
