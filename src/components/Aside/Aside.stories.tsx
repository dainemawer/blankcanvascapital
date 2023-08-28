import type { Meta, StoryObj } from '@storybook/react';

import Aside from './index';

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Aside> = {
	title: 'Components/Aside',
	component: Aside,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Aside>;

export const Primary: Story = {
	args: {},
};
