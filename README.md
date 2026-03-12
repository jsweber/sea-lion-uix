[English](README.en-US.md) | 中文

<div align="center">

[![Sea-lion-uix](packages/web-playground/images/logo.svg)](https://github.com/jsweber/sea-lion-uix)

基于 Radix Primitives 的 React 组件库，支持主题与 Headless 双模式。

[📖 文档](https://jsweber.github.io/sea-lion-uix/?path=/story/%E6%80%BB%E8%A7%88-web-playground--app) · [GitHub](https://github.com/jsweber/sea-lion-uix)

</div>

---

## 简介

Sea-lion-uix（以下简称 **x**）是 sea-lion-ui 的下一代版本，基于 [Radix Primitives](https://www.radix-ui.com/primitives) 无样式组件库重构，在原名后增加「x」以区分。x 提供 **49** 个组件，覆盖按钮、表单、布局、反馈、数据展示等场景，每个组件独立发包，按需安装。

## 特性

- **独立组件包**：按需安装与升级，避免与其它组件库混用时的冗余
- **Theme & Headless**：支持带主题样式或无样式 headless 两种模式
- **Theme 面板**：可视化调试品牌色、中性色、深色模式、圆角、字体、阴影等
- **灵活定制**：asChild、Slot、开放 state，基于 Radix 样式体系
- **技术栈友好**：Less + CSS 变量，集成 eslint-config-ali、iconfont

## 安装

x 仅支持按需安装，不提供全量包。

```bash
# 安装单个组件（以 Button 为例）
pnpm add @sea-lion/react-button

# 使用主题样式时需同时安装 Theme
pnpm add @sea-lion/react-theme
```

不安装 Theme 时，组件以 headless 模式运行（无默认样式）。

## 快速开始

```tsx
import { Theme } from '@sea-lion/react-theme';
import { Button } from '@sea-lion/react-button';

export default function App() {
  return (
    <Theme>
      <Button>按钮</Button>
    </Theme>
  );
}
```

更多组件用法见 [文档](https://jsweber.github.io/sea-lion-uix/?path=/story/%E6%80%BB%E8%A7%88-web-playground--app)。

## 开发

### 环境要求

- Node >= 18
- pnpm >= 9

### 安装依赖与启动

```bash
git clone https://github.com/jsweber/sea-lion-uix.git
cd sea-lion-uix
pnpm install
pnpm dev
```

`pnpm dev` 会先构建 Theme 样式，再启动 Storybook（默认 http://localhost:6006）。

### 常用脚本

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 构建 Theme 并启动 Storybook |
| `pnpm build` | 构建所有包与 Theme 样式 |
| `pnpm build-storybook` | 仅构建 Storybook 静态产物 |
| `pnpm publish-stable` | 构建 + changeset + 发布 |

### 文档部署（GitHub Pages）

1. 仓库 **Settings → Pages** 中，**Source** 选择 **GitHub Actions**
2. 推送 `main` 或在 **Actions** 中手动运行「Deploy Storybook to GitHub Pages」
3. 部署完成后访问：`https://<owner>.github.io/sea-lion-uix/`

## 交流

如有疑问或建议，欢迎联系：**dxqweber@gmail.com**。

## License

ISC
