export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#4793df" },
          background: { default: "#f5f5f5", paper: "#fff" },
          color: { default: "#121212", paper: "#1d1d1d" },
        }
      : {
          primary: { main: "#0859f0" },
          background: { default: "#121212", paper: "#1d1d1d" },
          color: { default: "#f5f5f5", paper: "#fff" },
        }),
  },
});
