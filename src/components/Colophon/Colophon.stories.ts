import type { Meta, StoryObj } from '@storybook/react';

import { Colophon } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Colophon> = {
	title: 'Components/Colophon',
	component: Colophon,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {
			control: 'color',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Colophon>;

export const Primary: Story = {
	args: {
		primary: true,
		label: 'Colophon',
	},
};
