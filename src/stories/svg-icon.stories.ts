import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { SvgIcon } from '../components/atoms/svg-icon.ts';
import { icons } from '../config/constants.ts';

const iconNames = Object.keys(icons);

const meta = {
  title: 'Example/SvgIcon',
  tags: ['autodocs'],
  component: "svg-icon",
  argTypes: {
      name: { control: 'select', options: iconNames },
      size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'xxxxl'] },
      color: { control: 'select', options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] },
      rotation: {
        control: { type: 'range', min: 0, max: 360, step: 1 },
        description: 'Rotation angle in degrees',
        defaultValue: 0
      },
      background: { control: 'select', options: ['bg-transparent', 'bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark'] },
      rounded: { control: 'select', options: ['rounded-none', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-3xl', 'rounded-full'] },
      borderColor: { control: 'select', options: ['border-transparent', 'border-border', 'border-primary', 'border-secondary', 'border-success', 'border-danger', 'border-warning', 'border-info', 'border-light', 'border-dark'] },
      borderWidth: { control: 'select', options: ['border-2', 'border-4', 'border-5', 'border-6', 'border-7', 'border-8', 'border-9', 'border-10'] },
      disabled: { control: 'boolean' },
    }
} satisfies Meta<SvgIcon>;

export default meta;

type Story = StoryObj<SvgIcon>;

export const Default: Story = {
  args: {
    name: 'user',
    size: 'md',
    color: 'primary',
 
  },
};


export const WithRounded: Story = {
  args: {
    name: 'user',
    size: 'md',
    color: 'primary',
    title: 'User',
    disabled: false,
    borderColor: 'border-border',
    borderWidth: 'border-2',
    rounded: 'rounded-full',
  },
};

export const WithBorders: Story = {
  args: {
    name: 'user',
    size: 'md',
    color: 'primary',
    borderColor: 'border-primary',
    borderWidth: 'border-4',
    rounded: 'rounded-lg',
  },
};

