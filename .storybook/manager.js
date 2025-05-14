import { addons } from '@storybook/manager-api';

addons.setConfig({
  sidebar: {
    collapsedRoots: [], // 保持所有根节点展开
    renderLabel: (item) => {
      return item.name; // 默认标签渲染
    },
  },
}); 