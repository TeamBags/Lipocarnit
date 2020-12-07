import "./helpers/postDate";
import Controls from "./modules/Controls";
function main() { 
  Controls.init()
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
