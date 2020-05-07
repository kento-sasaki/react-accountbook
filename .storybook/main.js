module.exports = {
  stories: ["../src/**/*.stories.js", "../src/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-storysource/register",
  ],
};
