import { Component, h, Host, Prop, Element } from '@stencil/core';

@Component({
  tag: 'sdds-header',
  styleUrl: 'header-component.scss',
  shadow: true,
})
export class SddsHeader {
  /** The na that is displayed in the header */
  @Prop() siteName: string = 'Application';

  /** URL for the sdds-header-icon */
  @Prop() iconHref: string = '#';

  @Prop({ reflect: true }) showOverlay: boolean = false;

  @Element() host: HTMLElement;

  render() {
    return (
      <Host>
        <slot name="mobile-menu"></slot>
        <div class={'sdds-header-site-name-desktop'}>{this.siteName}</div>
        <div class="sdds-header-content">
          <slot name="lead"></slot>
          {/* EMPTY DIV TO PUSH ELEMENTS */}
          <div></div>
          <slot name="trail"></slot>
        </div>

        {this.showOverlay && (
          <div class={`sdds-header-overlay-${this.showOverlay ? 'show' : 'hide'}`}></div>
        )}
        <div class="sdds-header-logo">
          <a class="sdds-header-logo-holder" href={this.iconHref}></a>
        </div>
      </Host>
    );
  }
}
