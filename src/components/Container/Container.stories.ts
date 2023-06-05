import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Container> = {
	title: 'Components/Container',
	component: Container,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Primary: Story = {
	args: {
		label: 'Container',
	},
};
