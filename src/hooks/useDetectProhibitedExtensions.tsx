import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
const ProhibitedExtensionsSourcesUrls = {
  Chrome:
    "chrome-extension://c9e7a1b4-df4e-4076-9ea2-65f3b8d62834/captured.html",
  Firefox: "moz-extension://c9e7a1b4-df4e-4076-9ea2-65f3b8d62834/captured.html",
  Safari: "",
  IE: "",
  Opera: "chrome-extension://chghnpkcbnkhlghcmfocjdmpnhblmpdb/popup.html",
};

const useDetectProhibitedExtensions = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    // fetch sourse function
    function fetchSource(url: string) {
      return fetch(url)
        .then(() => true)
        .catch(() => false);
    }

    const interval = setInterval(() => {
      const promisesArray = [
        fetchSource(ProhibitedExtensionsSourcesUrls.Firefox),
        fetchSource(ProhibitedExtensionsSourcesUrls.Chrome),
        fetchSource(ProhibitedExtensionsSourcesUrls.Opera),
      ];
      Promise.all(promisesArray)
        .then((values) => {
          if (values.filter((el) => el).length > 0)
            navigate(`/profile/disable-extensions?id=${id ?? ""}`);
          // else {
          //   console.log("Good! no extension detected!");
          // }
        })
        .catch(() => {
          // console.log("Good! no extension detected!");
        });
    }, 500);

    return () => clearInterval(interval);
  }, [navigate, id]);
};

export default useDetectProhibitedExtensions;
