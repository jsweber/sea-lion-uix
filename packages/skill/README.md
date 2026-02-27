# Cursor Skills

本目录存放供**业务项目**使用的 Cursor Skill，随仓库通过 git 提交管理。业务方可将需要的 skill 复制到各自项目的 `.cursor/skills/` 下使用。

## 当前包含

| Skill | 说明 |
|-------|------|
| [use-sea-lion-components](./use-sea-lion-components/) | 在业务项目中正确安装、引入和使用 `@sea-lion/react-*` 组件 |

## 使用方式

在业务项目根目录执行（路径按实际情况替换）：

```bash
# 引入「使用 Sea-Lion 组件库」skill
cp -r /path/to/sea-lion-uix/packages/skill/use-sea-lion-components .cursor/skills/
```
