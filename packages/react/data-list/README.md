# `react-data-list`

DataList 是一个用于展示键值对列表的组件，通常用于展示属性、配置和详细信息。

## 安装

```sh
$ yarn add @sea-lion/react-data-list
# 或者
$ npm install @sea-lion/react-data-list
```

## 基本使用

```jsx
import * as DataList from "@sea-lion/react-data-list";

export default () => (
  <DataList.Root>
    <DataList.Item>
      <DataList.Label>姓名</DataList.Label>
      <DataList.Value>张三</DataList.Value>
    </DataList.Item>
    <DataList.Item>
      <DataList.Label>年龄</DataList.Label>
      <DataList.Value>28</DataList.Value>
    </DataList.Item>
    <DataList.Item>
      <DataList.Label>职业</DataList.Label>
      <DataList.Value>软件工程师</DataList.Value>
    </DataList.Item>
  </DataList.Root>
);
```

## 何时使用

- 需要以结构化方式展示对象属性或数据字段
- 展示用户资料、产品详情、配置项等信息
- 呈现表单数据的只读视图
- 需要清晰标记标签和对应值的场景

## 查看更多

查看[文档](https://gitee.com/summer_sleep/ui-lib-monorepo-template)获取更多信息。
