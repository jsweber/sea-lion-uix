import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconFont } from '@sea-lion/react-oss-icon';
import { Tooltip } from '@sea-lion/react-tooltip';
import { Theme } from '@sea-lion/react-theme';
import { SVG_EXAMPLES, recolorSvg } from './sea-lion-visual-assets/examples/index';

const EXAMPLE_PROMPT_TOOLTIP =
    '自然语言即可，不必逐字相同；含场景与对象词便于 Skill 匹配图标或插画类型。';

const SKILL_MD = `---
name: sea-lion-visual-assets
description: 为使用 sea-lion-uix 组件库的业务项目提供视觉资源生成能力。1) 根据中文或英文描述从 oss-icon 图标库选择合适图标，生成 <IconFont> 组件代码；2) 根据卡片文字内容、页面主题色和开发者指定尺寸生成几何抽象 SVG 插画。使用时机：工程师说"帮我加个图标"、"需要一个xxx图标"、"给卡片生成插画/SVG/背景图"、"根据主题色生成SVG"时触发。
---

# Sea-Lion 视觉资源生成

两大能力：**图标选择** 和 **SVG 卡片插画生成**。

## 能力一：图标选择

### 步骤

1. **获取图标列表**：运行 \`node .cursor/skills/sea-lion-visual-assets/scripts/fetch-icons.js\`。
   - 可追加关键词过滤：\`node ... fetch-icons.js refresh\`
   - 可追加自定义 CSS URL：\`node ... fetch-icons.js refresh https://at.alicdn.com/t/c/font_xxx.css\`
2. **语义匹配**：从列表中选出最匹配工程师描述的图标名。
3. **判断渲染模式**：单色 → 默认 Font-class；多色 → 传 \`useSymbol\`。
4. **生成代码**：按 icon-guide.md 模板输出。

### 快速示例

\`\`\`tsx
import { IconFont } from '@sea-lion/react-oss-icon';

// 单色
<IconFont icon="icon-RefreshOutlined" fontSize="24px" color="#1890ff" />
// 多色
<IconFont icon="icon-huggingfaceColor" useSymbol style={{ fontSize: 24 }} />
\`\`\`

---

## 能力二：SVG 卡片插画生成

### 步骤

1. **确认尺寸**：询问或读取工程师指定的宽高（默认 400×200）。
2. **读取上下文**：卡片标题/描述 + 主题色（CSS variable 或具体色值）。
3. **语义分类**：判断内容类型（参见 svg-guide.md）。
4. **生成 SVG**：按对应类型风格规范生成，不含文字，只用形状传达语义。
5. **嵌入代码**：内联 SVG 或 data URI 方式使用。

### 快速示例

\`\`\`tsx
// 内联 SVG（宽高由工程师指定）
<svg width={width} height={height} viewBox={\`0 0 \${width} \${height}\`} xmlns="http://www.w3.org/2000/svg">
  {/* Agent 根据主题色、语义和尺寸生成 */}
</svg>
\`\`\`

---

## 详细参考

- 图标选择细则 → icon-guide.md
- SVG 风格规范 → svg-guide.md
- 图标列表脚本 → scripts/fetch-icons.js
`;

