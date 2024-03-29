import type { Meta, StoryObj } from '@storybook/react';

import Form from './index';

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Form> = {
	title: 'Components/Form',
	component: Form,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {
			control: 'color',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Primary: Story = {
	args: {
		primary: true,
		label: 'Form',
	},
};
