const pallet = {
  light: {
    primary: {
      main: "#00a3ff",
      light: "#1aabff",
      dark: "#0081cc",
      text: "#ffffff",
    },
    secondary: {
      main: "#f2f2f2",
      light: "#ffffff",
      dark: "#e6e6e6",
      text: "#595959",
    },
    background: {
      main: "#f2f2f2",
      light: "#ffffff",
      dark: "#e6e6e6",
      text: "#595959",
    },
    text: "#595959",
    divider: "#d9d9d9",
  },
  dark: {
    primary: {
      main: "#00a3ff",
      light: "#1aabff",
      dark: "#0081cc",
      text: "#ffffff",
    },
    secondary: {
      main: "#222831",
      light: "#ffffff",
      dark: "#e6e6e6",
      text: "#595959",
    },
    background: {
      main: "#1a1a1a",
      light: "#323232",
      dark: "#0d0d0d",
      text: "#ffffff",
    },
    text: "#595959",
    divider: "#404040",
  },
};

const theme = {
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "40px",
  },
  pallet: {
    primary: {
      main: "#00a3ff",
      light: "#00a3ff",
      dark: "#00a3ff",
      text: "#ffffff",
    },
    secondary: {
      main: "#f2f2f2",
      light: "#ffffff",
      dark: "#e6e6e6",
      text: "#595959",
    },
    background: {
      main: "#f2f2f2",
      light: "#ffffff",
      dark: "#e6e6e6",
      text: "#595959",
    },
    text: "#595959",
    divider: "#d9d9d9",
  },
  radius: {
    sm: "8px",
    md: "12px",
    circle: "100%",
  },
  fontSize: {
    xxSmall: "xx-small",
    xSmall: "x-small",
    small: "small",
    medium: "medium",
    large: "large",
    larger: "larger",
    xLarge: "x-large",
    xxLarge: "xx-large",
    xxxLarge: "xxx-large",
  },
};

export const createTheme = (mode: "light" | "dark" = "light") => {
  return {
    ...theme,
    pallet: pallet[mode],
  };
};
