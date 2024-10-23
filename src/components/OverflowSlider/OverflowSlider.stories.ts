import type { Meta, StoryObj } from "@storybook/react";

import { OverflowSlider } from "./index";

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof OverflowSlider> = {
  title: "Components/OverflowSlider",
  component: OverflowSlider,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof OverflowSlider>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "OverflowSlider",
  },
};
