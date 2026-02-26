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

## 何时使用

- 提供一组相关操作的入口
- 节省页面空间，隐藏次要功能
- 显示与某个控件相关的选项列表
- 提供分层级的命令或选项
- 实现选择、切换或分组相关功能

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
