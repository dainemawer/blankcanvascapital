import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './index';

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Header> = {
	title: 'Components/Header',
	component: Header,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
	args: {},
};
