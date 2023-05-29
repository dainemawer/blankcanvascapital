import type { Meta, StoryObj } from '@storybook/react';

import { EyeBrow } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof EyeBrow> = {
	title: 'Components/EyeBrow',
	component: EyeBrow,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {
			control: 'color',
		},
	},
};

export default meta;
type Story = StoryObj<typeof EyeBrow>;

export const Primary: Story = {
	args: {
		primary: true,
		label: 'EyeBrow',
	},
};
