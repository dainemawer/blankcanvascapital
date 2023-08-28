import React from 'react';
import type { Preview } from "@storybook/react";
import { MantineProvider } from '@mantine/core';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
