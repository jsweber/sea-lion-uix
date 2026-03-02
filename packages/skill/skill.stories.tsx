import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import KNOWLEDGE_BASE_zh from './KNOWLEDGE_BASE_zh.md';
import KNOWLEDGE_BASE_en from './KNOWLEDGE_BASE_en.md';

const SKILL_MD = `---
name: use-sea-lion-components
description: >
  Use @sea-lion/react-* component library in a business/application project.
  Use when the project depends on sea-lion-uix and the user or agent needs to
  install, import, or use a component (Button, Dialog, Card, etc.) with correct
  package name and API.
---

# 在业务项目中使用 Sea-Lion 组件库

本 Skill 面向**已引入 sea-lion 组件库的业务项目**，帮助开发者和 Agent 正确安装、引入和使用 \`@sea-lion/react-*\` 组件。

## 何时使用

- 业务项目已依赖或准备使用 \`@sea-lion/react-*\`，需要查组件用法、包名或示例时
- 实现 UI 时要选用 Button、Dialog、Card、Flex 等组件，需确认安装与 import 方式时
- 不确定某个组件是命名空间导出还是默认导出、或需查 Props 时

## 在业务项目中的使用方式

### 1. 安装

在业务项目根目录执行（按需替换组件名）：

\`\`\`bash
pnpm add @sea-lion/react-<组件名>
# 或 npm install @sea-lion/react-<组件名>
\`\`\`

组件名见 reference.md 中的包名（去掉 \`@sea-lion/react-\` 前缀）。

### 2. 引入约定

- **命名空间导出**（复合组件，如 AlertDialog、DropdownMenu、Dialog）：  
  \`import * as X from '@sea-lion/react-xxx'\`，使用 \`X.Root\`、\`X.Trigger\`、\`X.Content\` 等子组件。
- **默认/命名导出**（单一组件，如 Button、Card、Flex）：  
  \`import { Button } from '@sea-lion/react-button'\`，直接使用 \`<Button>\`。

具体每个包用哪种方式见 reference 中的「引入方式」。

### 3. 主题包裹

组件样式依赖 Radix Theme 变量。在业务代码中建议用 \`Theme\` 包裹使用 sea-lion 组件的区域：

\`\`\`tsx
import { Theme } from '@sea-lion/react-theme';

<Theme>
  <Button>按钮</Button>
</Theme>
\`\`\`

### 4. 在业务项目中查 API 与示例

业务项目安装后，可从**已安装的包**里查文档和类型：

- **Readme 与用法**：\`node_modules/@sea-lion/react-<组件名>/readme.md\`（若有）
- **类型定义**：\`node_modules/@sea-lion/react-<组件名>/\` 下的类型导出，便于补全和校验 Props

若业务项目能访问**组件库源码**（如 monorepo 或本地 linked）：

- 详细示例与 Props 说明在组件库的 \`packages/react/<组件名>/src/*.stories.tsx\`（JSDoc、argTypes、args、render）
- 简要说明在 \`packages/react/<组件名>/readme.md\`

优先使用业务项目内 \`node_modules\` 中的 readme 与类型；需要更多示例时再查库内 story。

## 快速参考

- **包名格式**：\`@sea-lion/react-<组件名>\`，组件名为 kebab-case（如 \`alert-dialog\`、\`dropdown-menu\`）。
- **常用配套**：布局用 \`Flex\`、\`Grid\`、\`Box\`；文案用 \`Text\`；按钮用 \`Button\`；主题用 \`Theme\`。
- **技术栈**：React + TypeScript，底层基于 Radix UI (Radix Theme)。

## 更多信息

- 包名列表、引入方式及业务项目中查文档的路径见 reference.md。
`;

