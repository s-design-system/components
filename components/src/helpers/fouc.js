function fixFouc() {
  console.log('Flash of unstyled content');

  var elm = document.createElement('style');
  var style = document.createTextNode('body { visibility: hidden; }');

  console.log('elm', elm);

  document.head.insertBefore(elm, document.head.firstChild);
  elm.appendChild(style);

  document.onreadystatechange = function () {
    console.log(document.readyState);
    if (document.readyState == 'complete') {
      console.log('ready');
      // This timeout is to make sure that IE has time to load
      setTimeout(() => {
        if (document.querySelector('sdds-theme')) return;

        // Used in case a theme element is not rendered
        style.nodeValue = 'body { visibility: visible; }';
      });
      console.log(style.nodeValue);
      style.nodeValue = 'body { visibility: visible; }';
      console.log(style.nodeValue);
    }
  };
}

export default fixFouc;
