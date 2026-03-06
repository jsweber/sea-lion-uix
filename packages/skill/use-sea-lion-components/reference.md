# Sea-Lion 组件速查（业务项目用）

业务项目安装 `@sea-lion/react-*` 后，在本项目中查 API 与示例的方式：

- **Readme/用法**：`node_modules/@sea-lion/react-<组件名>/readme.md`
- **类型与导出**：`node_modules/@sea-lion/react-<组件名>/` 下 package 的 main/types 入口

若可访问组件库源码（如 monorepo 或 link），可进一步查看：

- `packages/react/<组件名>/readme.md`
- `packages/react/<组件名>/src/*.stories.tsx`（含 JSDoc、argTypes、args、render 示例）

---

## 组件列表（包名 + 引入方式）

| 包名 | 引入方式 | 说明 |
|------|----------|------|
| @sea-lion/react-alert-dialog | `import * as AlertDialog from '@sea-lion/react-alert-dialog'` | 确认对话框，子组件 Root/Trigger/Content/Title/Description/Action/Cancel |
| @sea-lion/react-aspect-ratio | `import { AspectRatio } from '@sea-lion/react-aspect-ratio'` | 宽高比容器 |
| @sea-lion/react-avatar | `import { Avatar } from '@sea-lion/react-avatar'` | 头像 |
| @sea-lion/react-badge | `import { Badge } from '@sea-lion/react-badge'` | 徽标 |
| @sea-lion/react-blockquote | `import { Blockquote } from '@sea-lion/react-blockquote'` | 引用块 |
| @sea-lion/react-box | `import { Box } from '@sea-lion/react-box'` | 通用容器 |
| @sea-lion/react-button | `import { Button } from '@sea-lion/react-button'` | 按钮 |
| @sea-lion/react-callout | `import { Callout } from '@sea-lion/react-callout'` | 提示块 |
| @sea-lion/react-card | `import { Card } from '@sea-lion/react-card'` | 卡片 |
| @sea-lion/react-chat | `import * as Chat from '@sea-lion/react-chat'` 或见包内导出 | 聊天相关 |
| @sea-lion/react-checkbox | `import { Checkbox } from '@sea-lion/react-checkbox'` | 复选框 |
| @sea-lion/react-checkbox-cards | 见包内导出 | 复选框卡片 |
| @sea-lion/react-checkbox-group | 见包内导出 | 复选框组 |
| @sea-lion/react-code | `import { Code } from '@sea-lion/react-code'` | 行内/块级代码 |
| @sea-lion/react-container | `import { Container } from '@sea-lion/react-container'` | 布局容器 |
| @sea-lion/react-context-menu | `import * as ContextMenu from '@sea-lion/react-context-menu'` | 右键菜单 |
| @sea-lion/react-data-list | 见包内导出 | 数据列表 |
| @sea-lion/react-dialog | `import * as Dialog from '@sea-lion/react-dialog'` | 对话框，子组件 Root/Trigger/Content 等 |
| @sea-lion/react-dropdown-menu | `import * as DropdownMenu from '@sea-lion/react-dropdown-menu'` | 下拉菜单，Root/Trigger/Content/Item 等 |
| @sea-lion/react-flex | `import { Flex } from '@sea-lion/react-flex'` | 弹性布局 |
| @sea-lion/react-grid | `import { Grid } from '@sea-lion/react-grid'` | 网格布局 |
| @sea-lion/react-heading | `import { Heading } from '@sea-lion/react-heading'` | 标题 |
| @sea-lion/react-hover-card | `import * as HoverCard from '@sea-lion/react-hover-card'` | 悬停卡片 |
| @sea-lion/react-icon-button | `import { IconButton } from '@sea-lion/react-icon-button'` | 图标按钮 |
| @sea-lion/react-input | `import { Input } from '@sea-lion/react-input'` | 输入框 |
| @sea-lion/react-inset | `import { Inset } from '@sea-lion/react-inset'` | 内边距/裁切 |
| @sea-lion/react-kbd | `import { Kbd } from '@sea-lion/react-kbd'` | 键盘按键样式 |
| @sea-lion/react-link | `import { Link } from '@sea-lion/react-link'` | 链接 |
| @sea-lion/react-oss-icon | 见包内导出 | OSS 图标 |
| @sea-lion/react-popover | `import * as Popover from '@sea-lion/react-popover'` | 弹出层 |
| @sea-lion/react-progress | `import { Progress } from '@sea-lion/react-progress'` | 进度条 |
| @sea-lion/react-radio | `import { Radio } from '@sea-lion/react-radio'` | 单选框 |
| @sea-lion/react-radio-card | 见包内导出 | 单选卡片 |
| @sea-lion/react-radio-group | `import * as RadioGroup from '@sea-lion/react-radio-group'` | 单选组 |
| @sea-lion/react-reset | `import { Reset } from '@sea-lion/react-reset'` | 样式重置 |
| @sea-lion/react-scroll-area | `import { ScrollArea } from '@sea-lion/react-scroll-area'` | 滚动区域 |
| @sea-lion/react-section | `import { Section } from '@sea-lion/react-section'` | 区块 |
| @sea-lion/react-segmented-control | 见包内导出 | 分段控件 |
| @sea-lion/react-select | `import * as Select from '@sea-lion/react-select'` | 选择器 |
| @sea-lion/react-separator | `import { Separator } from '@sea-lion/react-separator'` | 分割线 |
| @sea-lion/react-skeleton | `import { Skeleton } from '@sea-lion/react-skeleton'` | 骨架屏 |
| @sea-lion/react-slider | `import { Slider } from '@sea-lion/react-slider'` | 滑块 |
| @sea-lion/react-spinner | `import { Spinner } from '@sea-lion/react-spinner'` | 加载旋转 |
| @sea-lion/react-switch | `import { Switch } from '@sea-lion/react-switch'` | 开关 |
| @sea-lion/react-tab | `import * as Tabs from '@sea-lion/react-tab'` | 标签页 |
| @sea-lion/react-tab-nav | 见包内导出 | 标签导航 |
| @sea-lion/react-tabs2 | 见包内导出 | 标签页 v2 |
| @sea-lion/react-table | 见包内导出 | 表格 |
| @sea-lion/react-text | `import { Text } from '@sea-lion/react-text'` | 文本 |
| @sea-lion/react-text-area | `import { TextArea } from '@sea-lion/react-text-area'` | 多行输入 |
| @sea-lion/react-theme | `import { Theme } from '@sea-lion/react-theme'` | 主题包裹，推荐包裹使用 sea-lion 的根节点 |
| @sea-lion/react-tooltip | `import * as Tooltip from '@sea-lion/react-tooltip'` | 气泡提示 |

「见包内导出」表示以命名空间或具名导出为主，具体以 `node_modules/@sea-lion/react-<组件名>/` 下入口为准。

---

## 业务项目如何引入本 Skill

本 Skill 随组件库存放在 `packages/skill/use-sea-lion-components/`，便于通过 git 提交与版本管理。业务项目使用时，将该目录复制到业务项目的 `.cursor/skills/` 下即可：

```bash
# 在业务项目根目录执行（将 /path/to/sea-lion-uix 换成组件库实际路径，如克隆后的仓库或 node_modules 中的包路径）
cp -r /path/to/sea-lion-uix/packages/skill/use-sea-lion-components .cursor/skills/
```

复制后，在业务项目中与 Cursor 协作时，提到「用 sea-lion 的 Button」「加一个确认对话框」等，Agent 会按本 Skill 与 reference 使用正确的包名和引入方式。