const REFERENCE_MD = `# Sea-Lion 组件速查（业务项目用）

业务项目安装 \`@sea-lion/react-*\` 后，在本项目中查 API 与示例的方式：

- **Readme/用法**：\`node_modules/@sea-lion/react-<组件名>/readme.md\`
- **类型与导出**：\`node_modules/@sea-lion/react-<组件名>/\` 下 package 的 main/types 入口

若可访问组件库源码（如 monorepo 或 link），可进一步查看：

- \`packages/react/<组件名>/readme.md\`
- \`packages/react/<组件名>/src/*.stories.tsx\`（含 JSDoc、argTypes、args、render 示例）

---

## 组件列表（包名 + 引入方式）

| 包名 | 引入方式 | 说明 |
|------|----------|------|
| @sea-lion/react-alert-dialog | \`import * as AlertDialog from '@sea-lion/react-alert-dialog'\` | 确认对话框 |
| @sea-lion/react-aspect-ratio | \`import { AspectRatio } from '@sea-lion/react-aspect-ratio'\` | 宽高比容器 |
| @sea-lion/react-avatar | \`import { Avatar } from '@sea-lion/react-avatar'\` | 头像 |
| @sea-lion/react-badge | \`import { Badge } from '@sea-lion/react-badge'\` | 徽标 |
| @sea-lion/react-blockquote | \`import { Blockquote } from '@sea-lion/react-blockquote'\` | 引用块 |
| @sea-lion/react-box | \`import { Box } from '@sea-lion/react-box'\` | 通用容器 |
| @sea-lion/react-button | \`import { Button } from '@sea-lion/react-button'\` | 按钮 |
| @sea-lion/react-callout | \`import { Callout } from '@sea-lion/react-callout'\` | 提示块 |
| @sea-lion/react-card | \`import { Card } from '@sea-lion/react-card'\` | 卡片 |
| @sea-lion/react-chat | \`import * as Chat from '@sea-lion/react-chat'\` 或见包内导出 | 聊天相关 |
| @sea-lion/react-checkbox | \`import { Checkbox } from '@sea-lion/react-checkbox'\` | 复选框 |
| @sea-lion/react-checkbox-cards | 见包内导出 | 复选框卡片 |
| @sea-lion/react-checkbox-group | 见包内导出 | 复选框组 |
| @sea-lion/react-code | \`import { Code } from '@sea-lion/react-code'\` | 行内/块级代码 |
| @sea-lion/react-container | \`import { Container } from '@sea-lion/react-container'\` | 布局容器 |
| @sea-lion/react-context-menu | \`import * as ContextMenu from '@sea-lion/react-context-menu'\` | 右键菜单 |
| @sea-lion/react-data-list | 见包内导出 | 数据列表 |
| @sea-lion/react-dialog | \`import * as Dialog from '@sea-lion/react-dialog'\` | 对话框 |
| @sea-lion/react-dropdown-menu | \`import * as DropdownMenu from '@sea-lion/react-dropdown-menu'\` | 下拉菜单 |
| @sea-lion/react-flex | \`import { Flex } from '@sea-lion/react-flex'\` | 弹性布局 |
| @sea-lion/react-grid | \`import { Grid } from '@sea-lion/react-grid'\` | 网格布局 |
| @sea-lion/react-heading | \`import { Heading } from '@sea-lion/react-heading'\` | 标题 |
| @sea-lion/react-hover-card | \`import * as HoverCard from '@sea-lion/react-hover-card'\` | 悬停卡片 |
| @sea-lion/react-icon-button | \`import { IconButton } from '@sea-lion/react-icon-button'\` | 图标按钮 |
| @sea-lion/react-input | \`import { Input } from '@sea-lion/react-input'\` | 输入框 |
| @sea-lion/react-inset | \`import { Inset } from '@sea-lion/react-inset'\` | 内边距/裁切 |
| @sea-lion/react-kbd | \`import { Kbd } from '@sea-lion/react-kbd'\` | 键盘按键样式 |
| @sea-lion/react-link | \`import { Link } from '@sea-lion/react-link'\` | 链接 |
| @sea-lion/react-oss-icon | 见包内导出 | OSS 图标 |
| @sea-lion/react-popover | \`import * as Popover from '@sea-lion/react-popover'\` | 弹出层 |
| @sea-lion/react-progress | \`import { Progress } from '@sea-lion/react-progress'\` | 进度条 |
| @sea-lion/react-radio | \`import { Radio } from '@sea-lion/react-radio'\` | 单选框 |
| @sea-lion/react-radio-card | 见包内导出 | 单选卡片 |
| @sea-lion/react-radio-group | \`import * as RadioGroup from '@sea-lion/react-radio-group'\` | 单选组 |
| @sea-lion/react-reset | \`import { Reset } from '@sea-lion/react-reset'\` | 样式重置 |
| @sea-lion/react-scroll-area | \`import { ScrollArea } from '@sea-lion/react-scroll-area'\` | 滚动区域 |
| @sea-lion/react-section | \`import { Section } from '@sea-lion/react-section'\` | 区块 |
| @sea-lion/react-segmented-control | 见包内导出 | 分段控件 |
| @sea-lion/react-select | \`import * as Select from '@sea-lion/react-select'\` | 选择器 |
| @sea-lion/react-separator | \`import { Separator } from '@sea-lion/react-separator'\` | 分割线 |
| @sea-lion/react-skeleton | \`import { Skeleton } from '@sea-lion/react-skeleton'\` | 骨架屏 |
| @sea-lion/react-slider | \`import { Slider } from '@sea-lion/react-slider'\` | 滑块 |
| @sea-lion/react-spinner | \`import { Spinner } from '@sea-lion/react-spinner'\` | 加载旋转 |
| @sea-lion/react-switch | \`import { Switch } from '@sea-lion/react-switch'\` | 开关 |
| @sea-lion/react-tab | \`import * as Tabs from '@sea-lion/react-tab'\` | 标签页 |
| @sea-lion/react-tab-nav | 见包内导出 | 标签导航 |
| @sea-lion/react-tabs2 | 见包内导出 | 标签页 v2 |
| @sea-lion/react-table | 见包内导出 | 表格 |
| @sea-lion/react-text | \`import { Text } from '@sea-lion/react-text'\` | 文本 |
| @sea-lion/react-text-area | \`import { TextArea } from '@sea-lion/react-text-area'\` | 多行输入 |
| @sea-lion/react-theme | \`import { Theme } from '@sea-lion/react-theme'\` | 主题包裹 |
| @sea-lion/react-tooltip | \`import * as Tooltip from '@sea-lion/react-tooltip'\` | 气泡提示 |

「见包内导出」表示以命名空间或具名导出为主，具体以 \`node_modules/@sea-lion/react-<组件名>/\` 下入口为准。

---

## 业务项目如何引入本 Skill

本 Skill 随组件库存放在 \`packages/skill/use-sea-lion-components/\`，便于通过 git 提交与版本管理。
业务项目使用时，将该目录复制到业务项目的 \`.cursor/skills/\` 下即可：

\`\`\`bash
cp -r /path/to/sea-lion-uix/packages/skill/use-sea-lion-components .cursor/skills/
\`\`\`

复制后，在业务项目中与 Cursor 协作时，提到「用 sea-lion 的 Button」「加一个确认对话框」等，
Agent 会按本 Skill 与 reference 使用正确的包名和引入方式。
`;

