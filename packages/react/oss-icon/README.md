# `react-oss-icon`

OssIcon (IconFont) 是基于 [iconfont 平台](https://www.iconfont.cn/) 的图标组件，支持通过 **Font-class**（.css）或 **Symbol**（.js）资源地址加载图标；不传资源地址时使用内置默认链接，可通过 `useSymbol` 在单色与多色模式间切换。

## 安装

```sh
pnpm add @sea-lion/react-oss-icon
# 或者
npm install @sea-lion/react-oss-icon
yarn add @sea-lion/react-oss-icon
```

## 使用

在代码中引入组件：

```tsx
import { IconFont, defaultOssIconCssUrl, defaultOssIconJsUrl } from '@sea-lion/react-oss-icon';
```

### 基本用法（内置链接）

不传 `ossUrl` 时使用内置 Font-class（单色）或 Symbol（多色），由 `useSymbol` 控制，默认 `useSymbol: false` 即单色：

```jsx
// 单色（Font-class，默认）
<IconFont icon="icon-xxx" />
<IconFont icon="icon-xxx" color="#1890ff" fontSize="24px" />

// 多色（Symbol）
<IconFont icon="icon-guanjianzhen" useSymbol style={{ fontSize: 28 }} />
```

### 自定义资源地址

传入 `ossUrl` 时，组件按链接类型自动判断渲染方式：`.js` 为 Symbol 多色，`.css` 为 Font-class 单色；此时 `useSymbol` 不参与判断。

```jsx
<IconFont ossUrl="//at.alicdn.com/t/c/font_xxx.css" icon="icon-xxx" />
<IconFont ossUrl="//at.alicdn.com/t/c/font_xxx.js" icon="icon-xxx" />
```

### 与 iconfont 平台对接

- **内置链接**：不传 `ossUrl` 时使用 `defaultOssIconCssUrl`（Font-class）或 `defaultOssIconJsUrl`（Symbol），由 **useSymbol** 切换，默认 `false` 即 Font-class。
- **Font-class**：单色图标，可设置 `color`、`fontSize`，用法 `<IconFont icon="icon-图标名" />`。
- **Symbol**：多色图标，组件内部用 SVG `<use>` 渲染，保留图标原有配色；用法 `<IconFont icon="icon-图标名" useSymbol />`。
- **自定义 ossUrl**：传了 `ossUrl` 后按链接后缀自动判断（.js → Symbol，否则 → Font-class）。
- 支持协议相对地址（`//...`），会自动补全为 `https:`。

## API

| 属性       | 类型      | 默认值  | 说明 |
|------------|-----------|---------|------|
| icon       | string    | —       | 图标名，如 `icon-xxx` |
| ossUrl     | string    | 见下文  | 资源地址；不传时用内置链接，由 useSymbol 决定 |
| useSymbol  | boolean   | false   | 是否用 Symbol 多色渲染；仅在不传 ossUrl 时生效 |
| color      | string    | currentColor | 图标颜色（Font-class 模式） |
| fontSize   | string    | 1em     | 图标尺寸 |
| style      | CSSProperties | —   | 内联样式 |
| className  | string    | —       | 类名 |

导出的常量：

- `defaultOssIconCssUrl`：内置 Font-class 资源（.css）
- `defaultOssIconJsUrl`：内置 Symbol 资源（.js）
- `defaultOssIconUrl`：已废弃，等同于 `defaultOssIconCssUrl`，保留兼容
- `isSymbolOssUrl(url)`：判断 URL 是否为 Symbol（.js）资源

## 何时使用

- 需要使用团队 iconfont 项目中的图标时
- 需要与现有 iconfont 图标体系保持一致时
- 需要轻量、可配置颜色与尺寸的图标展示时
- 需要展示多色图标时，使用 `useSymbol` 或传入 .js 的 `ossUrl`
