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
    按下 <Kbd>Tab</Kbd> 键切换焦点
  </div>
);
```

## 不同尺寸

Kbd 组件提供了多种尺寸选择：

```jsx
<Kbd size="1">Esc</Kbd>
<Kbd size="2">Ctrl</Kbd>
<Kbd size="3">Alt</Kbd>
<Kbd size="4">Shift</Kbd>
<Kbd size="5">Enter</Kbd>
<Kbd size="6">Tab</Kbd>
<Kbd size="7">⌘</Kbd>
<Kbd size="8">↓</Kbd>
<Kbd size="9">F1</Kbd>
```

## 组合使用

展示组合键：

```jsx
<div>
  保存：<Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
</div>

<div>
  复制：<Kbd>⌘</Kbd> + <Kbd>C</Kbd>
</div>

<div>
  粘贴：<Kbd>⌘</Kbd> + <Kbd>V</Kbd>
</div>
```

## 与其他组件结合

```jsx
<p>
  按下 <Kbd>Esc</Kbd> 键退出全屏模式
</p>

<div>
  使用 <Kbd>↑</Kbd> <Kbd>↓</Kbd> <Kbd>←</Kbd> <Kbd>→</Kbd> 控制角色移动
</div>
```

## 属性

### Kbd

| 参数    | 说明                           | 类型                                                        | 默认值 | 版本  |
| ------- | ------------------------------ | ----------------------------------------------------------- | ------ | ----- |
| size    | 按键尺寸                       | '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9' | -      | 0.2.0 |
| asChild | 将组件的样式和行为应用于子元素 | boolean                                                     | false  | 0.2.0 |

Kbd 组件还支持所有标准的外边距属性（如 `m`、`mt`、`mb` 等）。

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