interface FileInfo {
    label: string;
    filename: string;
    description: string;
    content: string;
}

const FILES: FileInfo[] = [
    {
        label: 'SKILL.md',
        filename: 'SKILL.md',
        description: 'Cursor Agent Skill 主文件，复制到业务项目 .cursor/skills/use-sea-lion-components/ 下使用',
        content: SKILL_MD,
    },
    {
        label: 'reference.md',
        filename: 'reference.md',
        description: '组件速查表，包含所有组件的包名和引入方式，与 SKILL.md 放在同一目录',
        content: REFERENCE_MD,
    },
];

const SKILL_DIR_TREE = `业务项目根目录/
└── .cursor/
    └── skills/
        └── use-sea-lion-components/
            ├── SKILL.md
            └── reference.md`;

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const style: React.CSSProperties = {
        padding: '4px 12px',
        fontSize: '12px',
        borderRadius: '4px',
        border: '1px solid #d1d5db',
        background: copied ? '#22c55e' : '#f9fafb',
        color: copied ? '#fff' : '#374151',
        cursor: 'pointer',
        transition: 'all 0.15s',
        fontWeight: 500,
    };

    return (
        <button onClick={handleCopy} style={style}>
            {copied ? '已复制' : '复制'}
        </button>
    );
}

function KnowledgeBaseCopyButton({ content, label }: { content: string; label: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(content).then(
            () => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
            },
            () => {},
        );
    };

    const btnStyle: React.CSSProperties = {
        padding: '8px 16px',
        fontSize: '13px',
        borderRadius: '6px',
        border: '1px solid #e5e7eb',
        background: copied ? '#22c55e' : '#fff',
        color: copied ? '#fff' : '#374151',
        cursor: 'pointer',
        transition: 'all 0.15s',
        fontWeight: 500,
    };

    return (
        <button onClick={handleCopy} style={btnStyle}>
            {copied ? '已复制' : label}
        </button>
    );
}

