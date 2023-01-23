import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';

export default {
  title: 'Components/Message',
  parameters: {
    layout: 'centered',
    notes: readme,
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=11884%3A47370&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=11884%3A47370&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    messageType: {
      name: 'Message Type',
      description: 'The type of the message.',
      control: {
        type: 'radio',
      },
      options: ['Information', 'Error', 'Warning', 'Success'],
    },
    modeVariant: {
      name: 'Mode variant',
      description: 'The mode variant of the component',
      control: {
        type: 'radio',
      },
      options: ['Primary', 'Secondary'],
    },
    header: {
      name: 'Header',
      description: 'Header for the message',
      control: {
        type: 'text',
      },
    },
    extendedMessage: {
      name: 'Extended message content',
      control: {
        type: 'text',
      },
    },
    icon: {
      name: 'Icon',
      description: 'Show icon',
      control: {
        type: 'boolean',
      },
    },
    minimal: {
      name: 'Minimal',
      description: 'Minimal message styling.',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    messageType: 'Information',
    modeVariant: 'Primary',
    header: 'Message header',
    icon: true,
    extendedMessage:
      'Longer message text can be placed here. Longer message text can be placed here.',
    minimal: true,
  },
};

const Template = ({ messageType, icon, extendedMessage, modeVariant, header, minimal }) =>
  formatHtmlPreview(
    `
    <style>
      .demo-wrapper {
        width: 380px;
      }
    </style>
    <div class="demo-wrapper">
      <sdds-message
          type="${messageType.toLowerCase()}"
          header="${header}"
          ${!icon ? 'no-icon' : ''}
          ${minimal ? 'minimal' : ''}
          mode-variant="${modeVariant.toLowerCase()}"
      >
      ${extendedMessage}
      </sdds-message>
    </div>
    `,
  );

export const WebComponent = Template.bind({});
