import { useEffect } from "react";
import AOS from "aos";

import Providers from "@/Providers";
import AppRoutes from "@/routes";

import "./assets/scss/theme.scss";

document.addEventListener("contextmenu", (event) => event.preventDefault());

/** TO DISABLE SCREEN CAPTURE **/
// document.addEventListener("keyup", (e) => {
//   if (e.key == "PrintScreen") {
//     e.preventDefault();
//     navigator.clipboard.writeText("");
//     alert("Screenshots disabled!");
//   }
// });

/** TO DISABLE PRINTS WHIT CTRL+P **/
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key == "p") {
    alert("This webstite does not allow print or export to PDF");
    e.cancelBubble = true;
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
}

export default App;