function FileCard({ file }: { file: FileInfo }) {
    const cardStyle: React.CSSProperties = {
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        marginBottom: '24px',
        overflow: 'hidden',
        fontFamily: 'system-ui, sans-serif',
    };

    const headerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        background: '#f8fafc',
        borderBottom: '1px solid #e5e7eb',
    };

    const filenameStyle: React.CSSProperties = {
        fontWeight: 600,
        fontSize: '14px',
        color: '#0f172a',
        fontFamily: 'monospace',
        background: '#e2e8f0',
        padding: '2px 8px',
        borderRadius: '4px',
    };

    const descStyle: React.CSSProperties = {
        marginLeft: '10px',
        fontSize: '13px',
        color: '#64748b',
    };

    const preStyle: React.CSSProperties = {
        margin: 0,
        padding: '16px',
        background: '#1e293b',
        color: '#e2e8f0',
        fontSize: '12px',
        lineHeight: '1.6',
        overflowX: 'auto',
        maxHeight: '420px',
        overflowY: 'auto',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
    };

    return (
        <div style={cardStyle}>
            <div style={headerStyle}>
                <div>
                    <span style={filenameStyle}>{file.filename}</span>
                    <span style={descStyle}>{file.description}</span>
                </div>
                <CopyButton text={file.content} />
            </div>
            <pre style={preStyle}>{file.content}</pre>
        </div>
    );
}

