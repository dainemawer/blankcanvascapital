import type { Meta, StoryObj } from "@storybook/react";

import { Address } from "./index";

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Address> = {
  title: "Components/Address",
  component: Address,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Address>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Address",
  },
};
