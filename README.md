# Sea-lion-uix

Sea-lion-uix 是 sea-lion-ui 的下一代版本，基于 [Radix Primitives](https://www.radix-ui.com/primitives) 无样式组件库重构，新版本在原名后增加「x」，以下简称 **x**。

## 特性

- **独立组件包**：每个组件单独发包，按需安装，避免与其它组件库混用时的冗余代码，支持单独升级与发布。
- **Theme & Headless**：支持带主题样式与 headless 两种使用模式，可按项目需求选择。
- **Theme 面板**：提供主题调色面板，可调试品牌色、中性色、深色模式、圆角、缩放、字体、阴影等。
- **组件使用灵活**：基于 Radix 的样式系统与无头组件思路，提供 asChild、Slot 等能力，并开放 state，便于定制。
- **符合团队技术栈**：使用 Less + CSS 自定义属性构建样式系统，集成 eslint-config-ali、iconfont 等。

## 组件规模

组件数量由一代的 19 个增至 **49** 个，覆盖按钮、表单、布局、反馈、数据展示等场景。

## 安装

x 不支持全量安装，仅支持按需安装。例如安装 Button：

```bash
pnpm add @sea-lion/react-button
```

使用带主题样式时，需同时安装 Theme：

```bash
pnpm add @sea-lion/react-theme
```

不安装 Theme 时，组件以 headless 模式使用（无默认样式）。

## 开发

### 环境要求

- Node >= 18
- pnpm >= 9

### 安装依赖

项目使用 pnpm 管理依赖，请勿使用 npm/yarn。

```bash
git clone <repository-url>
cd sea-lion-uix
pnpm install
```

### 本地开发

```bash
pnpm dev
```

将启动 Storybook（默认端口 6006）。若修改了 Theme 组件样式，需重新执行该命令以生效。

### 构建

```bash
pnpm build
```

### 发布

```bash
pnpm publish-stable
```

### 文档站点（GitHub Pages）

Storybook 支持通过 GitHub Actions 自动构建并发布到 GitHub Pages，便于在线浏览组件文档。

1. **开启 GitHub Pages**  
   仓库 **Settings → Pages → Build and deployment** 中，**Source** 选择 **GitHub Actions**。

2. **触发部署**  
   推送代码到 `main` 分支或手动在 **Actions** 页执行 workflow「Deploy Storybook to GitHub Pages」。构建产物会发布到 Pages。

3. **访问地址**  
   发布完成后，文档地址为：`https://<owner>.github.io/<repo>/`（例如 `https://yourname.github.io/sea-lion-uix/`）。

构建时通过环境变量 `STORYBOOK_BASE_PATH` 设置子路径（如 `/sea-lion-uix/`），本地 `pnpm run build-storybook` 不设置该变量，产出适合本地或根路径部署。

## 交流

如有疑问或建议，欢迎联系：**dxqweber@gmail.com**。

## License

ISC