function SkillDocs() {
    const wrapStyle: React.CSSProperties = {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '32px 24px',
        fontFamily: 'system-ui, sans-serif',
    };

    const h1Style: React.CSSProperties = {
        fontSize: '24px',
        fontWeight: 700,
        color: '#0f172a',
        marginBottom: '8px',
    };

    const leadStyle: React.CSSProperties = {
        color: '#475569',
        fontSize: '14px',
        marginBottom: '32px',
        lineHeight: '1.7',
    };

    const inlineCodeStyle: React.CSSProperties = {
        background: '#f1f5f9',
        padding: '1px 6px',
        borderRadius: '3px',
        fontSize: '13px',
    };

    const installBoxStyle: React.CSSProperties = {
        background: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: '8px',
        padding: '16px 20px',
        marginBottom: '32px',
    };

    const installLabelStyle: React.CSSProperties = {
        fontWeight: 600,
        fontSize: '13px',
        color: '#15803d',
        marginBottom: '8px',
    };

    const h2Style: React.CSSProperties = {
        fontSize: '16px',
        fontWeight: 600,
        color: '#0f172a',
        marginBottom: '16px',
    };

    const tipStyle: React.CSSProperties = {
        background: '#eff6ff',
        border: '1px solid #bfdbfe',
        borderRadius: '8px',
        padding: '16px 20px',
        fontSize: '13px',
        color: '#1e40af',
        lineHeight: '1.7',
    };

    const tipCodeStyle: React.CSSProperties = {
        background: '#dbeafe',
        padding: '1px 5px',
        borderRadius: '3px',
    };

    return (
        <div style={wrapStyle}>
            <h1 style={h1Style}>Cursor Skill — use-sea-lion-components</h1>
            <p style={leadStyle}>
                本 Skill 供业务项目使用，帮助 Cursor Agent 正确安装、引入和使用{' '}
                <code style={inlineCodeStyle}>@sea-lion/react-*</code>{' '}
                系列组件。将下方文件复制到业务项目的{' '}
                <code style={inlineCodeStyle}>.cursor/skills/use-sea-lion-components/</code>{' '}
                目录下即可激活。
            </p>

            <div style={installBoxStyle}>
                <div style={installLabelStyle}>快速引入</div>
                <div style={{ fontSize: '13px', color: '#166534', lineHeight: '1.7' }}>
                    <p style={{ margin: '0 0 8px 0' }}>在业务项目根目录下按以下步骤操作：</p>
                    <ol style={{ margin: 0, paddingLeft: '20px' }}>
                        <li>若不存在，先创建 <code style={inlineCodeStyle}>.cursor</code> 目录；</li>
                        <li>在 <code style={inlineCodeStyle}>.cursor</code> 下创建 <code style={inlineCodeStyle}>skills</code> 目录；</li>
                        <li>在 <code style={inlineCodeStyle}>skills</code> 下创建 <code style={inlineCodeStyle}>use-sea-lion-components</code> 目录；</li>
                        <li>
                            将下方「Skill 文件内容」中的 <code style={inlineCodeStyle}>SKILL.md</code>、
                            <code style={inlineCodeStyle}>reference.md</code> 分别复制到{' '}
                            <code style={inlineCodeStyle}>.cursor/skills/use-sea-lion-components/</code> 下同名文件中。
                        </li>
                    </ol>
                    <p style={{ margin: '12px 0 0 0' }}>目标目录结构：</p>
                    <pre style={{
                        margin: '8px 0 0 0',
                        padding: '12px 16px',
                        background: '#ecfdf5',
                        border: '1px solid #bbf7d0',
                        borderRadius: '6px',
                        fontSize: '12px',
                        lineHeight: '1.5',
                        fontFamily: 'monospace',
                        color: '#166534',
                        overflowX: 'auto',
                    }}
                    >
                        {SKILL_DIR_TREE}
                    </pre>
                    <p style={{ margin: '12px 0 0 0' }}>
                        若已克隆 sea-lion-uix 仓库，也可直接将仓库中的{' '}
                        <code style={inlineCodeStyle}>packages/skill/use-sea-lion-components</code> 整个目录
                        复制到业务项目的 <code style={inlineCodeStyle}>.cursor/skills/</code> 下。
                    </p>
                </div>
            </div>

            <h2 style={h2Style}>Skill 文件内容（点击「复制」后粘贴到对应文件）</h2>

            {FILES.map((file) => (
                <FileCard key={file.filename} file={file} />
            ))}

            <div style={tipStyle}>
                <strong>使用说明：</strong>
                将 SKILL.md 和 reference.md 均复制到业务项目的{' '}
                <code style={tipCodeStyle}>.cursor/skills/use-sea-lion-components/</code>{' '}
                目录下，保持目录结构。复制后在 Cursor 中与 Agent 对话时提到「用 sea-lion 的 Button」「加一个确认对话框」等，
                Agent 会自动按照 Skill 中的约定使用正确的包名和引入方式。
            </div>

            <h2 style={h2Style}>知识库文档（点击复制）</h2>
            <div style={{ ...installBoxStyle, background: '#fefce8', border: '1px solid #fef08a' }}>
                <div style={{ ...installLabelStyle, color: '#854d0e' }}>聚合好的组件 readme，可用于 RAG / 向量库或本地查阅。点击按钮复制全文到剪贴板。</div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
                    <KnowledgeBaseCopyButton content={KNOWLEDGE_BASE_zh} label="复制中文知识库 (KNOWLEDGE_BASE_zh.md)" />
                    <KnowledgeBaseCopyButton content={KNOWLEDGE_BASE_en} label="复制英文知识库 (KNOWLEDGE_BASE_en.md)" />
                </div>
            </div>
        </div>
    );
}

/**
 * ## Cursor Skill: use-sea-lion-components
 *
 * 本页展示供业务项目使用的 Cursor Skill 文件内容。
 *
 * 业务项目引入方式：
 *
 * ```bash
 * cp -r /path/to/sea-lion-uix/packages/skill/use-sea-lion-components .cursor/skills/
 * ```
 *
 * 复制后 Cursor Agent 在业务项目中即可自动识别并使用正确的 `@sea-lion/react-*` 包名与引入方式。
 */
const meta = {
    title: '总览/Cursor Skill',
    component: SkillDocs,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof SkillDocs>;

export default meta;
type Story = StoryObj<typeof SkillDocs>;

export const Overview: Story = {
    name: 'Skill 文件内容与使用说明',
    render: () => <SkillDocs />,
};
