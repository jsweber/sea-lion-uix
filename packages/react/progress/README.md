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
<Progress value={60} color="orange" />
<Progress value={60} color="amber" />
```

## 圆角设置

使用 `radius` 属性自定义进度条的圆角样式：

```jsx
<Progress value={60} radius="none" />
<Progress value={60} radius="small" />
<Progress value={60} radius="medium" />
<Progress value={60} radius="large" />
<Progress value={60} radius="full" />
```

## 不确定状态

当不提供 `value` 属性时，Progress 会展示为不确定状态的加载指示器：

```jsx
<Progress />
<Progress color="blue" />
<Progress color="green" />
```

## 自定义动画持续时间

```jsx
<Progress duration="2s" />   {/* 快速 */}
<Progress duration="5s" />   {/* 默认 */}
<Progress duration="10s" />  {/* 缓慢 */}
```

## 高对比度模式

```jsx
<Progress value={60} color="blue" />
<Progress value={60} color="blue" highContrast />
```

## 动态进度条

```jsx
import { useState, useEffect } from "react";
import { Progress } from "@sea-lion/react-progress";

export default () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) { setIsRunning(false); return 100; }
          return prev + 5;
        });
      }, 300);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div>
      <Progress value={progress} />
      <button onClick={() => { setProgress(0); setIsRunning(true); }}>
        开始
      </button>
      <span>{progress}%</span>
    </div>
  );
};
```

## 实用场景

### 文件上传进度

```jsx
<div>
  <Progress value={uploadProgress} color="blue" size="2" />
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <span>正在上传...</span>
    <span>{uploadProgress}%</span>
  </div>
</div>
```

### 加载状态

```jsx
<div>
  <p>正在加载数据，请稍候...</p>
  <Progress color="purple" variant="surface" size="2" />
</div>
```

## 何时使用

- 需要显示任务或操作的完成进度时
- 需要表示加载状态或处理过程时
- 展示文件上传、下载进度时
- 需要给用户提供视觉反馈，表明任务正在进行中时

## 属性

| 参数         | 说明         | 类型                                               | 默认值    |
| ------------ | ------------ | -------------------------------------------------- | --------- |
| size         | 进度条尺寸   | '1' \| '2' \| '3'                                  | '2'       |
| variant      | 变体样式     | 'classic' \| 'surface' \| 'soft'                   | 'surface' |
| color        | 颜色         | 标准颜色值                                         | -         |
| highContrast | 高对比度模式 | boolean                                            | false     |
| radius       | 圆角半径     | 'none' \| 'small' \| 'medium' \| 'large' \| 'full' | -         |
| duration     | 动画持续时间 | `${number}s` \| `${number}ms`                      | '5s'      |
| value        | 当前进度值   | number                                             | -         |
| max          | 最大进度值   | number                                             | 100       |


## 查看更多

参考 [Radix UI 官方文档](https://www.radix-ui.com/themes/docs/components/progress) 获取完整 API 与设计规范。
