import Typography from "typography";
import GitHub from "typography-theme-github";

const typography = new Typography(GitHub);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
    typography.injectStyles();
}

export default typography;
