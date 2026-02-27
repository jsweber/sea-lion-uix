# `react-oss-icon`

OssIcon (IconFont) 是基于 [iconfont 平台](https://www.iconfont.cn/) 的图标组件，支持通过 **Font-class**（.css）或 **Symbol**（.js）资源地址加载图标。

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
import { IconFont } from '@sea-lion/react-oss-icon';
```

### 基本用法

```jsx
<IconFont ossUrl="//at.alicdn.com/t/c/font_xxx.css" icon="icon-xxx" />
<IconFont ossUrl={cssUrl} icon="icon-name" size="2" color="blue" />
```

### 与 iconfont 平台对接

- **Font-class 引用**：`ossUrl` 传入项目生成的 **.css** 链接，使用方式为 `<IconFont icon="icon-图标名" />`。
- **Symbol 引用**：`ossUrl` 传入项目生成的 **.js** 链接，组件会动态注入脚本。
- 支持协议相对地址（`//...`），会自动补全为 `https:`。

## 何时使用

- 需要使用团队 iconfont 项目中的图标时
- 需要与现有 iconfont 图标体系保持一致时
- 需要轻量、可配置颜色与尺寸的图标展示时

