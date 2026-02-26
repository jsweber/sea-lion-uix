# `react-context-menu`

ContextMenu 是在用户右击或长按元素时显示的菜单，提供与该上下文相关的操作选项。

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
    <ContextMenu.Item onSelect={() => {}}>复制</ContextMenu.Item>
    <ContextMenu.Item onSelect={() => {}}>粘贴</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item onSelect={() => {}}>删除</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>
```

## 何时使用

- 需要为用户提供特定元素或区域的附加操作
- 需要减少界面复杂度，隐藏不常用的功能
- 遵循桌面应用的常见交互，让用户通过右键访问功能
- 在移动设备上通过长按提供额外选项

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
