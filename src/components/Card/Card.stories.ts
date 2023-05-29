import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
	title: 'Components/Card',
	component: Card,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {
			control: 'color',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
	args: {
		primary: true,
		label: 'Card',
	},
};
