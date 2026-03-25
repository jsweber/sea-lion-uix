# 图标选择细则

## 安装

```bash
pnpm add @sea-lion/react-oss-icon
```

## IconFont 组件 API

```tsx
import { IconFont } from '@sea-lion/react-oss-icon';
```

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `icon` | `string` | 必填 | 图标类名，如 `icon-RefreshOutlined` |
| `ossUrl` | `string` | 内置链接 | `.css` → Font-class 单色；`.js` → Symbol 多色 |
| `useSymbol` | `boolean` | `false` | 不传 ossUrl 时：`true` 多色，`false` 单色 |
| `color` | `string` | `currentColor` | 图标颜色（Font-class 模式有效） |
| `fontSize` | `string` | `1em` | 图标尺寸，如 `"24px"` |
| `style` | `CSSProperties` | — | 内联样式 |
| `className` | `string` | — | 额外类名 |

导出常量（推荐使用变量名，不要硬编码 URL）：

```tsx
import { defaultOssIconCssUrl, defaultOssIconJsUrl } from '@sea-lion/react-oss-icon';
```

## 渲染模式判断

```
需要多色图标？
  ├─ 是 → useSymbol={true}，或 ossUrl 传 .js 地址
  └─ 否 → 默认（Font-class 单色），可用 color 指定颜色
```

## 语义匹配规则

| 用户描述关键词 | 优先匹配模式 |
|----------------|-------------|
| 刷新、重试 | `icon-*Refresh*` |
| 删除、清除 | `icon-*delete*` / `icon-*cuowu*` |
| 搜索、查询 | `icon-*search*` / `icon-*Search*` |
| 设置、配置 | `icon-*setting*` / `icon-*Setting*` |
| 用户、人员 | `icon-*user*` / `icon-*User*` |
| 上传、导入 | `icon-*upload*` / `icon-*Upload*` |
| 下载、导出 | `icon-*download*` / `icon-*Download*` |
| 编辑、修改 | `icon-*edit*` / `icon-*Edit*` |
| 警告、提示 | `icon-*warning*` / `icon-*Warning*` |
| 成功、完成 | `icon-*check*` / `icon-*success*` |
| 关闭、取消 | `icon-*close*` / `icon-*Close*` |
| 首页 | `icon-*home*` / `icon-*Home*` |
| 菜单、列表 | `icon-*menu*` / `icon-*list*` |
| 箭头、方向 | `icon-*arrow*` / `icon-*Arrow*` |

若无精确匹配，从完整列表中选语义最近的一个。

## 获取图标列表

```bash
# 使用业务项目自身 iconfont（推荐）
node .cursor/skills/sea-lion-visual-assets/scripts/fetch-icons.js "" https://at.alicdn.com/t/c/font_你的项目id.css

# 使用 sea-lion 内置图标（默认）
node .cursor/skills/sea-lion-visual-assets/scripts/fetch-icons.js

# 按关键词过滤（内置图标库）
node .cursor/skills/sea-lion-visual-assets/scripts/fetch-icons.js refresh

# 按关键词过滤 + 自定义图标库
node .cursor/skills/sea-lion-visual-assets/scripts/fetch-icons.js refresh https://at.alicdn.com/t/c/font_xxx.css
```

## 代码输出模板

```tsx
import { IconFont } from '@sea-lion/react-oss-icon';

// 单色（最常用）
<IconFont icon="icon-{图标名}" fontSize="24px" />
<IconFont icon="icon-{图标名}" fontSize="24px" color="#1890ff" />
<IconFont icon="icon-{图标名}" style={{ fontSize: 20, color: 'var(--gray-11)' }} />

// 多色
<IconFont icon="icon-{图标名}" useSymbol style={{ fontSize: 28 }} />

// 使用自定义 iconfont 地址
<IconFont icon="icon-{图标名}" ossUrl="//at.alicdn.com/t/c/font_xxx.css" fontSize="24px" />
```

## 已知多色图标（内置图标库）

- `icon-NewOC_Cross-domain`
- `icon-huggingfaceColor`
- `icon-jushenzhineng`
