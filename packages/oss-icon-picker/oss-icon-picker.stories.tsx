import type { Meta, StoryObj } from '@storybook/react';
import { OssIconPicker } from './oss-icon-picker';

const meta: Meta<typeof OssIconPicker> = {
    component: OssIconPicker,
    title: '总览/Icon Picker',
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof OssIconPicker>;

export const OssIconPickerStory: Story = {
    name: 'Icon Picker',
    render: () => <OssIconPicker />,
};
