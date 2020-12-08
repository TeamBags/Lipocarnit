import "./helpers/postDate";
import layout from "./global/layout";
import Controls from "./modules/Controls";
import Sliders from "./modules/Sliders";
function main() {
  Controls.init();
  Sliders.init();
  layout.layoutHandler({
    onInit: (layout) => {
      if (layout.WIN_WIDTH < 1023) {
        Sliders.initMobileReviewSlider();
        Sliders.initMobileTableSlider();
      }
    },
    afterResize: (layout) => {
      if (layout.WIN_WIDTH >= 1024) {
        Sliders.destroyReviewSlider();
        Sliders.destroyTableSlider();
      } else {
        Sliders.initMobileReviewSlider();
        Sliders.initMobileTableSlider();
      }
    },
  });
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
