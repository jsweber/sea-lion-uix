# SVG 卡片插画生成规范

## 尺寸处理

**优先询问工程师**指定宽高；未指定时使用默认值 `width=400, height=200`。

在所有 SVG 模板中，将 `{W}` 替换为实际宽度，`{H}` 替换为实际高度，viewBox 同步调整为 `0 0 {W} {H}`。

```svg
<svg width="{W}" height="{H}" viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">
```

布局比例按 `{W}×{H}` 等比缩放各形状坐标，不要把坐标写死为 400×200 的绝对像素值。

## 颜色变量

| 占位符 | 含义 | 来源 |
|--------|------|------|
| `{primaryColor}` | 主题主色 | 工程师提供，或读取 CSS variable |
| `{bgColor}` | 背景色 | 主色的极浅变体，如 `#f0f7ff` |
| `{accentColor}` | 强调色 | 主色的深色版本或互补色 |

未指定时默认：`primaryColor=#1890ff`，`bgColor=#f0f7ff`。

## 内容类型分类与视觉策略

### 1. 数据统计 / 分析类

关键词：数据、统计、报表、图表、分析、sales、analytics、report

策略：矩形模拟柱状图 + 折线 + 圆形装饰。各形状坐标按 `{W}×{H}` 比例计算（柱图底边在 `0.9{H}`，顶端在 `0.3{H}~0.6{H}` 之间随机）。

```svg
<svg width="{W}" height="{H}" viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="{W}" height="{H}" fill="{bgColor}" rx="12"/>
  <!-- 柱状图：x 位置约为 0.1{W}~0.65{W}，宽约 0.075{W} -->
  <rect x="0.10{W}" y="0.60{H}" width="0.075{W}" height="0.30{H}" fill="{primaryColor}" opacity="0.9" rx="3"/>
  <rect x="0.22{W}" y="0.45{H}" width="0.075{W}" height="0.45{H}" fill="{primaryColor}" opacity="0.7" rx="3"/>
  <rect x="0.35{W}" y="0.30{H}" width="0.075{W}" height="0.60{H}" fill="{primaryColor}" opacity="0.9" rx="3"/>
  <rect x="0.48{W}" y="0.50{H}" width="0.075{W}" height="0.40{H}" fill="{primaryColor}" opacity="0.6" rx="3"/>
  <rect x="0.60{W}" y="0.35{H}" width="0.075{W}" height="0.55{H}" fill="{primaryColor}" opacity="0.8" rx="3"/>
  <!-- 折线 -->
  <polyline points="0.14{W},0.60{H} 0.26{W},0.45{H} 0.39{W},0.30{H} 0.52{W},0.50{H} 0.64{W},0.35{H}"
    fill="none" stroke="{accentColor}" stroke-width="2.5" stroke-linecap="round"/>
  <!-- 装饰圆 -->
  <circle cx="0.85{W}" cy="0.30{H}" r="0.125{W}" fill="{primaryColor}" opacity="0.1"/>
</svg>
```

---

### 2. 用户 / 人员 / 社区类

关键词：用户、成员、团队、社区、user、team、member

策略：圆形头像 + 椭圆身体 + 背景光圈，可排列 2~3 个人物。

```svg
<svg width="{W}" height="{H}" viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="{W}" height="{H}" fill="{bgColor}" rx="12"/>
  <!-- 人物一 -->
  <circle cx="0.30{W}" cy="0.45{H}" r="0.10{W}" fill="{primaryColor}" opacity="0.15"/>
  <circle cx="0.30{W}" cy="0.36{H}" r="0.045{W}" fill="{primaryColor}" opacity="0.6"/>
  <ellipse cx="0.30{W}" cy="0.60{H}" rx="0.07{W}" ry="0.08{H}" fill="{primaryColor}" opacity="0.4"/>
  <!-- 人物二 -->
  <circle cx="0.50{W}" cy="0.45{H}" r="0.10{W}" fill="{primaryColor}" opacity="0.10"/>
  <circle cx="0.50{W}" cy="0.36{H}" rx="0.045{W}" fill="{primaryColor}" opacity="0.4"/>
  <ellipse cx="0.50{W}" cy="0.60{H}" rx="0.07{W}" ry="0.08{H}" fill="{primaryColor}" opacity="0.3"/>
  <!-- 背景装饰 -->
  <circle cx="0.85{W}" cy="0.80{H}" r="0.20{W}" fill="{primaryColor}" opacity="0.07"/>
</svg>
```

---

### 3. 功能 / 工具 / 设置类

关键词：功能、工具、设置、配置、系统、function、tool、setting

策略：节点连线网络图 + 六边形装饰。

```svg
<svg width="{W}" height="{H}" viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="{W}" height="{H}" fill="{bgColor}" rx="12"/>
  <line x1="0.20{W}" y1="0.50{H}" x2="0.50{W}" y2="0.30{H}" stroke="{primaryColor}" stroke-width="1.5" opacity="0.4"/>
  <line x1="0.50{W}" y1="0.30{H}" x2="0.80{W}" y2="0.50{H}" stroke="{primaryColor}" stroke-width="1.5" opacity="0.4"/>
  <line x1="0.20{W}" y1="0.50{H}" x2="0.50{W}" y2="0.70{H}" stroke="{primaryColor}" stroke-width="1.5" opacity="0.4"/>
  <line x1="0.50{W}" y1="0.70{H}" x2="0.80{W}" y2="0.50{H}" stroke="{primaryColor}" stroke-width="1.5" opacity="0.4"/>
  <circle cx="0.20{W}" cy="0.50{H}" r="0.04{W}" fill="{primaryColor}" opacity="0.8"/>
  <circle cx="0.50{W}" cy="0.30{H}" r="0.05{W}" fill="{primaryColor}" opacity="0.9"/>
  <circle cx="0.80{W}" cy="0.50{H}" r="0.04{W}" fill="{primaryColor}" opacity="0.7"/>
  <circle cx="0.50{W}" cy="0.70{H}" r="0.03{W}" fill="{primaryColor}" opacity="0.6"/>
  <!-- 六边形 -->
  <polygon points="0.87{W},0.15{H} 0.92{W},0.10{H} 0.97{W},0.15{H} 0.97{W},0.25{H} 0.92{W},0.30{H} 0.87{W},0.25{H}"
    fill="none" stroke="{primaryColor}" stroke-width="1.5" opacity="0.3"/>
</svg>
```

