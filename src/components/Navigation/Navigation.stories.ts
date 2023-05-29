import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Navigation> = {
	title: 'Components/Navigation',
	component: Navigation,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Primary: Story = {
	args: {
		label: 'Navigation',
	},
};
