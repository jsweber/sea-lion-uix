---
name: use-sea-lion-components
description: Use @sea-lion/react-* component library in a business/application project. Use when the project depends on sea-lion-uix and the user or agent needs to install, import, or use a component (Button, Dialog, Card, etc.) with correct package name and API.
---

# 在业务项目中使用 Sea-Lion 组件库

本 Skill 面向**已引入 sea-lion 组件库的业务项目**，帮助开发者和 Agent 正确安装、引入和使用 `@sea-lion/react-*` 组件。

## 何时使用

- 业务项目已依赖或准备使用 `@sea-lion/react-*`，需要查组件用法、包名或示例时
- 实现 UI 时要选用 Button、Dialog、Card、Flex 等组件，需确认安装与 import 方式时
- 不确定某个组件是命名空间导出还是默认导出、或需查 Props 时

## 在业务项目中的使用方式

### 1. 安装

在业务项目根目录执行（按需替换组件名）：

```bash
pnpm add @sea-lion/react-<组件名>
# 或 npm install @sea-lion/react-<组件名>
```

组件名见 [reference.md](reference.md) 中的包名（去掉 `@sea-lion/react-` 前缀）。

### 2. 引入约定

- **命名空间导出**（复合组件，如 AlertDialog、DropdownMenu、Dialog）：  
  `import * as X from '@sea-lion/react-xxx'`，使用 `X.Root`、`X.Trigger`、`X.Content` 等子组件。
- **默认/命名导出**（单一组件，如 Button、Card、Flex）：  
  `import { Button } from '@sea-lion/react-button'`，直接使用 `<Button>`。

具体每个包用哪种方式见 reference 中的「引入方式」。

### 3. 主题包裹

组件样式依赖 Radix Theme 变量。在业务代码中建议用 `Theme` 包裹使用 sea-lion 组件的区域：

```tsx
import { Theme } from '@sea-lion/react-theme';

<Theme>
  <Button>按钮</Button>
</Theme>
```

### 4. 在业务项目中查 API 与示例

业务项目安装后，可从**已安装的包**里查文档和类型：

- **Readme 与用法**：`node_modules/@sea-lion/react-<组件名>/readme.md`（若有）
- **类型定义**：`node_modules/@sea-lion/react-<组件名>/` 下的类型导出，便于补全和校验 Props

若业务项目能访问**组件库源码**（如 monorepo 或本地 linked）：

- 详细示例与 Props 说明在组件库的 `packages/react/<组件名>/src/*.stories.tsx`（JSDoc、argTypes、args、render）
- 简要说明在 `packages/react/<组件名>/readme.md`

优先使用业务项目内 `node_modules` 中的 readme 与类型；需要更多示例时再查库内 story。

## 快速参考

- **包名格式**：`@sea-lion/react-<组件名>`，组件名为 kebab-case（如 `alert-dialog`、`dropdown-menu`）。
- **常用配套**：布局用 `Flex`、`Grid`、`Box`；文案用 `Text`；按钮用 `Button`；主题用 `Theme`。
- **技术栈**：React + TypeScript，底层基于 Radix UI (Radix Theme)。

## 更多信息

- 包名列表、引入方式及业务项目中查文档的路径见 [reference.md](reference.md)。
