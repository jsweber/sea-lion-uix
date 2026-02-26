# `react-alert-dialog`

AlertDialog 是确认对话框组件，用于需要用户确认或取消的操作场景。

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

## 何时使用

- 需要用户确认或取消的重要操作
- 删除、提交等不可逆操作前的二次确认

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
