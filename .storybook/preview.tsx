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
    options: {
      storySort: {
        order: [
          'Web playground'
        ]
      }
    },
    tags: ['autodocs'],
  },
};

export default preview;
