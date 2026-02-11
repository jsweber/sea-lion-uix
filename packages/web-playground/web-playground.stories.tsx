import type { Meta, StoryObj } from '@storybook/react';
import { WebPlayground } from './web-playground';

const meta: Meta<typeof WebPlayground> = {
    component: WebPlayground,
    title: '总览/Web playground',
};

export default meta;

type Story = StoryObj<typeof WebPlayground>;

export const App: Story = {
    name: 'Web playground',
    args: {
        mode: 'development',
    },
    render: (props) => {
        return (
            <WebPlayground {...props} />
        );
    },
}

