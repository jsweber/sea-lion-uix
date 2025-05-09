# `react-progress`

Progress 是一个进度指示器组件，用于显示操作完成的进度或加载状态。

## 安装

```sh
$ yarn add @sea-lion/react-progress
# 或者
$ npm install @sea-lion/react-progress
```

## 基本使用

```jsx
import { Progress } from "@sea-lion/react-progress";

export default () => <Progress value={40} />;
```

## 不同尺寸

Progress 组件提供了三种尺寸：

```jsx
<Progress size="1" value={60} />
<Progress size="2" value={60} /> {/* 默认尺寸 */}
<Progress size="3" value={60} />
```

## 不同变体

Progress 组件提供了三种变体样式：

```jsx
<Progress variant="classic" value={60} />
<Progress variant="surface" value={60} /> {/* 默认样式 */}
<Progress variant="soft" value={60} />
```

## 自定义颜色

```jsx
<Progress value={60} color="blue" />
<Progress value={60} color="green" />
<Progress value={60} color="red" />
<Progress value={60} color="purple" />
```

## 不确定状态

当不提供 `value` 属性时，Progress 会展示为不确定状态的加载指示器：

```jsx
<Progress />
```

## 自定义动画持续时间

```jsx
<Progress duration="2s" />
<Progress duration="500ms" />
```

## 高对比度模式

```jsx
<Progress value={60} highContrast />
```

## 属性

| 参数         | 说明         | 类型                                               | 默认值    | 版本  |
| ------------ | ------------ | -------------------------------------------------- | --------- | ----- |
| size         | 进度条尺寸   | '1' \| '2' \| '3'                                  | '2'       | 0.2.0 |
| variant      | 变体样式     | 'classic' \| 'surface' \| 'soft'                   | 'surface' | 0.2.0 |
| color        | 颜色         | 标准颜色                                           | -         | 0.2.0 |
| highContrast | 高对比度模式 | boolean                                            | false     | 0.2.0 |
| radius       | 圆角半径     | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         | 0.2.0 |
| duration     | 动画持续时间 | `${number}s` \| `${number}ms`                      | '5s'      | 0.2.0 |
| value        | 当前进度值   | number                                             | -         | 0.2.0 |
| max          | 最大进度值   | number                                             | 100       | 0.2.0 |

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
