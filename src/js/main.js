import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import Select from './modules/ Select';

function main() {
  scrollSmooth();
  Select.init();
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000);
    }, {
      once: true
    });
} else {
  main();
};
