import type { Meta, StoryObj } from '@storybook/react';

import { TeamGrid } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TeamGrid> = {
	title: 'Components/Section',
	component: TeamGrid,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TeamGrid>;

export const Primary: Story = {
	args: {
		team: [],
	},
};
