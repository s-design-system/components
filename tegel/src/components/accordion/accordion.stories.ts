import { formatHtmlPreview } from '../../utils/utils';
import readme from './readme.md';
import readmeItem from './accordion-item/readme.md';

export default {
  title: 'Components/Accordion',
  argTypes: {
    iconPosition: {
      name: 'Expand icon position',
      control: {
        type: 'radio',
      },
      options: { End: 'end', Start: 'start' },
      description: 'The horizontal position of the expand icon.',
      table: {
        defaultValue: { summary: 'end' },
      },
    },
    disabled: {
      name: 'Disable all items',
      description: 'Disable all accordion items.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    paddingReset: {
      name: 'Less padding right',
      description: 'Less padding on the right inside accordion items.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    modeVariant: {
      name: 'Mode variant',
      description: 'Variant of the component.',
      control: {
        type: 'radio',
      },
      options: ['Primary', 'Secondary'],
    },
  },
  parameters: {
    notes: { 'Accordion': readme, 'Accordion item': readmeItem },
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=2762%3A84&t=rVXuTOgTmXPauyHd-1',
      },
      {
        name: 'Link',
        type: 'link',
        url: 'https://www.figma.com/file/d8bTgEx7h694MSesi2CTLF/Tegel-UI-Library?node-id=2762%3A84&t=rVXuTOgTmXPauyHd-1',
      },
    ],
  },
  args: {
    disabled: false,
    paddingReset: false,
    iconPosition: 'end',
    modeVariant: 'Primary',
  },
};

const Template = ({ disabled, iconPosition, paddingReset, modeVariant }) => {
  const affixAttr = iconPosition === 'start' ? 'expand-icon-position="start"' : '';
  const disabledAttr = disabled ? 'disabled' : '';
  const paddingResetAttr = paddingReset ? 'padding-reset' : '';
  const tabIndexAttr = 'tabindex="0"';

  return formatHtmlPreview(`
    <sdds-accordion mode-variant="${modeVariant.toLowerCase()}" class="sdds-storybook-wrapper">
      <sdds-accordion-item header="First item" ${tabIndexAttr} ${affixAttr} ${disabledAttr} ${paddingResetAttr}>
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header.
        Lorem ipsum doler sit amet.
      </sdds-accordion-item>
      <sdds-accordion-item header="Second item" ${tabIndexAttr} ${affixAttr} ${disabledAttr} ${paddingResetAttr} expanded>
        This is the panel, which contains associated information with the header. Usually it contains text, set in the same size as the header.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet vestibulum fermentum.
      </sdds-accordion-item>
    </sdds-accordion>
  `);
};

export const Default = Template.bind({});
Default.args = {};
