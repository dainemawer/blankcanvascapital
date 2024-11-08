import type { Meta, StoryObj } from "@storybook/react";

import SubHeading from "./index";

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SubHeading> = {
	title: "Components/SubHeading",
	component: SubHeading,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SubHeading>;

export const Primary: Story = {
	args: {},
};
