import store from './store';
import fixFouc from '../src/helpers/fouc';

//Flash of Unstyled Content
// function fixFouc() {
//   console.log('FoUC');
//   const elm = document.createElement('style');
//   const style = document.createTextNode('body { visibility: hidden; }');

//   document.head.insertBefore(elm, document.head.firstChild);
//   elm.appendChild(style);

//   document.onreadystatechange = function () {
//     if (document.readyState == 'interactive') {
//       // This timeout is to make sure that IE has time to load
//       setTimeout(() => {
//         if (document.querySelector('sdds-theme')) return;

//         // Used in case a theme element is not rendered
//         style.nodeValue = 'body { visibility: visible; }';
//       });
//     }
//   };
// }

// Polyfill for CustomEvent
(function () {
  fixFouc();
  console.log('store:', store);
  if (typeof (<any>window).CustomEvent === 'function') return false;

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  }

  CustomEvent.prototype = (<any>window).Event.prototype;

  (<any>window).CustomEvent = CustomEvent;
})();

const detail = { store };
const event = new CustomEvent('storeReady', { detail });
const defaultTheme = { light: { icons: {}, components: {}, colors: {} } };
console.log('detail', detail);

(<any>window).sdds = { ...(<any>window).sdds, ...detail };

const newValue = store.get('theme');

newValue.items['light'] = defaultTheme.light;

store.set('theme', newValue);

document.dispatchEvent(event);

(<any>window).sdds.storeReady = true;
