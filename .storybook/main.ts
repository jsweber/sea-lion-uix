import type { StorybookConfig } from "@storybook/react-webpack5";
import webpack from 'webpack';
import { join, dirname, resolve } from "path";

function convertTsConfigPathsToWebpackAliases() {
  const rootDir = resolve(__dirname, '../');
  const tsconfig = require('../tsconfig.json');
  const tsconfigPaths: Array<string | string[]> = Object.entries(tsconfig.compilerOptions.paths);

  return tsconfigPaths.reduce((aliases, [realPath, mappedPath]) => {
    aliases[realPath] = join(rootDir, mappedPath[0]);
    return aliases;
  }, {});
}

const config: StorybookConfig = {
  stories: ['../packages/react/**/*.stories.tsx', '../packages/web-playground/*.stories.tsx', '../packages/oss-icon-picker/*.stories.tsx', '../packages/skill/**/*.stories.tsx'],
  staticDirs: [
    { from: '../packages/web-playground/images', to: '/images' },
    { from: '../packages/skill', to: '/skill' },
  ],
  docs: {
    //👇 See the table below for the list of supported options
    defaultName: 'Documentation',
  },
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling',
      options: {
        // less 支持
        less: {
          implementation: require('less'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    // 子路径部署（如 GitHub Pages）：用相对路径使 manager 与 iframe 的 chunk 都能正确加载
    const basePath = process.env.STORYBOOK_BASE_PATH;
    if (basePath && config.output) {
      config.output = { ...config.output, publicPath: './' };
    }

    if (!Array.isArray(config.plugins)) {
      config.plugins = [];
    }

    config?.plugins.push(new webpack.ProvidePlugin({
      'React': 'react',
    }));

    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          ...convertTsConfigPathsToWebpackAliases()
        }
      }
    };
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  /** GA4 测量 ID，用于统计 Storybook 文档/示例的浏览（manager 壳层 + SPA 路由） */
  managerHead: (head) => {
    const base = process.env.STORYBOOK_BASE_PATH ? './' : '';
    const gaMeasurementId = 'G-FC1RYBDE30';
    return `
    ${head}
    <link rel="icon" type="image/svg+xml" href="${base}images/favicon.jpg" />
    <!-- Google tag (gtag.js) - 文档站点浏览统计 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaMeasurementId}');
      (function () {
        var gaId = '${gaMeasurementId}';
        var lastPath = location.pathname + location.search + location.hash;
        function sendPageViewIfChanged() {
          var path = location.pathname + location.search + location.hash;
          if (path === lastPath) return;
          lastPath = path;
          if (typeof gtag === 'function') {
            gtag('config', gaId, {
              page_path: path,
              page_title: document.title || undefined,
            });
          }
        }
        var _pushState = history.pushState;
        history.pushState = function () {
          _pushState.apply(history, arguments);
          setTimeout(sendPageViewIfChanged, 0);
        };
        window.addEventListener('popstate', function () {
          setTimeout(sendPageViewIfChanged, 0);
        });
        window.addEventListener('hashchange', function () {
          setTimeout(sendPageViewIfChanged, 0);
        });
      })();
    </script>
    <script>
      window.STORYBOOK_CATEGORIES = {
        '总览': ['web-playground'],
        'Agent': ['agent', 'skill', 'use-sea-lion'],
        'Icon': ['icon', 'oss-icon-picker'],
        '主题': ['theme'],
        '布局': ['flex', 'container', 'grid', 'aspect-ratio'],
        '排版': ['text', 'heading', 'blockquote', 'code'],
        '导航': ['tabs', 'menu', 'breadcrumbs'],
        '数据录入': ['text-area', 'input', 'checkbox', 'checkbox-cards', 'select', 'radio-group', 'switch'],
        '数据展示': ['avatar', 'badge', 'table', 'slider'],
        '反馈': ['alert-dialog', 'dialog', 'popover', 'toast', 'tooltip'],
        '其他': ['*']
      };
    </script>
  `;
  },
  previewAnnotations: (entry = []) => {
    return [
      ...entry,
      require.resolve('./categoryAddon.js'),
    ];
  },
};
export default config;
