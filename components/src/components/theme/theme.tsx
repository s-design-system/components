/* eslint-disable no-unused-vars */
import { Component, h, Prop, Element, State, Watch } from '@stencil/core';
/* eslint-enable no-unused-vars */

// Typescript does not support loading of resources outside of "src"
// So instead of a relative path we do this hack.

import store from '../../store';

@Component({
  tag: 'sdds-theme',
  styleUrl: 'theme.scss',
  shadow: false
})
export class Theme {
  /** Set the brand name that will set the theme styling for the page. */
  @Prop({ mutable: true }) name: string;

  @Prop() mode = 'light';

  @Element() el: HTMLElement;

  @State() tagName: string;

  @State() currentTheme = { favicons: [], components: [] };

  @State() favicons: string[];

  // Proxy objects are not supported by IE11 (not even with a polyfill),
  // so we need to use the store.get and store.set methods of the API to support IE11.
  @State() store = store.state;

  @Watch('mode')
  setName(mode) {
    const newValue = {
      current: mode,
      items: store.state.theme.items
    };

    console.log(newValue);
    store.set('theme', newValue);
  }

  setTheme(mode = undefined) {
    this.mode = mode || this.store.theme.current;
    this.currentTheme = this.store.theme.items[this.mode];
    this.favicons = this.currentTheme ? this.currentTheme.favicons : undefined;

    console.log(this.store.theme.items);
  }

  componentWillLoad() {
    this.store.theme = store.get('theme');
    this.store.navigation = store.get('navigation');

    this.setName(this.mode);
    this.setTheme();

    (window as any).CorporateUi = { ...(window as any).CorporateUi };
    // document.documentElement.setAttribute('sdds-components-version');

    if (!(this.el && this.el.nodeName)) return;

    this.tagName = this.el.nodeName.toLowerCase();
  }

  render() {
    if (
      this.currentTheme !== undefined &&
      this.currentTheme['version'] !== undefined
    ) {
      document.documentElement.setAttribute(
        `theme`,
        `scania/theme-${this.mode} v${this.currentTheme['version']}`
      );
    } else {
      document.documentElement.setAttribute(`theme`, '-');
    }

    console.log(this.currentTheme);

    return [
      this.currentTheme ? (
        <style>{this.currentTheme.components[this.tagName]}</style>
      ) : (
        ''
      )
    ];
  }
}
