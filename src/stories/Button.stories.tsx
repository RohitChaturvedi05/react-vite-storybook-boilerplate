import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../src/components/Button';
const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
    args: {},
    render: () => {
        return (
            <div>
                <Button $type="primary" $displayStyle="outline">
                    Button
                </Button>
                <Button $type="secondary" $displayStyle="outline">
                    Button
                </Button>
            </div>
        );
    },
};
