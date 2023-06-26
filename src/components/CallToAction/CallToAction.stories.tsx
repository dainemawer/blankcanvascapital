import type { Meta, StoryObj } from '@storybook/react';

import { CallToAction } from './index';

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CallToAction> = {
	title: 'Components/CallToAction',
	component: CallToAction,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CallToAction>;

export const Primary: Story = {
	args: {},
};
