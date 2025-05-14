import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@sea-lion/react-theme';
// import '@sea-lion/react-button/button.css'

const meta: Meta<typeof Theme> = {
    component: Theme,
    title: '主题/Theme'
};

export default meta;
type Story = StoryObj<typeof Theme>;

export const Primary: Story = {
    args: {
    },
};