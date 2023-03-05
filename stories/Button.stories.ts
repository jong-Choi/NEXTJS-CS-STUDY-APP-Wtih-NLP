import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/common/atom/Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    color: "secondary",
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    color: "secondary",
    size: "small",
    label: "Button",
  },
};

export const Disabled: Story = {
  args: {
    color: "secondary",
    label: "Button",
    disabled: true,
  },
};