const ICON_GUIDE_MD = `# 图标选择细则

## 安装

\`\`\`bash
pnpm add @sea-lion/react-oss-icon
\`\`\`

## IconFont 组件 API

\`\`\`tsx
import { IconFont } from '@sea-lion/react-oss-icon';
\`\`\`

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`icon\` | \`string\` | 必填 | 图标类名，如 \`icon-RefreshOutlined\` |
| \`ossUrl\` | \`string\` | 内置链接 | \`.css\` → Font-class 单色；\`.js\` → Symbol 多色 |
| \`useSymbol\` | \`boolean\` | \`false\` | 不传 ossUrl 时：\`true\` 多色，\`false\` 单色 |
| \`color\` | \`string\` | \`currentColor\` | 图标颜色（Font-class 模式有效） |
| \`fontSize\` | \`string\` | \`1em\` | 图标尺寸，如 \`"24px"\` |
| \`style\` | \`CSSProperties\` | — | 内联样式 |
| \`className\` | \`string\` | — | 额外类名 |

导出常量（推荐使用变量名，不要硬编码 URL）：

\`\`\`tsx
import { defaultOssIconCssUrl, defaultOssIconJsUrl } from '@sea-lion/react-oss-icon';
\`\`\`

## 渲染模式判断

\`\`\`
需要多色图标？
  ├─ 是 → useSymbol={true}，或 ossUrl 传 .js 地址
  └─ 否 → 默认（Font-class 单色），可用 color 指定颜色
\`\`\`

## 语义匹配规则

| 用户描述关键词 | 优先匹配模式 |
|----------------|-------------|
| 刷新、重试 | \`icon-*Refresh*\` |
| 删除、清除 | \`icon-*delete*\` / \`icon-*cuowu*\` |
| 搜索、查询 | \`icon-*search*\` / \`icon-*Search*\` |
| 设置、配置 | \`icon-*setting*\` / \`icon-*Setting*\` |
| 用户、人员 | \`icon-*user*\` / \`icon-*User*\` |
| 上传、导入 | \`icon-*upload*\` / \`icon-*Upload*\` |
| 下载、导出 | \`icon-*download*\` / \`icon-*Download*\` |
| 编辑、修改 | \`icon-*edit*\` / \`icon-*Edit*\` |
| 警告、提示 | \`icon-*warning*\` / \`icon-*Warning*\` |
| 成功、完成 | \`icon-*check*\` / \`icon-*success*\` |
| 关闭、取消 | \`icon-*close*\` / \`icon-*Close*\` |
| 首页 | \`icon-*home*\` / \`icon-*Home*\` |
| 菜单、列表 | \`icon-*menu*\` / \`icon-*list*\` |
| 箭头、方向 | \`icon-*arrow*\` / \`icon-*Arrow*\` |

## 获取图标列表

\`\`\`bash
# 使用业务项目自身 iconfont（推荐）
node .cursor/skills/sea-lion-visual-assets/scripts/fetch-icons.js "" https://at.alicdn.com/t/c/font_你的项目id.css

# 使用 sea-lion 内置图标（默认）
node .cursor/skills/sea-lion-visual-assets/scripts/fetch-icons.js

# 按关键词过滤（内置图标库）
node .cursor/skills/sea-lion-visual-assets/scripts/fetch-icons.js refresh

# 按关键词过滤 + 自定义图标库
node .cursor/skills/sea-lion-visual-assets/scripts/fetch-icons.js refresh https://at.alicdn.com/t/c/font_xxx.css
\`\`\`

## 代码输出模板

\`\`\`tsx
import { IconFont } from '@sea-lion/react-oss-icon';

// 单色（最常用）
<IconFont icon="icon-{图标名}" fontSize="24px" />
<IconFont icon="icon-{图标名}" fontSize="24px" color="#1890ff" />
<IconFont icon="icon-{图标名}" style={{ fontSize: 20, color: 'var(--gray-11)' }} />

// 多色
<IconFont icon="icon-{图标名}" useSymbol style={{ fontSize: 28 }} />

// 使用自定义 iconfont 地址
<IconFont icon="icon-{图标名}" ossUrl="//at.alicdn.com/t/c/font_xxx.css" fontSize="24px" />
\`\`\`

## 已知多色图标（内置图标库）

- \`icon-NewOC_Cross-domain\`
- \`icon-huggingfaceColor\`
- \`icon-jushenzhineng\`
`;

const SVG_GUIDE_MD = `# SVG 卡片插画生成规范

## 尺寸处理

**优先询问工程师**指定宽高；未指定时使用默认值 \`width=400, height=200\`。

在所有 SVG 模板中，将 \`{W}\` 替换为实际宽度，\`{H}\` 替换为实际高度：

\`\`\`svg
<svg width="{W}" height="{H}" viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">
\`\`\`

各形状坐标按比例计算（如 \`0.5{W}\` 表示水平居中），不要写死绝对像素值。

## 颜色变量

| 占位符 | 含义 | 来源 |
|--------|------|------|
| \`{primaryColor}\` | 主题主色 | 工程师提供，或读取 CSS variable |
| \`{bgColor}\` | 背景色 | 主色的极浅变体，如 \`#f0f7ff\` |
| \`{accentColor}\` | 强调色 | 主色的深色版本或互补色 |

未指定时默认：\`primaryColor=#1890ff\`，\`bgColor=#f0f7ff\`。

## 内容类型分类（共 6 种）

1. **数据统计/分析**：矩形柱图 + 折线 + 圆形装饰
2. **用户/人员/社区**：圆形头像 + 椭圆身体 + 背景光圈
3. **功能/工具/设置**：节点连线网络图 + 六边形装饰
4. **警告/状态/通知**：三角形警示 + 感叹号
5. **成功/完成/结果**：同心圆 + 勾选路径
6. **内容/文档/知识**：矩形卡片叠加 + 横线文字行

详细的坐标模板（已按比例表示）见 svg-guide.md 完整版。

## 嵌入方式

\`\`\`tsx
// 内联 SVG（推荐）
<svg width={width} height={height} viewBox={\`0 0 \${width} \${height}\`} xmlns="http://www.w3.org/2000/svg">
  {/* SVG 内容 */}
</svg>

// 数据 URI（img 标签）
const dataUri = \`data:image/svg+xml;utf8,\${encodeURIComponent(svgContent)}\`;
<img src={dataUri} width={width} height={height} alt="card illustration" />
\`\`\`
`;

