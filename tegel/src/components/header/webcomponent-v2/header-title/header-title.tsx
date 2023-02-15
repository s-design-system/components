import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sdds-header-title',
  styleUrl: 'header-title.scss',
  shadow: true,
})
export class HeaderTitle {
  render() {
    return (
      <Host>
        <div class="root">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
