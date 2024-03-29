import type { Meta, StoryObj } from '@storybook/react';

import { Quote } from './index';

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Quote> = {
	title: 'Components/Quote',
	component: Quote,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const Primary: Story = {
	args: {},
};
