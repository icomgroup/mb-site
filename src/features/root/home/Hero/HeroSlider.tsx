import SwiperSlider from "@/libs/SwiperSlider";
import hero1 from "@/assets/images/hero/hero-1.jpg";
import hero2 from "@/assets/images/hero/hero-2.jpg";
import hero3 from "@/assets/images/hero/hero-3.jpg";
import hero4 from "@/assets/images/hero/hero-4.jpg";
import hero5 from "@/assets/images/hero/hero-5.jpg";
import hero6 from "@/assets/images/hero/hero-6.jpg";

import { Col } from "react-bootstrap";

const HeroSlider = () => {
  return (
    <Col lg={{ span: 5 }} className="hero-right">
      <div className="img-container">
        <div className="slider">
          <SwiperSlider
            slidesPerView={1}
            loop
            spaceBetween={0}
            autoplay
            breakpoints={{
              "576": { slidesPerView: 1.2 },
              "768": { slidesPerView: 1 },
            }}
            roundLengths
          >
            {([hero4, hero2, hero3, hero1, hero5, hero6] || []).map(
              (img, index) => {
                return (
                  <img
                    key={index}
                    src={img}
                    alt="medboss team"
                    className="img-fluid rounded-2"
                  />
                );
              }
            )}
          </SwiperSlider>
        </div>
      </div>
    </Col>
  );
};

export default HeroSlider;
