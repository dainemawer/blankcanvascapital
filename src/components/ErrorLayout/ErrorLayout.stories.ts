import type { Meta, StoryObj } from '@storybook/react';

import { ErrorLayout } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ErrorLayout> = {
	title: 'Components/Divider',
	component: ErrorLayout,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorLayout>;

export const Primary: Story = {
	args: {
		title: 'ErrorLayout',
	},
};
