import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./index";

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
  args: {
    as: "h1",
  },
};
