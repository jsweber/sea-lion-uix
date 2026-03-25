---
name: sea-lion-visual-assets
description: 为使用 sea-lion-uix 组件库的业务项目提供视觉资源生成能力。1) 根据中文或英文描述从 oss-icon 图标库选择合适图标，生成 <IconFont> 组件代码；2) 根据卡片文字内容、页面主题色和开发者指定尺寸生成几何抽象 SVG 插画。使用时机：工程师说"帮我加个图标"、"需要一个xxx图标"、"给卡片生成插画/SVG/背景图"、"根据主题色生成SVG"时触发。
---

# Sea-Lion 视觉资源生成

两大能力：**图标选择** 和 **SVG 卡片插画生成**。

## 能力一：图标选择

### 步骤

1. **获取图标列表**：运行 `node .cursor/skills/sea-lion-visual-assets/scripts/fetch-icons.js`。
   - 可追加关键词过滤：`node ... fetch-icons.js refresh`
   - 可追加自定义 CSS URL：`node ... fetch-icons.js refresh https://at.alicdn.com/t/c/font_xxx.css`
2. **语义匹配**：从列表中选出最匹配工程师描述的图标名。
3. **判断渲染模式**：单色 → 默认 Font-class；多色 → 传 `useSymbol`。
4. **生成代码**：按 [icon-guide.md](icon-guide.md) 模板输出。

### 快速示例

```tsx
import { IconFont } from '@sea-lion/react-oss-icon';

// 单色
<IconFont icon="icon-RefreshOutlined" fontSize="24px" color="#1890ff" />
// 多色
<IconFont icon="icon-huggingfaceColor" useSymbol style={{ fontSize: 24 }} />
```

---

## 能力二：SVG 卡片插画生成

### 步骤

1. **确认尺寸**：询问或读取工程师指定的宽高（默认 400×200）。
2. **读取上下文**：卡片标题/描述 + 主题色（CSS variable 或具体色值）。
3. **语义分类**：判断内容类型（参见 [svg-guide.md](svg-guide.md)）。
4. **生成 SVG**：按对应类型风格规范生成，不含文字，只用形状传达语义。
5. **嵌入代码**：内联 SVG 或 data URI 方式使用。

### 快速示例

```tsx
// 内联 SVG（宽高由工程师指定）
<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
  {/* Agent 根据主题色、语义和尺寸生成 */}
</svg>
```

---

## 详细参考

- 图标选择细则 → [icon-guide.md](icon-guide.md)
- SVG 风格规范 → [svg-guide.md](svg-guide.md)
- 图标列表脚本 → [scripts/fetch-icons.js](scripts/fetch-icons.js)
