import "./helpers/postDate";
import Controls from "./modules/Controls";
import Sliders from "./modules/Sliders";
function main() {
  Controls.init();
  Sliders.init();
}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener(
    "scroll",
    function () {
      return setTimeout(main, 1000);
    },
    {
      once: true,
    }
  );
} else {
  main();
}
