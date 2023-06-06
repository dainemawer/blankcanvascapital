import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Hero> = {
	title: 'Components/Hero',
	component: Hero,
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Primary: Story = {
	args: {
		label: 'Hero',
	},
};
