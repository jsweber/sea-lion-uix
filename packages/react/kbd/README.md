# `react-kbd`

Kbd 是一个用于显示键盘按键或快捷键的组件，适用于教程、帮助文档等场景。

## 安装

```sh
$ yarn add @sea-lion/react-kbd
# 或者
$ npm install @sea-lion/react-kbd
```

## 基本使用

```jsx
import { Kbd } from "@sea-lion/react-kbd";

export default () => (
  <div>
    按下 <Kbd>Tab</Kbd> 键切换焦点，使用 <Kbd>Shift</Kbd> + <Kbd>Tab</Kbd> 反向切换焦点。
  </div>
);
```

## 不同尺寸

Kbd 组件提供了多种尺寸选择（1-9）：

```jsx
<Kbd size="1">Esc</Kbd>
<Kbd size="2">Tab</Kbd>
<Kbd size="3">Shift</Kbd>
<Kbd size="4">Enter</Kbd>
<Kbd size="5">Space</Kbd>
<Kbd size="6">Backspace</Kbd>
<Kbd size="7">Delete</Kbd>
<Kbd size="8">⌘</Kbd>
<Kbd size="9">F11</Kbd>
```

## 组合键

展示键盘组合键：

```jsx
<div>
  保存文件：<Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
</div>

<div>
  复制内容：<Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
</div>

<div>
  粘贴内容：<Kbd>Ctrl</Kbd> + <Kbd>V</Kbd>
</div>

<div>
  全选内容：<Kbd>Ctrl</Kbd> + <Kbd>A</Kbd>
</div>

<div>
  撤销操作：<Kbd>Ctrl</Kbd> + <Kbd>Z</Kbd>
</div>

<div>
  重做操作：<Kbd>Ctrl</Kbd> + <Kbd>Y</Kbd> 或 <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>Z</Kbd>
</div>
```

## 编辑器快捷键面板

```jsx
<div style={{ background: 'var(--gray-2)', padding: '12px', borderRadius: '6px', maxWidth: '400px' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
    <span>保存文件</span>
    <span><Kbd>Ctrl</Kbd> + <Kbd>S</Kbd></span>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
    <span>查找文本</span>
    <span><Kbd>Ctrl</Kbd> + <Kbd>F</Kbd></span>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
    <span>替换文本</span>
    <span><Kbd>Ctrl</Kbd> + <Kbd>H</Kbd></span>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <span>跳转到行</span>
    <span><Kbd>Ctrl</Kbd> + <Kbd>G</Kbd></span>
  </div>
</div>
```

## 游戏控制键示意

```jsx
<div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
    <Kbd>W</Kbd>
    <div style={{ display: 'flex', gap: '4px' }}>
      <Kbd>A</Kbd><Kbd>S</Kbd><Kbd>D</Kbd>
    </div>
  </div>
  <p>使用 WASD 控制角色移动</p>
</div>
```

## 网页浏览快捷键

```jsx
<p>
  按 <Kbd>Tab</Kbd> 在页面元素间导航
</p>

<p>
  按 <Kbd>Space</Kbd> 或 <Kbd>Page Down</Kbd> 滚动页面
</p>

<p>
  按 <Kbd>Home</Kbd> 返回页面顶部，<Kbd>End</Kbd> 到达页面底部
</p>

<p>
  按 <Kbd>Ctrl</Kbd> + <Kbd>+</Kbd> 放大页面，<Kbd>Ctrl</Kbd> + <Kbd>-</Kbd> 缩小页面
</p>

<p>
  按 <Kbd>F11</Kbd> 切换全屏模式
</p>
```

## 何时使用

- 在文档或教程中展示键盘快捷键
- 在应用界面中提示用户可用的键盘操作
- 在帮助页面中展示键盘导航指令
- 构建快捷键参考面板或帮助中心

## 属性

### Kbd

| 参数    | 说明                           | 类型                                                        | 默认值 |
| ------- | ------------------------------ | ----------------------------------------------------------- | ------ |
| size    | 按键尺寸                       | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | -      |
| asChild | 将组件的样式和行为应用于子元素 | boolean                                                     | false  |

Kbd 组件还支持所有标准的外边距属性（如 `m`、`mt`、`mb` 等）。


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/kbd) 获取完整 API 与设计规范。
