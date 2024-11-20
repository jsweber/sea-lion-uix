import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@ui-lib-monorepo-template/react-select';

const meta: Meta<typeof Select> = {
    component: Select,
    title: 'Select'
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
    },
};