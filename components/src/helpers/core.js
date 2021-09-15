import fixFouc from './fouc';

(function (doc) {
  var parentScript = doc.querySelectorAll('script');
  var arr = Array.prototype.slice.call(parentScript);
  var scriptElm =
    arr.filter(function (item) {
      return item.src.indexOf('dist/sdds-components.js') > -1;
    })[0] || doc.scripts[doc.scripts.length - 1];

  var parts = scriptElm.src.split('/');
  parts.pop();
  parts.push('sdds-components');
  var url = parts.join('/');

  scriptElm = doc.createElement('script');
  // when stop supporting IE 11, change to /sdds-components.esm.js and type="module"
  scriptElm.src = url + '/sdds-components.js';
  scriptElm.nomodule = true;

  fixFouc();
  doc.head.insertBefore(scriptElm, parentScript[0]);
})(document);
