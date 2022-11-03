// .storybook/manager.js

window.STORYBOOK_GA_ID = 'G-T4S5M709VL';
window.STORYBOOK_REACT_GA_OPTIONS = {};

import { addons } from '@storybook/addons';
import theme from './ScaniaThemeLight';

addons.setConfig({
  theme, // only this does not work with storybook-dark-mode plugin, put under 'darkmode' key inside preview.js file also. See https://github.com/hipstersmoothie/storybook-dark-mode/issues/157
});
