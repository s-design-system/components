module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
    '@storybook/addon-notes/register',
    'storybook-dark-mode',,
    'storybook-addon-designs',
    '@storybook/addon-a11y',
    'addon-screen-reader',
  ],
  framework: '@storybook/html',
};
