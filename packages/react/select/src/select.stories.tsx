import type { Meta, StoryObj } from '@storybook/react';
import * as Select from '@sea-lion/react-select';
import { Theme } from '@sea-lion/react-theme';

const meta: Meta<typeof Select.Root> = {
    component: Select.Root,
    title: 'Select'
};

export default meta;
type Story = StoryObj<typeof Select.Root>;

export const Primary: Story = {
    args: {
    },
};

export const DefaultSelect = () => {
    return (
        <Theme>
            <Select.Root defaultValue="apple">
                <Select.Trigger />
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Fruits</Select.Label>
                        <Select.Item value="orange">Orange</Select.Item>
                        <Select.Item value="apple">Apple</Select.Item>
                        <Select.Item value="grape" disabled>
                            Grape
                        </Select.Item>
                    </Select.Group>
                    <Select.Separator />
                    <Select.Group>
                        <Select.Label>Vegetables</Select.Label>
                        <Select.Item value="carrot">Carrot</Select.Item>
                        <Select.Item value="potato">Potato</Select.Item>
                    </Select.Group>
                </Select.Content>
            </Select.Root>
        </Theme>

    );
}

DefaultSelect.storyName = 'Select'
