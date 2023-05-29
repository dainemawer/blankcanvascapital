import type { Meta, StoryObj } from '@storybook/react';

import { Section } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Section> = {
	title: 'Components/Section',
	component: Section,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {
			control: 'color',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Primary: Story = {
	args: {
		primary: true,
		label: 'Section',
	},
};
