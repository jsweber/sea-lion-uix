import * as React from 'react';
import type { Preview } from "@storybook/react";
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
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
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
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
