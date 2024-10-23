import type { Meta, StoryObj } from "@storybook/react";

import ArticleHeader from "./index";

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ArticleHeader> = {
	title: "Components/ArticleHeader",
	component: ArticleHeader,
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleHeader>;

export const Primary: Story = {
	args: {},
};
