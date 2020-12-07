import "./helpers/postDate";
import Sliders from "./modules/Sliders";

function main() {
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
