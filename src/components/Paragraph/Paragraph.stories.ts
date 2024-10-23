import type { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "./index";

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Paragraph> = {
  title: "Components/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Primary: Story = {
  args: {},
};
