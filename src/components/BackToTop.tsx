import FeatherIcon from "feather-icons-react";
import { useEffect } from "react";

const BackToTop = () => {
  useEffect(() => {
    const btnTop = document.getElementById("btn-back-to-top");
    window.addEventListener("scroll", (e) => {
      e.preventDefault();
      if (btnTop) {
        if (
          document.body.scrollTop >= 50 ||
          document.documentElement.scrollTop >= 50
        ) {
          btnTop.classList.add("show");
        } else {
          btnTop.classList.remove("show");
        }
      }
    });
  }, []);
  return (
    <button
      className="btn btn-soft-primary shadow-none btn-icon btn-back-to-top"
      id="btn-back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FeatherIcon icon="arrow-up" className="icon-xxs" />
    </button>
  );
};

export default BackToTop;
