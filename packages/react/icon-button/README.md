# `react-icon-button`

IconButton 是一个用于展示图标的按钮组件，提供多种尺寸和样式选项。

## 安装

```sh
$ yarn add @sea-lion/react-icon-button
# 或者
$ npm install @sea-lion/react-icon-button
```

## 基本使用

```jsx
import { IconButton } from "@sea-lion/react-icon-button";

export default () => (
  <>
    <IconButton aria-label="关闭">
      <CloseIcon />
    </IconButton>

    <IconButton variant="solid" color="blue" aria-label="添加">
      <PlusIcon />
    </IconButton>

    <IconButton variant="outline" color="amber" aria-label="收藏">
      <StarIcon />
    </IconButton>

    <IconButton variant="ghost" color="red" aria-label="删除">
      <TrashIcon />
    </IconButton>
  </>
);
```

## 不同变体

IconButton 组件支持多种变体样式：

```jsx
// 实心变体
<IconButton variant="solid" aria-label="实心">
  <Icon />
</IconButton>

// 轮廓变体
<IconButton variant="outline" aria-label="轮廓">
  <Icon />
</IconButton>

// 软变体
<IconButton variant="soft" aria-label="软">
  <Icon />
</IconButton>

// 幽灵变体
<IconButton variant="ghost" aria-label="幽灵">
  <Icon />
</IconButton>
```

## 不同尺寸

IconButton 组件提供不同的尺寸选项：

```jsx
// 小尺寸
<IconButton size="1" aria-label="小">
  <Icon />
</IconButton>

// 中等尺寸（默认）
<IconButton size="2" aria-label="中">
  <Icon />
</IconButton>

// 大尺寸
<IconButton size="3" aria-label="大">
  <Icon />
</IconButton>

// 特大尺寸
<IconButton size="4" aria-label="特大">
  <Icon />
</IconButton>
```

## 自定义颜色和圆角

```jsx
// 自定义颜色
<IconButton color="blue" aria-label="蓝色">
  <Icon />
</IconButton>

<IconButton color="green" aria-label="绿色">
  <Icon />
</IconButton>

// 自定义圆角
<IconButton radius="none" aria-label="无圆角">
  <Icon />
</IconButton>

<IconButton radius="full" aria-label="完全圆形">
  <Icon />
</IconButton>
```

## 属性

### IconButton

| 参数         | 说明                 | 类型                                               | 默认值   | 版本  |
| ------------ | -------------------- | -------------------------------------------------- | -------- | ----- |
| size         | 按钮尺寸             | '1' \| '2' \| '3' \| '4'                           | '2'      | 0.2.0 |
| variant      | 按钮变体样式         | 'solid' \| 'outline' \| 'soft' \| 'ghost'          | 'solid'  | 0.2.0 |
| color        | 按钮颜色             | 'gray' \| 'blue' \| 'green' \| ... (主题色)        | 'gray'   | 0.2.0 |
| radius       | 圆角大小             | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | 'medium' | 0.2.0 |
| highContrast | 是否使用高对比度颜色 | boolean                                            | false    | 0.2.0 |
| disabled     | 是否禁用             | boolean                                            | false    | 0.2.0 |

IconButton 组件继承了标准的按钮属性，如 `onClick`、`onFocus` 等，以及所有标准的 margin 属性（如 `m`、`mt`、`mb` 等）。

## 可访问性

当使用 IconButton 时，总是应该提供 `aria-label` 属性，以确保屏幕阅读器用户能够理解按钮的功能。

```jsx
<IconButton aria-label="关闭对话框">
  <CloseIcon />
</IconButton>
```

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
