import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { createTheme } from "../src/src/theme";
import { GlobalStyle } from "./GlobalStyles";

export const parameters = {
  themes: {
    default: "light",
    list: [
      { name: "light", class: "light-theme", color: "#ffffff", default: true },
      { name: "dark", class: "dark-theme", color: "#000000" },
    ],
  },
};

export const decorators = [
  (Story, context) => {
    const selectedTheme = context.globals.theme === "dark" ? "dark" : "light";
    const theme = createTheme(selectedTheme);
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    );
  },
];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light Theme", color: "white" },
        { value: "dark", title: "Dark Theme", color: "black" },
      ],
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
