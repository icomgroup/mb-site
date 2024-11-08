"use client";

import { ReactNode, useRef } from "react";
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

type Props = {
  className?: string;
  pagination?: boolean;
  SCName?: string;
  CCName?: string;
  children: ReactNode[];
  smooth?: boolean;
  pauseOnHover?: boolean;
} & SwiperProps;

const SwiperSlider = ({
  className,
  SCName,
  CCName,
  children,
  smooth,
  pauseOnHover,
  pagination,
  breakpoints,
  modules,
  ...rest
}: Props) => {
  const swiperRef = useRef<SwiperRef>(null);
  const _modules = modules ? [...modules] : [];
  if (rest.autoplay) _modules.push(Autoplay);
  if (pagination) _modules.push(Pagination);
  return (
    <div
      onMouseEnter={() => {
        if (pauseOnHover) swiperRef.current?.swiper.autoplay?.stop();
      }}
      onMouseLeave={() => {
        if (pauseOnHover) swiperRef.current?.swiper.autoplay?.start();
      }}
      className={className}
    >
      <Swiper
        ref={swiperRef}
        modules={_modules}
        loop={true}
        breakpoints={breakpoints}
        pagination={{
          clickable: true,
        }}
        className={`${smooth ? "swiper-smooth-motion" : ""} ${CCName}`}
        {...rest}
      >
        {children.map((child, idx) => (
          <SwiperSlide key={idx} className={SCName}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