const FETCH_ICONS_JS = `/**
 * 从 iconfont CSS 解析所有可用图标名并打印
 *
 * 用法：
 *   node fetch-icons.js                                                       → 内置图标，列出全部
 *   node fetch-icons.js refresh                                                → 内置图标，过滤 "refresh"
 *   node fetch-icons.js "" https://at.alicdn.com/t/c/font_xxx.css             → 自定义图标库，列出全部
 *   node fetch-icons.js refresh https://at.alicdn.com/t/c/font_xxx.css        → 自定义图标库+过滤
 *
 * 参数：
 *   argv[2]  关键词（可选，空字符串或不传表示不过滤）
 *   argv[3]  iconfont CSS 地址（可选，不传则使用 sea-lion 内置图标库）
 */

const https = require('https');
const http = require('http');

const DEFAULT_CSS_URL = 'https://at.alicdn.com/t/c/font_3858115_hwwfmyoy6t7.css';

const keyword = (process.argv[2] ?? '').toLowerCase();
const rawUrl = process.argv[3] ?? DEFAULT_CSS_URL;
const CSS_URL = rawUrl.startsWith('//') ? \`https:\${rawUrl}\` : rawUrl;

function fetchText(url) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        client.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => (data += chunk));
            res.on('end', () => resolve(data));
            res.on('error', reject);
        }).on('error', reject);
    });
}

function parseIconNames(cssText) {
    const matches = [...cssText.matchAll(/\\.(icon-[^:]+):before/g)];
    return [...new Set(matches.map((m) => m[1]))];
}

(async () => {
    try {
        console.log(\`\\n图标库地址：\${CSS_URL}\`);
        const cssText = await fetchText(CSS_URL);
        let icons = parseIconNames(cssText);

        if (keyword) {
            icons = icons.filter((name) => name.toLowerCase().includes(keyword));
        }

        console.log(\`共找到 \${icons.length} 个图标\${keyword ? \`（过滤词："\${keyword}"）\` : ''}：\\n\`);
        icons.forEach((name) => console.log(\`  \${name}\`));
        console.log('');
    } catch (err) {
        console.error('获取图标列表失败：', err.message);
        process.exit(1);
    }
})();
`;

interface FileInfo {
    label: string;
    filename: string;
    targetPath: string;
    description: string;
    content: string;
}

const FILES: FileInfo[] = [
    {
        label: 'SKILL.md',
        filename: 'SKILL.md',
        targetPath: '.cursor/skills/sea-lion-visual-assets/SKILL.md',
        description: 'Cursor Agent Skill 主文件',
        content: SKILL_MD,
    },
    {
        label: 'icon-guide.md',
        filename: 'icon-guide.md',
        targetPath: '.cursor/skills/sea-lion-visual-assets/icon-guide.md',
        description: '图标选择规则与 IconFont API 参考',
        content: ICON_GUIDE_MD,
    },
    {
        label: 'svg-guide.md',
        filename: 'svg-guide.md',
        targetPath: '.cursor/skills/sea-lion-visual-assets/svg-guide.md',
        description: 'SVG 插画风格规范（支持自定义尺寸）',
        content: SVG_GUIDE_MD,
    },
    {
        label: 'fetch-icons.js',
        filename: 'fetch-icons.js',
        targetPath: '.cursor/skills/sea-lion-visual-assets/scripts/fetch-icons.js',
        description: '图标名拉取脚本（支持关键词过滤和自定义图标库地址）',
        content: FETCH_ICONS_JS,
    },
];

const SKILL_DIR_TREE = `业务项目根目录/
└── .cursor/
    └── skills/
        └── sea-lion-visual-assets/
            ├── SKILL.md
            ├── icon-guide.md
            ├── svg-guide.md
            └── scripts/
                └── fetch-icons.js`;

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <button
            onClick={handleCopy}
            style={{
                padding: '4px 12px',
                fontSize: '12px',
                borderRadius: '4px',
                border: '1px solid #d1d5db',
                background: copied ? '#22c55e' : '#f9fafb',
                color: copied ? '#fff' : '#374151',
                cursor: 'pointer',
                transition: 'all 0.15s',
                fontWeight: 500,
                flexShrink: 0,
            }}
        >
            {copied ? '已复制' : '复制内容'}
        </button>
    );
}

function FileCard({ file }: { file: FileInfo }) {
    const inlineCode: React.CSSProperties = {
        background: '#f1f5f9',
        padding: '1px 5px',
        borderRadius: '3px',
        fontSize: '12px',
        fontFamily: 'monospace',
    };

    return (
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '20px', overflow: 'hidden' }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 16px',
                background: '#f8fafc',
                borderBottom: '1px solid #e5e7eb',
                gap: '12px',
            }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                    <span
                        style={{
                            fontWeight: 600,
                            fontSize: '13px',
                            color: '#0f172a',
                            fontFamily: 'monospace',
                            background: '#e2e8f0',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            flexShrink: 0,
                        }}
                    >
                        {file.filename}
                    </span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>{file.description}</span>
                </div>
                <CopyButton text={file.content} />
            </div>
            <div style={{ padding: '10px 16px', background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                    复制后粘贴到业务项目中：<code style={inlineCode}>{file.targetPath}</code>
                </span>
            </div>
            <pre
                style={{
                    margin: 0,
                    padding: '16px',
                    background: '#1e293b',
                    color: '#e2e8f0',
                    fontSize: '12px',
                    lineHeight: '1.6',
                    overflowX: 'auto',
                    maxHeight: '360px',
                    overflowY: 'auto',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                }}
            >
                {file.content}
            </pre>
        </div>
    );
}

