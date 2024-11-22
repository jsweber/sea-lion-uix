import type { Meta, StoryObj } from '@storybook/react';
import { Root } from '@sea-lion/react-select';

const meta: Meta<typeof Root> = {
    component: Root,
    title: 'Select'
};

export default meta;
type Story = StoryObj<typeof Root>;
Root
export const Primary: Story = {
    args: {
    },
};