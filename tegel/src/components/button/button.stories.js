import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Button',
  parameters: {
    layout: 'padded',
    chromatic: {
      disableSnapshot: false, // enables snapshotting for the component
    },
  },
  argTypes: {
    btnType: {
      name: 'type',
      defaultValue: 'primary',
      description: 'Four different button types to help the user to distinguish the level of importance of the task they represent',
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'ghost', 'danger'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['Large', 'Medium', 'Small'],
      },
      defaultValue: 'Large',
      description: 'Size of the button',
    },
    variant: {
      name: 'Variant',
      control: {
        type: 'radio',
        options: ['Default', 'Variant'],
      },
      defaultValue: 'Default',
      description: 'Button variant.',
    },
    fullbleed: {
      type: 'boolean',
      defaultValue: false,
      description: 'Fluid width in certain components-old',
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
      description: 'Choose to disable the button',
    },
    onlyIcon: {
      defaultValue: false,
      table: {
        disable: true,
      },
    },
    icon: {
      type: 'boolean',
      defaultValue: false,
      description: 'Include icon',
    },
  },
};

const NativeTemplate = ({ size, variant, btnType, fullbleed, text = 'Button', disabled = '', onlyIcon, icon }) => {
  let sizeValue = '';
  switch (size) {
    case 'Large':
      sizeValue = 'lg';
      break;
    case 'Medium':
      sizeValue = 'md';
      break;
    case 'Small':
      sizeValue = 'sm';
      break;
    default:
      sizeValue = 'lg';
      break;
  }

  const fbClass = fullbleed ? 'sdds-btn-fullbleed' : '';
  const inlineStyle = fullbleed ? 'style="width:100%;"' : '';
  const onlyIconCss = onlyIcon ? 'sdds-btn-icon' : '';

  // chromatic snapshot requires icon to be sdds-icon instead of font
  return formatHtmlPreview(
    `
  <button class="sdds-btn sdds-btn-${btnType} sdds-btn-${sizeValue} ${fbClass} ${disabled ? 'disabled' : ''} ${onlyIconCss} ${
      variant === 'Variant' ? 'sdds-on-white-bg' : ''
    }" ${inlineStyle}>
    <span>${text}</span>
    ${icon ? "<span class='sdds-btn-icon'><sdds-icon name='scania-cross'></sdds-icon></span>" : ''}
  </button>
  `,
  );
};

const WebComponentTemplate = ({ size, variant, btnType, fullbleed, disabled, icon, text = 'Button' }) => {
  let sizeValue = '';
  switch (size) {
    case 'Large':
      sizeValue = 'lg';
      break;
    case 'Medium':
      sizeValue = 'md';
      break;
    case 'Small':
      sizeValue = 'sm';
      break;
    default:
      sizeValue = 'lg';
      break;
  }

  const inlineStyle = fullbleed ? 'style="width:100%;"' : '';
  const variantValue = variant === 'Variant' ? 'variant' : 'default';
  return formatHtmlPreview(
    `
  <sdds-button type="${btnType}" size="${sizeValue}" ${disabled ? 'disabled' : ''} ${fullbleed ? 'fullbleed' : ''} text="${text}" ${inlineStyle} variant="${variantValue}" > ${
      icon ? "<sdds-icon slot='icon' name='scania-cross'></sdds-icon>" : ''
    } </sdds-button>
  `,
  );
};

export const Primary = NativeTemplate.bind({});
Primary.args = {
  text: 'Button',
};

export const Secondary = NativeTemplate.bind({});
Secondary.args = {
  btnType: 'secondary',
  text: 'Button',
};

export const Ghost = NativeTemplate.bind({});
Ghost.args = {
  btnType: 'ghost',
  text: 'Button',
};

export const Danger = NativeTemplate.bind({});
Danger.args = {
  btnType: 'danger',
  text: 'Button',
};

export const Disabled = NativeTemplate.bind({});
Disabled.args = {
  disabled: 'disabled',
  text: 'Button',
};

/** Variants of button. Shown only on primary button */

export const WithIcon = NativeTemplate.bind({});
WithIcon.args = {
  text: 'Button',
  icon: true,
};

export const OnlyIcon = NativeTemplate.bind({});
OnlyIcon.args = {
  text: "<sdds-icon name='scania-cross'></sdds-icon>",
  onlyIcon: true,
};

OnlyIcon.argTypes = {
  icon: {
    table: {
      disable: true,
    },
  },
};

export const Medium_Size_W_Icon = NativeTemplate.bind({});
Medium_Size_W_Icon.args = {
  size: 'Medium',
  text: 'Button',
  icon: true,
};

export const Small_Size_W_Icon = NativeTemplate.bind({});
Small_Size_W_Icon.args = {
  size: 'Small',
  text: 'Button',
  icon: true,
};

export const Fullbleed = NativeTemplate.bind({});
Fullbleed.args = {
  text: 'Button',
  fullbleed: true,
  icon: true,
};

/** Button as web component */
export const SddsButton = WebComponentTemplate.bind({});
SddsButton.args = {
  text: 'Button',
};
