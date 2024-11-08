import { IMAGES_BASE_URL } from "@/constants/domains";

import { useEffect, useState } from "react";

import loadingImg from "@/assets/images/feedback/loading-image.svg";
import errorImg from "@/assets/images/feedback/error-image.svg";

import "./style.css";

export type BackendImageProps = {
  url: string;
  alt: string;
} & Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  "src" | "alt"
>;

const BackendImage = ({ url, className, alt, ...props }: BackendImageProps) => {
  const [state, setState] = useState<"loading" | "error" | "success">(
    "loading"
  );
  const src = `${IMAGES_BASE_URL}${url}`;

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setState("success");
    };
    image.onerror = () => {
      setState("error");
    };
    image.src = src;
  }, [url, src]);

  return (
    <img
      alt={alt}
      src={
        state === "loading" ? loadingImg : state === "error" ? errorImg : src
      }
      className={`${state === "loading" ? "pulse loading-img" : ""} ${
        className ?? ""
      } backend-img`}
      {...props}
      style={{
        ...(state !== "success" && { objectFit: "cover" }),
      }}
    />
  );
};
export default BackendImage;
