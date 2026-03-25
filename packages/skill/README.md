# Cursor Skills

本目录存放供**业务项目**使用的 Cursor Skill，随仓库通过 git 提交管理。业务方可将需要的 skill 复制到各自项目的 `.cursor/skills/` 下使用。

## 当前包含

| Skill | 说明 | Storybook 文档 |
|-------|------|---------------|
| [use-sea-lion-components](./use-sea-lion-components/) | 在业务项目中正确安装、引入和使用 `@sea-lion/react-*` 组件 | Agent/use-sea-lion-components |
| [sea-lion-visual-assets](./sea-lion-visual-assets/) | 根据描述选择 oss-icon 图标并生成 `<IconFont>` 代码；根据卡片内容、主题色和自定义尺寸生成 SVG 卡片插画 | Agent/sea-lion-visual-assets |

## 使用方式

**引入「使用 Sea-Lion 组件库」skill**：将 `packages/skill/use-sea-lion-components` 目录复制到业务项目的 `.cursor/skills/` 下。

**引入「视觉资源生成」skill**：将 `packages/skill/sea-lion-visual-assets` 目录（含 `scripts/` 子目录）完整复制到业务项目的 `.cursor/skills/` 下。也可在 Storybook 的 `Agent/sea-lion-visual-assets` 页面逐文件复制内容。

## 知识库文档

- **[KNOWLEDGE_BASE_zh.md](./KNOWLEDGE_BASE_zh.md)**：所有组件中文 readme 合并，组件之间以 `----- split line -----` 分隔。
- **[KNOWLEDGE_BASE_en.md](./KNOWLEDGE_BASE_en.md)**：英文版，结构相同。

**下载方式**：在仓库中**点击上方链接**打开文件后，使用页面的 **Raw** 或 **Download** 保存到本地，即可用于向量库、RAG 或本地检索。
