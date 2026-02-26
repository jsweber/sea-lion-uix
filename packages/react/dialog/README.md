# `react-dialog`

Dialog 是一个模态对话框组件，用于显示需要用户注意或操作的内容，同时阻止与页面其余部分的交互，直到对话框关闭。

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

## 何时使用

- 需要用户确认重要操作
- 显示用户需要立即注意的信息
- 收集用户输入而不离开当前页面
- 显示需要用户决策的警告或错误信息
- 展示详细内容而不导航到新页面

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
