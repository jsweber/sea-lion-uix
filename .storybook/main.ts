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
  managerHead: (head) => `
    ${head}
    <link rel="icon" type="image/svg+xml" href="/images/favicon.jpg" />
    <script>
      window.STORYBOOK_CATEGORIES = {
        '总览': ['web-playground', 'oss-icon-picker'],
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
  `,
  previewAnnotations: (entry = []) => {
    return [
      ...entry,
      require.resolve('./categoryAddon.js'),
    ];
  },
};
export default config;
