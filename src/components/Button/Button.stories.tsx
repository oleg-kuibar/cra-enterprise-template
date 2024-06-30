import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button.tsx';

const meta = {
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
  args: {
    variant: 'primary',
    size: 'medium',
    type: 'button',
    children: 'Button',
  },
};
