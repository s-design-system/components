import { applyPolyfills, defineCustomElements as dce } from '../../../loader';
import fixFouc from './fouc';
export { defineCustomElements, addTheme };

function defineCustomElements() {
  console.log(fixFouc);
  fixFouc();

  return applyPolyfills().then(() => dce());
}

function addTheme(_theme) {
  const { store, storeReady } = window.sdds || {};

  if (storeReady) {
    return init(_theme, { detail: { store } });
  }

  // TODO: Maybe this event listener should be accesable from the theme itself?
  document.addEventListener('storeReady', (event) => init(_theme, event));

  function init(theme, event) {
    const store = event.detail.store;
    // need to get store theme through get API to make it work in IE
    const storeTheme = store.get('theme');

    theme['light'].components = document.head.attachShadow
      ? theme['light'].components.default
      : theme['light'].components.ie;

    storeTheme.items['light'] = theme['light'];

    store.set('theme', storeTheme);
  }
}