---

### 4. 警告 / 状态 / 通知类

关键词：警告、提示、通知、状态、错误、alert、warning、notification

策略：三角形警示 + 感叹号。

```svg
<svg width="{W}" height="{H}" viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="{W}" height="{H}" fill="{bgColor}" rx="12"/>
  <polygon points="0.40{W},0.20{H} 0.65{W},0.80{H} 0.15{W},0.80{H}" fill="{primaryColor}" opacity="0.15"/>
  <polygon points="0.40{W},0.30{H} 0.60{W},0.75{H} 0.20{W},0.75{H}" fill="none" stroke="{primaryColor}" stroke-width="2" opacity="0.6"/>
  <rect x="0.385{W}" y="0.45{H}" width="0.025{W}" height="0.175{H}" fill="{primaryColor}" opacity="0.8" rx="2"/>
  <circle cx="0.40{W}" cy="0.70{H}" r="0.015{W}" fill="{primaryColor}" opacity="0.8"/>
  <circle cx="0.85{W}" cy="0.25{H}" r="0.10{W}" fill="{primaryColor}" opacity="0.08"/>
</svg>
```

---

### 5. 成功 / 完成 / 结果类

关键词：成功、完成、结果、done、success、complete

策略：同心圆 + 勾选路径。

```svg
<svg width="{W}" height="{H}" viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="{W}" height="{H}" fill="{bgColor}" rx="12"/>
  <circle cx="0.45{W}" cy="0.50{H}" r="0.20{W}" fill="{primaryColor}" opacity="0.05"/>
  <circle cx="0.45{W}" cy="0.50{H}" r="0.15{W}" fill="{primaryColor}" opacity="0.08"/>
  <circle cx="0.45{W}" cy="0.50{H}" r="0.11{W}" fill="{primaryColor}" opacity="0.15"/>
  <circle cx="0.45{W}" cy="0.50{H}" r="0.095{W}" fill="none" stroke="{primaryColor}" stroke-width="3" opacity="0.7"/>
  <polyline points="0.40{W},0.50{H} 0.43{W},0.58{H} 0.51{W},0.42{H}"
    fill="none" stroke="{primaryColor}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <circle cx="0.80{W}" cy="0.30{H}" r="0.075{W}" fill="{primaryColor}" opacity="0.07"/>
</svg>
```

---

### 6. 内容 / 文档 / 知识类

关键词：文档、文章、内容、知识、报告、笔记、document、content、article

策略：矩形卡片叠加 + 横线文字行。

```svg
<svg width="{W}" height="{H}" viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="{W}" height="{H}" fill="{bgColor}" rx="12"/>
  <!-- 后层卡片 -->
  <rect x="0.275{W}" y="0.25{H}" width="0.40{W}" height="0.55{H}" fill="{primaryColor}" opacity="0.10" rx="5"/>
  <!-- 主卡片 -->
  <rect x="0.20{W}" y="0.20{H}" width="0.40{W}" height="0.55{H}" fill="white" opacity="0.9" rx="5"/>
  <rect x="0.20{W}" y="0.20{H}" width="0.40{W}" height="0.55{H}" fill="none" stroke="{primaryColor}" stroke-width="1.5" opacity="0.3" rx="5"/>
  <!-- 文字行 -->
  <line x1="0.25{W}" y1="0.34{H}" x2="0.55{W}" y2="0.34{H}" stroke="{primaryColor}" stroke-width="2" opacity="0.5" stroke-linecap="round"/>
  <line x1="0.25{W}" y1="0.43{H}" x2="0.52{W}" y2="0.43{H}" stroke="{primaryColor}" stroke-width="2" opacity="0.35" stroke-linecap="round"/>
  <line x1="0.25{W}" y1="0.51{H}" x2="0.50{W}" y2="0.51{H}" stroke="{primaryColor}" stroke-width="2" opacity="0.35" stroke-linecap="round"/>
  <line x1="0.25{W}" y1="0.60{H}" x2="0.45{W}" y2="0.60{H}" stroke="{primaryColor}" stroke-width="2" opacity="0.25" stroke-linecap="round"/>
  <!-- 折角 -->
  <polygon points="0.55{W},0.20{H} 0.60{W},0.20{H} 0.60{W},0.30{H}" fill="{primaryColor}" opacity="0.3"/>
  <circle cx="0.82{W}" cy="0.60{H}" r="0.125{W}" fill="{primaryColor}" opacity="0.07"/>
</svg>
```

---

## 嵌入方式

### 内联 SVG（推荐）

```tsx
<div className="card-illustration">
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
    {/* SVG 内容 */}
  </svg>
</div>
```

### 数据 URI（img 标签）

```tsx
const svgContent = `<svg ...>...</svg>`;
const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;
<img src={dataUri} width={width} height={height} alt="card illustration" />
```