function VisualAssetsDocs() {
    const inlineCode: React.CSSProperties = {
        background: '#f1f5f9',
        padding: '1px 6px',
        borderRadius: '3px',
        fontSize: '13px',
        fontFamily: 'monospace',
    };

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px', fontFamily: 'system-ui, sans-serif' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                sea-lion-visual-assets Skill
            </h1>
            <p style={{ color: '#475569', fontSize: '14px', marginBottom: '24px', lineHeight: '1.7' }}>
                供业务项目使用的 Cursor Agent Skill，提供两大能力：
                <strong>图标选择</strong>（从 oss-icon 图标库根据描述选择合适图标）和
                <strong>SVG 插画生成</strong>（根据卡片文字、主题色和自定义尺寸生成几何抽象配图）。
                <br />
                将下方四个文件复制到业务项目的 <code style={inlineCode}>.cursor/skills/sea-lion-visual-assets/</code> 目录即可激活。
            </p>

            <h2 style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', marginBottom: '12px' }}>快速引入</h2>
            <div
                style={{
                    background: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    borderRadius: '8px',
                    padding: '16px 20px',
                    marginBottom: '24px',
                }}
            >
                <div style={{ fontSize: '13px', color: '#166534', lineHeight: '1.7' }}>
                    <p style={{ margin: '0 0 8px 0' }}>在业务项目根目录按以下步骤操作：</p>
                    <ol style={{ margin: 0, paddingLeft: '20px' }}>
                        <li>若不存在，先创建 <code style={inlineCode}>.cursor/skills/</code> 目录；</li>
                        <li>在其中创建 <code style={inlineCode}>sea-lion-visual-assets/</code> 目录，并在其下创建 <code style={inlineCode}>scripts/</code> 子目录；</li>
                        <li>将下方各文件内容分别复制到对应路径。</li>
                    </ol>
                    <p style={{ margin: '12px 0 4px 0' }}>目标目录结构：</p>
                    <pre
                        style={{
                            margin: 0,
                            padding: '12px 16px',
                            background: '#ecfdf5',
                            border: '1px solid #bbf7d0',
                            borderRadius: '6px',
                            fontSize: '12px',
                            lineHeight: '1.5',
                            fontFamily: 'monospace',
                            color: '#166534',
                        }}
                    >
                        {SKILL_DIR_TREE}
                    </pre>
                </div>
            </div>

            <h2 style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>功能说明</h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px',
                    marginBottom: '24px',
                }}
            >
                <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '14px 16px' }}>
                    <div style={{ fontWeight: 600, fontSize: '13px', color: '#1e40af', marginBottom: '6px' }}>图标选择</div>
                    <div style={{ fontSize: '12px', color: '#1e40af', lineHeight: '1.6' }}>
                        描述需要的图标 → Agent 拉取图标列表 → 语义匹配 → 输出 <code style={{ background: '#dbeafe', padding: '1px 4px', borderRadius: '3px' }}>&lt;IconFont&gt;</code> 代码。
                        支持指定业务项目自己的 iconfont 图标库地址。
                    </div>
                </div>
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '14px 16px' }}>
                    <div style={{ fontWeight: 600, fontSize: '13px', color: '#166534', marginBottom: '6px' }}>SVG 插画生成</div>
                    <div style={{ fontSize: '12px', color: '#166534', lineHeight: '1.6' }}>
                        描述卡片内容 + 主题色 + 尺寸 → Agent 识别内容类型 → 按风格规范生成几何抽象 SVG 插画，直接可用。
                    </div>
                </div>
            </div>

            <h2 style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>Skill 文件内容</h2>
            <p style={{ fontSize: '13px', color: '#475569', marginBottom: '16px' }}>
                点击各卡片内「复制内容」后，粘贴到业务项目对应路径下的同名文件中。
            </p>

            {FILES.map((file) => (
                <FileCard key={file.filename} file={file} />
            ))}

            <div
                style={{
                    background: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    borderRadius: '8px',
                    padding: '16px 20px',
                    fontSize: '13px',
                    color: '#1e40af',
                    lineHeight: '1.7',
                }}
            >
                <strong>激活后的使用示例：</strong>
                <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
                    <li>
                        「帮我加一个刷新图标，蓝色，24px」→ Agent 自动选择并输出{' '}
                        <code style={{ background: '#dbeafe', padding: '1px 4px', borderRadius: '3px' }}>
                            {'<IconFont icon="icon-RefreshOutlined" fontSize="24px" color="#1890ff" />'}
                        </code>
                    </li>
                    <li>「给月度销售额卡片生成一张 800×300 的蓝色主题插画 SVG」→ Agent 生成数据统计类 SVG，宽 800 高 300</li>
                    <li>「用我们项目的图标库生成一个用户图标」→ Agent 使用自定义 CSS URL 拉取并匹配</li>
                </ul>
            </div>
        </div>
    );
}

/**
 * sea-lion-visual-assets Skill 使用说明与文件下载页。
 * 将四个文件复制到业务项目的 `.cursor/skills/sea-lion-visual-assets/` 目录后，
 * Cursor Agent 即可根据开发者描述自动选择图标或生成 SVG 卡片插画。
 */
