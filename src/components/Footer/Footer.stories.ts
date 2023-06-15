import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './index';

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Footer> = {
	title: 'Components/Footer',
	component: Footer,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {
			control: 'color',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
	args: {
		primary: true,
		label: 'Footer',
	},
};
