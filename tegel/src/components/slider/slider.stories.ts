import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

const style = `
  <style>
    .demo-wrapper {
      width: 80%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 100%;
      padding-top: 100px;
      padding-left: 40px;
      padding-right: 40px;
    }
    .demo-wrapper.sdds-on-white-bg {
      background-color: #fff;
    }
  </style>
`;

export default {
  title: 'Components/Slider',
  argTypes: {
    initialValue: {
      name: 'Initial value',
      description: 'Initial value for slider',
      control: {
        type: 'text',
      },
    },
    min: {
      name: 'Min. value',
      description: 'Minimum value',
      control: {
        type: 'text',
      },
    },
    max: {
      name: 'Max. value',
      description: 'Maximum value',
      control: {
        type: 'text',
      },
    },
    showLabel: {
      name: 'Show label',
      description: 'Show or hide label',
      control: {
        type: 'boolean',
      },
    },
    labelText: {
      name: 'Label text',
      description: 'Text for label',
      control: {
        type: 'text',
      },
    },
    showTooltip: {
      name: 'Show tooltip',
      description: 'Show or hide tooltip',
      control: {
        type: 'boolean',
      },
    },
    showTicks: {
      name: 'Show ticks',
      description: 'Show or hide ticks',
      control: {
        type: 'boolean',
      },
    },
    numTicks: {
      name: 'Number of ticks',
      description: 'Set the number of ticks to display',
      control: {
        type: 'text',
      },
    },
    snapToTicks: {
      name: 'Snap to ticks',
      description: 'Snap the scrubber to the closest tick when dragging',
      control: {
        type: 'boolean',
      },
    },
    showTickNumbers: {
      name: 'Show tick numbers',
      description: 'Show or hide tick numbers',
      control: {
        type: 'boolean',
      },
    },
    showControls: {
      name: 'Show controls (not compatible with input field)',
      description: 'Show or hide controls',
      control: {
        type: 'boolean',
      },
    },
    step: {
      name: 'Step value',
      description: 'Value to increment/decrease when using controls',
      control: {
        type: 'text',
      },
    },
    showInput: {
      name: 'Show value input field (not compatible with controls)',
      description: 'Show or hide value input field',
      control: {
        type: 'boolean',
      },
    },
    colorTheme: {
      name: 'Color theme',
      description: 'Display a different color theme',
      control: {
        type: 'radio',
        options: ['On-grey', 'On-white'],
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Put control in disabled state',
      control: {
        type: 'boolean',
      },
    },
    readonly: {
      name: 'Read Only',
      description: 'Put control in read-only state',
      control: {
        type: 'boolean',
      },
    },
    small: {
      name: 'Small',
      description: 'Use small variant',
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    notes: readme,
  },
  args: {
    min: 0,
    max: 100,
    value: 50,
  },
};

const Template = ({
  initialValue,
  min,
  max,
  showLabel,
  labelText,
  showTooltip,
  showTicks,
  numTicks,
  showTickNumbers,
  snapToTicks,
  showControls,
  step,
  showInput,
  colorTheme,
  disabled,
  readonly,
  small,
}) => {
  let classes = '';

  switch (colorTheme) {
    case 'On-white':
      classes = 'sdds-on-white-bg';
      break;
    default:
      break;
  }

  return formatHtmlPreview(`
    ${style}
    <div class="demo-wrapper ${classes}">
      <sdds-slider id="sdds-slider"
        min="${min}" 
        max="${max}" 
        step="${step}" 
        value="${initialValue}" 
        ${showTicks ? 'ticks="' + numTicks + '"' : ''} 
        ${showTickNumbers ? 'show-tick-numbers' : ''} 
        ${snapToTicks ? 'snap' : ''} 
        ${showLabel ? 'label="' + labelText + '"' : ''} 
        ${showTooltip ? 'tooltip' : ''} 
        ${showControls ? 'controls' : ''} 
        ${showInput ? 'input' : ''} 
        ${disabled ? 'disabled' : ''} 
        ${small ? 'size="sm"' : ''}
        ${readonly ? 'read-only' : ''} 
        >

      </sdds-slider>
    </div>
  `);
};

let sliderStoryLoaded = false;

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  if (sliderStoryLoaded) {
    return;
  }

  sliderStoryLoaded = true;

  const slider = document.querySelector('#sdds-slider');
  if (!slider) {
    return;
  }

  /*
    @ATTENTION
    Keep in mind that storybook does stuff, so if any story control is changed,
    the page has to be reloaded for this event listener to work!!
  */

  slider.addEventListener('sliderChange', event => {
    console.log('Got a sliderChange event', event['detail'].value);
  });
});

export const Default = Template.bind({});
Default.args = {
  initialValue: '50',
  showLabel: false,
  labelText: 'Label',
  showTooltip: true,
  showTicks: false,
  numTicks: '3',
  showTickNumbers: false,
  showControls: false,
  showInput: false,
  min: '0',
  max: '100',
  step: '1',
  colorTheme: 'On-grey',
  disabled: false,
  small: false,
  snapToTicks: false,
  readonly: false,
};
