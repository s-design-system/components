import format from 'html-format';
import readme from './readme.md';

export default {
  title: 'Components/Spinner',
  parameters: {
    layout: 'centered', // Center the component horizontally and vertically in the Canvas
    notes: readme,
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=10259%3A29263&t=Ne6myqwca5m00de7-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=10259%3A29263&t=Ne6myqwca5m00de7-1',
      },
    ],
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: {
        type: 'radio',
      },
      options: ['Standard', 'Inverted'],
      description: 'Variant of the spinner',
    },
    size: {
      name: 'Size',
      control: {
        type: 'radio',
      },
      options: ['Large', 'Medium', 'Small', 'Extra small'],
      description: 'Size of the spinner',
    },
  },
  args: {
    variant: 'Standard',
    size: 'Large',
  },
};

const Template = ({ size, variant }) => {
  const sizeLookup = { 'Large': 'lg', 'Medium': 'md', 'Small': 'sm', 'Extra small': 'xs' };
  const variantLookup = { Standard: 'standard', Inverted: 'inverted' };

  return format(
    `
  <sdds-spinner 
    size="${sizeLookup[size]}"  
    variant="${variantLookup[variant]}">
  </sdds-spinner>
  `,
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: 'Inverted',
};
