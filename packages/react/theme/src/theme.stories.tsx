import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@ui-lib-monorepo-template/react-theme';
// import '@ui-lib-monorepo-template/react-button/button.css'

const meta: Meta<typeof Theme> = {
    component: Theme,
    title: 'Theme'
};

export default meta;
type Story = StoryObj<typeof Theme>;

export const Primary: Story = {
    args: {
    },
};