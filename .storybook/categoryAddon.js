// 创建分类插件
export const decorators = [];

export const parameters = {
  options: {
    storySort: (a, b) => {
      const categories = window.STORYBOOK_CATEGORIES || {};
      
      // 获取每个故事所属的类别
      function getCategory(storyPath) {
        const path = storyPath.title.toLowerCase();
        
        for (const [category, patterns] of Object.entries(categories)) {
          for (const pattern of patterns) {
            if (pattern === '*') continue; // 跳过通配符
            if (path.includes(pattern.toLowerCase())) {
              return category;
            }
          }
        }
        return '其他'; // 默认分类
      }
      
      const aCategory = getCategory(a);
      const bCategory = getCategory(b);
      
      // 类别排序
      const categoryOrder = Object.keys(categories);
      const aCategoryIndex = categoryOrder.indexOf(aCategory);
      const bCategoryIndex = categoryOrder.indexOf(bCategory);
      
      // 如果类别不同，按类别排序
      if (aCategoryIndex !== bCategoryIndex) {
        return aCategoryIndex - bCategoryIndex;
      }
      
      // 同类别按标题排序
      return a.title.localeCompare(b.title);
    }
  }
}; 