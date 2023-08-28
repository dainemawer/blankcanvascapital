import type { Meta, StoryObj } from '@storybook/react';

import SkipLink from './index';

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SkipLink> = {
	title: 'Components/SkipLink',
	component: SkipLink,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {
			control: 'color',
		},
	},
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Primary: Story = {
	args: {
		primary: true,
		label: 'SkipLink',
	},
};
