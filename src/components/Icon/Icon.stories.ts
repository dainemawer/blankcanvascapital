import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './index';

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Icon> = {
	title: 'Components/Icon',
	component: Icon,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
	args: {},
};