const meta = {
    title: 'Agent/sea-lion-visual-assets',
    component: VisualAssetsDocs,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof VisualAssetsDocs>;

export default meta;
type Story = StoryObj<typeof VisualAssetsDocs>;

export const Overview: Story = {
    name: '使用说明',
    render: () => <VisualAssetsDocs />,
};

/* ─────────────────────────────────────────────
   共用数据 & helpers
───────────────────────────────────────────── */
const ICON_EXAMPLES: Array<{
    icon: string;
    label: string;
    desc: string;
    samplePrompt: string;
    multicolor?: boolean;
}> = [
    {
        icon: 'icon-RefreshOutlined',
        label: '刷新',
        desc: '适用于重试、刷新列表等场景',
        samplePrompt: '列表右上角加一个刷新按钮，用刷新图标，蓝色。',
    },
    {
        icon: 'icon-UserOutlined',
        label: '用户',
        desc: '适用于用户头像、个人中心等',
        samplePrompt: '个人中心入口用用户轮廓图标，单色即可。',
    },
    {
        icon: 'icon-AddUsersOutlined',
        label: '添加成员',
        desc: '适用于邀请、新增用户等',
        samplePrompt: '邀请成员按钮用「添加用户」类图标。',
    },
    {
        icon: 'icon-CompassionOutlined',
        label: '关怀/爱心',
        desc: '适用于情感、推荐、收藏等',
        samplePrompt: '推荐卡片的心形/关怀感图标用这个。',
    },
    {
        icon: 'icon-cuowu1',
        label: '错误/关闭',
        desc: '适用于删除、清除、错误提示等',
        samplePrompt: '弹窗关闭或错误提示用小叉/错误样式图标。',
    },
    {
        icon: 'icon-NewOC_Cross-domain',
        label: '跨域联通',
        desc: '多色，适用于跨系统互联场景',
        multicolor: true,
        samplePrompt: '跨域数据联通功能入口要官方那种多色联通图标。',
    },
    {
        icon: 'icon-huggingfaceColor',
        label: 'HuggingFace',
        desc: '多色，适用于 AI 模型相关场景',
        multicolor: true,
        samplePrompt: '模型仓库外链旁放 HuggingFace 品牌多色图标。',
    },
    {
        icon: 'icon-jushenzhineng',
        label: 'AI 智能',
        desc: '多色，适用于 AI 功能入口等',
        multicolor: true,
        samplePrompt: '智能助手入口用项目里那套 AI 智能多色图标。',
    },
];

const SVG_TYPE_LIST = Object.entries(SVG_EXAMPLES) as Array<[
    keyof typeof SVG_EXAMPLES,
    typeof SVG_EXAMPLES[keyof typeof SVG_EXAMPLES]
]>;

function computeBgColor(hex: string): string {
    try {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const mix = (v: number) => Math.round(v + (255 - v) * 0.88);
        return `#${[mix(r), mix(g), mix(b)].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
    } catch {
        return '#f0f7ff';
    }
}

function buildSvg(
    type: keyof typeof SVG_EXAMPLES,
    primaryColor: string,
    width: string,
    height: string,
): string {
    const example = SVG_EXAMPLES[type];
    const bg = computeBgColor(primaryColor);
    const recolored = recolorSvg(
        example.svg,
        { primaryColor: example.primaryColor, bgColor: example.bgColor },
        { primaryColor, bgColor: bg },
    );
    return recolored
        .replace(/width="400"/, `width="${width}"`)
        .replace(/height="200"/, `height="${height}"`);
}

const examplePromptStyles = {
    wrap: {
        marginBottom: 18,
        padding: '14px 18px',
        borderRadius: 10,
        background: 'linear-gradient(135deg, #e6f4ff 0%, #f5faff 100%)',
        border: '1px solid #91caff',
        borderLeft: '5px solid #1677ff',
    } as React.CSSProperties,
    kickerRow: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    } as React.CSSProperties,
    kicker: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.06em',
        color: '#0958d9',
    } as React.CSSProperties,
    helpTrigger: {
        flexShrink: 0,
        width: 20,
        height: 20,
        padding: 0,
        border: '1px solid #91caff',
        borderRadius: '50%',
        background: '#fff',
        color: '#0958d9',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1,
        cursor: 'help',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
    } as React.CSSProperties,
    quote: {
        fontSize: 15,
        fontWeight: 600,
        color: '#0c4a6e',
        lineHeight: 1.55,
    } as React.CSSProperties,
};

function ExamplePromptCallout({ quote, embedded }: { quote: string; embedded?: boolean }) {
    const body = (
        <>
            <div style={examplePromptStyles.kickerRow}>
                <div style={examplePromptStyles.kicker}>示例 Prompt · 可对 Agent 这样说</div>
                <Tooltip content={EXAMPLE_PROMPT_TOOLTIP} side="top" maxWidth="320px">
                    <button
                        type="button"
                        aria-label="示例 Prompt 说明"
                        style={examplePromptStyles.helpTrigger}
                    >
                        ?
                    </button>
                </Tooltip>
            </div>
            <div style={examplePromptStyles.quote}>「{quote}」</div>
        </>
    );
    if (embedded) {
        return <div>{body}</div>;
    }
    return <div style={examplePromptStyles.wrap}>{body}</div>;
}

/** Prompt 与效果预览同一视觉区块，调节项放在区块下方 */
const promptPreviewBundleStyles = {
    outer: {
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 20,
        background: '#fff',
    } as React.CSSProperties,
    promptBand: {
        padding: '14px 18px',
        background: 'linear-gradient(135deg, #e6f4ff 0%, #f5faff 100%)',
        borderBottom: '1px solid #bae0ff',
    } as React.CSSProperties,
    metaBand: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        alignItems: 'center',
        gap: '8px 12px',
        padding: '10px 18px',
        fontSize: 13,
        color: '#475569',
        background: '#fafbff',
        borderBottom: '1px solid #f0f0f0',
    } as React.CSSProperties,
    controlsSectionLabel: {
        fontSize: 12,
        fontWeight: 600,
        color: '#64748b',
        marginBottom: 10,
        marginTop: 4,
    } as React.CSSProperties,
};

/* ─────────────────────────────────────────────
   Story 1：图标示例（切换查看）
───────────────────────────────────────────── */
const iconPanelStyles = {
    wrap: { maxWidth: 820, margin: '0 auto', padding: '28px 24px', fontFamily: 'system-ui,sans-serif' } as React.CSSProperties,
    h2: { fontSize: 20, fontWeight: 700, color: '#0f172a', marginBottom: 6 } as React.CSSProperties,
    lead: { fontSize: 13, color: '#64748b', marginBottom: 20, lineHeight: 1.6 } as React.CSSProperties,
    layout: { display: 'flex', gap: 20, alignItems: 'flex-start' } as React.CSSProperties,
    listWrap: { width: 180, flexShrink: 0 } as React.CSSProperties,
    detail: {
        flex: 1,
        minWidth: 0,
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: '24px',
        background: '#fafafa',
    } as React.CSSProperties,
    previewBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        padding: '32px',
        background: '#fff',
        borderRadius: 8,
        border: '1px solid #f0f0f0',
        marginBottom: 20,
    } as React.CSSProperties,
    previewInBundle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        padding: '28px 24px',
        background: '#fff',
    } as React.CSSProperties,
    controlRow: { display: 'flex', gap: 16, alignItems: 'flex-end', marginBottom: 16 } as React.CSSProperties,
    label: { fontSize: 12, color: '#64748b', marginBottom: 4, display: 'block' } as React.CSSProperties,
    numInput: {
        width: 72,
        padding: '6px 10px',
        fontSize: 13,
        border: '1px solid #d1d5db',
        borderRadius: 6,
        outline: 'none',
    } as React.CSSProperties,
    pre: {
        margin: 0,
        padding: '12px 16px',
        background: '#1e293b',
        color: '#e2e8f0',
        fontSize: 12,
        lineHeight: 1.6,
        borderRadius: 6,
        overflowX: 'auto' as const,
        whiteSpace: 'pre-wrap' as const,
    },
    codeLabel: { fontSize: 12, color: '#64748b', marginBottom: 6, marginTop: 12 } as React.CSSProperties,
};

function IconExamplesPanel() {
    const [selected, setSelected] = useState(0);
    const [fontSize, setFontSize] = useState('40');
    const [color, setColor] = useState('#1890ff');

    const item = ICON_EXAMPLES[selected];
    const codeSingle = `<IconFont icon="${item.icon}" fontSize="${fontSize}px" color="${color}" />`;
    const codeMulti = `<IconFont icon="${item.icon}" useSymbol style={{ fontSize: ${fontSize} }} />`;

    const listItemStyle = (active: boolean): React.CSSProperties => ({
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 12px',
        borderRadius: 8,
        cursor: 'pointer',
        marginBottom: 4,
        background: active ? '#e6f7ff' : 'transparent',
        border: `1px solid ${active ? '#91d5ff' : 'transparent'}`,
        transition: 'all 0.15s',
    });

    const tagStyle = (multicolor?: boolean): React.CSSProperties => ({
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: 4,
        fontSize: 11,
        fontWeight: 600,
        marginBottom: 12,
        background: multicolor ? '#f9f0ff' : '#e6f7ff',
        color: multicolor ? '#722ed1' : '#0958d9',
    });

    return (
        <Theme>
            <div style={iconPanelStyles.wrap}>
                <h2 style={iconPanelStyles.h2}>图标示例</h2>
                <p style={iconPanelStyles.lead}>
                    点击左侧切换图标；右侧先将 <strong>示例 Prompt</strong> 与 <strong>图标预览</strong> 放在同一卡片内对照，
                    其下再调整颜色、字号并复制 <code>&lt;IconFont&gt;</code> 代码。
                </p>

                <div style={iconPanelStyles.layout}>
                    {/* 左侧列表 */}
                    <div style={iconPanelStyles.listWrap}>
                        {ICON_EXAMPLES.map((ex, i) => (
                            <div
                                key={ex.icon}
                                role="button"
                                tabIndex={0}
                                style={listItemStyle(i === selected)}
                                onClick={() => setSelected(i)}
                                onKeyDown={(e) => e.key === 'Enter' && setSelected(i)}
                            >
                                {ex.multicolor
                                    ? <IconFont icon={ex.icon} useSymbol style={{ fontSize: 20 }} />
                                    : <IconFont icon={ex.icon} style={{ fontSize: 20, color: '#1890ff' }} />
                                }
                                <span style={{ fontSize: 13, color: '#0f172a', fontWeight: i === selected ? 600 : 400 }}>
                                    {ex.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* 右侧详情 */}
                    <div style={iconPanelStyles.detail}>
                        <div style={promptPreviewBundleStyles.outer}>
                            <div style={promptPreviewBundleStyles.promptBand}>
                                <ExamplePromptCallout quote={item.samplePrompt} embedded />
                            </div>
                            <div style={promptPreviewBundleStyles.metaBand}>
                                <span style={{ ...tagStyle(item.multicolor), marginBottom: 0 }}>
                                    {item.multicolor ? '多色 Symbol' : '单色 Font-class'}
                                </span>
                                <span>{item.desc}</span>
                            </div>
                            <div style={iconPanelStyles.previewInBundle}>
                                {item.multicolor
                                    ? <IconFont icon={item.icon} useSymbol style={{ fontSize: Number(fontSize) }} />
                                    : <IconFont icon={item.icon} fontSize={`${fontSize}px`} color={color} />
                                }
                                <span style={{ fontSize: 12, color: '#94a3b8' }}>{item.icon}</span>
                            </div>
                        </div>

                        <div style={promptPreviewBundleStyles.controlsSectionLabel}>外观调整</div>
                        <div style={iconPanelStyles.controlRow}>
                            {!item.multicolor && (
                                <div>
                                    <label style={iconPanelStyles.label}>颜色</label>
                                    <input
                                        type="color"
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                        style={{ width: 44, height: 32, border: '1px solid #e2e8f0', borderRadius: 4, cursor: 'pointer', padding: 2 }}
                                    />
                                </div>
                            )}
                            <div>
                                <label style={iconPanelStyles.label}>字号（px）</label>
                                <input
                                    type="number"
                                    value={fontSize}
                                    min={12}
                                    max={96}
                                    onChange={(e) => setFontSize(e.target.value)}
                                    style={iconPanelStyles.numInput}
                                />
                            </div>
                        </div>

                        {/* 代码 */}
                        {item.multicolor ? (
                            <>
                                <div style={iconPanelStyles.codeLabel}>多色模式代码：</div>
                                <pre style={iconPanelStyles.pre}>{codeMulti}</pre>
                            </>
                        ) : (
                            <>
                                <div style={iconPanelStyles.codeLabel}>单色模式代码：</div>
                                <pre style={iconPanelStyles.pre}>{codeSingle}</pre>
                                <div style={iconPanelStyles.codeLabel}>切换为多色模式：</div>
                                <pre style={iconPanelStyles.pre}>{codeMulti}</pre>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Theme>
    );
}

export const IconExamples: Story = {
    name: '图标示例',
    render: () => <IconExamplesPanel />,
};

/* ─────────────────────────────────────────────
   Story 2：SVG 插画示例（切换查看）
───────────────────────────────────────────── */
const svgPanelStyles = {
    wrap: { maxWidth: 900, margin: '0 auto', padding: '28px 24px', fontFamily: 'system-ui,sans-serif' } as React.CSSProperties,
    h2: { fontSize: 20, fontWeight: 700, color: '#0f172a', marginBottom: 6 } as React.CSSProperties,
    lead: { fontSize: 13, color: '#64748b', marginBottom: 20, lineHeight: 1.6 } as React.CSSProperties,
    layout: { display: 'flex', gap: 20, alignItems: 'flex-start' } as React.CSSProperties,
    listWrap: { width: 148, flexShrink: 0 } as React.CSSProperties,
    detail: {
        flex: 1,
        minWidth: 0,
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: '20px 24px',
        background: '#fafafa',
    } as React.CSSProperties,
    controlRow: {
        display: 'flex',
        gap: 16,
        alignItems: 'flex-end',
        marginBottom: 16,
        flexWrap: 'wrap' as const,
    } as React.CSSProperties,
    label: { fontSize: 12, color: '#64748b', marginBottom: 4, display: 'block' } as React.CSSProperties,
    numInput: {
        width: 72,
        padding: '6px 10px',
        fontSize: 13,
        border: '1px solid #d1d5db',
        borderRadius: 6,
        outline: 'none',
    } as React.CSSProperties,
    previewBox: {
        marginBottom: 16,
        overflow: 'auto',
        borderRadius: 8,
        border: '1px solid #e5e7eb',
        background: '#fff',
    } as React.CSSProperties,
    previewInBundle: {
        overflow: 'auto',
        padding: '16px 20px',
        background: '#fff',
    } as React.CSSProperties,
    pre: {
        margin: 0,
        padding: '12px 16px',
        background: '#1e293b',
        color: '#e2e8f0',
        fontSize: 11,
        lineHeight: 1.6,
        borderRadius: 6,
        maxHeight: 220,
        overflowX: 'auto' as const,
        overflowY: 'auto' as const,
        whiteSpace: 'pre-wrap' as const,
        wordBreak: 'break-all' as const,
    },
};

function SvgExamplesPanel() {
    const [selectedType, setSelectedType] = useState<keyof typeof SVG_EXAMPLES>('analytics');
    const [primaryColor, setPrimaryColor] = useState(SVG_EXAMPLES.analytics.primaryColor);
    const [width, setWidth] = useState('400');
    const [height, setHeight] = useState('200');

    const selectedEx = SVG_EXAMPLES[selectedType];
    const finalSvg = buildSvg(selectedType, primaryColor, width, height);
    const codeSnippet = `<div className="card-illustration">\n  ${finalSvg.replace(/\n/g, '\n  ')}\n</div>`;

    const handleTypeChange = (type: keyof typeof SVG_EXAMPLES) => {
        setSelectedType(type);
        setPrimaryColor(SVG_EXAMPLES[type].primaryColor);
    };

    const listItemStyle = (active: boolean, dotColor: string): React.CSSProperties => ({
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '9px 12px',
        borderRadius: 8,
        cursor: 'pointer',
        marginBottom: 4,
        background: active ? `${dotColor}18` : 'transparent',
        border: `1px solid ${active ? dotColor : 'transparent'}`,
        transition: 'all 0.15s',
    });

    return (
        <Theme>
            <div style={svgPanelStyles.wrap}>
                <h2 style={svgPanelStyles.h2}>SVG 插画示例</h2>
                <p style={svgPanelStyles.lead}>
                    <strong>Prompt → SVG 插画：</strong>
                    左侧选类型后，右侧用一张卡片把 <strong>示例 Prompt</strong> 与 <strong>插画预览</strong> 连在一起；
                    卡片下方再调主题色与尺寸，最下为内联代码。Agent 会按描述中的关键词匹配插画风格。
                </p>

                <div style={svgPanelStyles.layout}>
                    {/* 左侧列表 */}
                    <div style={svgPanelStyles.listWrap}>
                        {SVG_TYPE_LIST.map(([type, ex]) => (
                            <div
                                key={type}
                                role="button"
                                tabIndex={0}
                                style={listItemStyle(type === selectedType, ex.primaryColor)}
                                onClick={() => handleTypeChange(type)}
                                onKeyDown={(e) => e.key === 'Enter' && handleTypeChange(type)}
                            >
                                <span style={{ width: 10, height: 10, borderRadius: '50%', background: ex.primaryColor, flexShrink: 0, display: 'inline-block' }} />
                                <span style={{ fontSize: 13, color: '#0f172a', fontWeight: type === selectedType ? 600 : 400 }}>
                                    {ex.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* 右侧详情 */}
                    <div style={svgPanelStyles.detail}>
                        <div style={promptPreviewBundleStyles.outer}>
                            <div style={promptPreviewBundleStyles.promptBand}>
                                <ExamplePromptCallout quote={selectedEx.samplePrompt} embedded />
                            </div>
                            <div style={promptPreviewBundleStyles.metaBand}>
                                <span style={{ fontWeight: 600, color: '#0f172a' }}>{selectedEx.label}</span>
                                <span style={{ color: '#64748b', fontSize: 12 }}>
                                    匹配参考：
                                    {selectedEx.keywords.slice(0, 6).join('、')}
                                    {selectedEx.keywords.length > 6 ? '…' : ''}
                                </span>
                            </div>
                            <div style={svgPanelStyles.previewInBundle}>
                                {/* eslint-disable-next-line react/no-danger */}
                                <div dangerouslySetInnerHTML={{ __html: finalSvg }} />
                            </div>
                        </div>

                        <div style={promptPreviewBundleStyles.controlsSectionLabel}>外观调整</div>
                        <div style={svgPanelStyles.controlRow}>
                            <div>
                                <label style={svgPanelStyles.label}>主题色</label>
                                <input
                                    type="color"
                                    value={primaryColor}
                                    onChange={(e) => setPrimaryColor(e.target.value)}
                                    style={{ width: 44, height: 32, border: '1px solid #e2e8f0', borderRadius: 4, cursor: 'pointer', padding: 2 }}
                                />
                            </div>
                            <div>
                                <label style={svgPanelStyles.label}>宽度（px）</label>
                                <input
                                    type="number"
                                    value={width}
                                    min={200}
                                    max={1200}
                                    step={10}
                                    onChange={(e) => setWidth(e.target.value)}
                                    style={svgPanelStyles.numInput}
                                />
                            </div>
                            <div>
                                <label style={svgPanelStyles.label}>高度（px）</label>
                                <input
                                    type="number"
                                    value={height}
                                    min={100}
                                    max={600}
                                    step={10}
                                    onChange={(e) => setHeight(e.target.value)}
                                    style={svgPanelStyles.numInput}
                                />
                            </div>
                        </div>

                        {/* 代码 */}
                        <div style={{ fontSize: 12, color: '#64748b', marginBottom: 6 }}>
                            内联代码（{width}×{height}，主色 {primaryColor}）：
                        </div>
                        <pre style={svgPanelStyles.pre}>{codeSnippet}</pre>
                    </div>
                </div>
            </div>
        </Theme>
    );
}

export const SvgExamples: Story = {
    name: 'SVG 插画示例',
    render: () => <SvgExamplesPanel />,
};
