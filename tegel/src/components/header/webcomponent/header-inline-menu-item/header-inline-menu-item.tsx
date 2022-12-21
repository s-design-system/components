import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'sdds-header-inline-menu-item',
  styleUrl: 'header-inline-menu-item.scss',
  shadow: true,
})
export class SddsHeaderInlineMenuItem {
  @Prop() type: 'button' | 'link' | 'category' = 'button';

  @Prop() text: string = '';

  @Prop() href: string = '';

  @Prop() active: boolean = false;

  render() {
    return (
      <Host>
        <li>
          {this.type === 'category' && <div class="sdds-launcher-item-category">{this.text}</div>}
          {this.type === 'button' && <button>{this.text}</button>}
          {this.type === 'link' && <a href={this.href}>{this.text}</a>}
        </li>
      </Host>
    );
  }
}
