import { formatHtmlPreview } from '../../utils/utils';

export default {
  title: 'Components/Stepper',
  parameters: {
    layout: 'centered',
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=10508%3A32221&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=10508%3A32221&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    size: {
      name: 'Size',
      description: 'Size of the stepper',
      control: {
        type: 'radio',
      },
      options: ['Default', 'Small'],
    },
    style: {
      name: 'Style',
      description: 'Style of the stepper',
      control: {
        type: 'radio',
      },
      options: ['Default', 'Text on side', 'Vertical'],
    },
    iconType: {
      name: 'Icon type',
      description: 'Native/Web Component',
      control: {
        type: 'radio',
      },
      options: ['Native', 'Web Component'],
    },
    hideLabels: {
      name: 'Hide labels',
      description: 'Show or hide the label text',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    size: 'Default',
    style: 'Default',
    iconType: 'Native',
    hideLabels: false,
  },
};

const Template = ({ 
  size, 
  style, 
  iconType, 
  hideLabels 
}) => {
  const sizeClass = size === 'Small' ? 'sdds-stepper-sm' : '';

  const styleLookup = {
    'Default': '',
    'Text on side': 'sdds-stepper--sidetext',
    'Vertical': 'sdds-stepper--vertical',
  };
  return formatHtmlPreview(
    `

    ${
      iconType === 'Native'
        ? ` <style>/* Note: In case using WebFont icons, please make sure to import icons css file in your implementation */
  @import url('https://cdn.digitaldesign.scania.com/icons/webfont/css/sdds-icons.css');</style>
    `
        : ''
    }


    <div class="sdds-stepper ${sizeClass} ${styleLookup[style]}">

      <div class="sdds-stepper__step sdds-stepper__step--value">
        <div class="sdds-stepper__step-icon">
          <span class="sdds-stepper__step-icon-value">1</span>
        </div>
        ${hideLabels ? '' : '<label class="sdds-stepper__step_label">Step value</label>'}
      </div>

      <div class="sdds-stepper__step sdds-stepper__step--warning">
        <div class="sdds-stepper__step-icon">
        ${
          iconType === 'Native'
            ? `<i class="sdds-icon warning"></i>
        `
            : `<sdds-icon name="warning" size="${size === 'Small' ? '16px' : '18px'}"></sdds-icon> `
        }
        </div>
        ${hideLabels ? '' : '<label class="sdds-stepper__step_label">Step warning</label>'}
      </div>

      <div class="sdds-stepper__step sdds-stepper__step--inactive">
        <div class="sdds-stepper__step-icon">
          <span class="sdds-stepper__step-icon-value">3</span>
        </div>
        ${
          hideLabels ? '' : '<label class="sdds-stepper__step_label">Step inactive with text</label>'
        }
      </div>

      <div class="sdds-stepper__step sdds-stepper__step--success">
        <div class="sdds-stepper__step-icon">
        ${
          iconType === 'Native'
            ? `<i class="sdds-icon tick"></i>
        `
            : `<div>
        <sdds-icon name="tick" size="${size === 'Small' ? '16px' : '20px'}"></sdds-icon> 
        </div>`
        }
        </div>
        ${hideLabels ? '' : '<label class="sdds-stepper__step_label">Step success</label>'}
      </div>

    </div>
    `,
  );
};

export const Native = Template.bind({});
Native.args = {};
