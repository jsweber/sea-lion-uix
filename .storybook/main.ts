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
  stories: ['../packages/react/**/*.stories.tsx', '../packages/web-playground/*.stories.tsx'],
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
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {

    if (!Array.isArray(config.plugins)) {
      config.plugins = [];
    }

    config?.plugins.push(new webpack.ProvidePlugin({
      'React': 'react',
    }));

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
  }
};
export default config;
