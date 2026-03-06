import type { Preview } from "@storybook/react";
import './style.css';
import '@sea-lion/react-theme-style/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    sidebar: {
      showRoots: true,
      expanded: true,
    },
    options: {
      storySort: {
        order: [
          '总览',
          'Agent',
          'Icon',
          '主题',
          '通用',
          '布局',
          '排版',
          '导航',
          '数据录入',
          '数据展示',
          '反馈',
          '其他',
          '实验',
        ],
      },
    },
    tags: ['autodocs'],
  },
};

export default preview;
