import { Component, Element, h, Host } from '@stencil/core';
import { inheritAriaAttributes } from '../../../../utils/utils';

@Component({
  tag: 'sdds-header-hamburger',
  styleUrl: 'header-hamburger.scss',
  shadow: true,
})
export class HeaderHamburger {
  @Element() host: HTMLElement;

  render() {
    const inheritedButtonProps = {
      ...inheritAriaAttributes(this.host),
    };

    return (
      <Host>
        <sdds-header-button {...inheritedButtonProps}>
          <sdds-icon slot="icon" name="burger" size="20px"></sdds-icon>
        </sdds-header-button>
      </Host>
    );
  }
}
