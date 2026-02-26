# `react-data-list`

DataList 是一个用于展示键值对列表的组件，通常用于展示属性、配置和详细信息。

## 安装

```sh
pnpm add @sea-lion/react-data-list
# 或者
npm install @sea-lion/react-data-list
yarn add @sea-lion/react-data-list
```

## 使用

在代码中引入组件：

```tsx
import * as DataList from '@sea-lion/react-data-list';
```

### 基本用法

```jsx
<DataList.Root>
  <DataList.Item>
    <DataList.Label>姓名</DataList.Label>
    <DataList.Value>张三</DataList.Value>
  </DataList.Item>
  <DataList.Item>
    <DataList.Label>邮箱</DataList.Label>
    <DataList.Value>zhangsan@example.com</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

支持 `orientation`（horizontal/vertical）、`size` 等属性。

## 何时使用

- 需要以结构化方式展示对象属性或数据字段
- 展示用户资料、产品详情、配置项等信息
- 呈现表单数据的只读视图
- 需要清晰标记标签和对应值的场景

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
