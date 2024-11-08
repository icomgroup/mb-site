import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";

import HeroSlider from "@/features/root/home/Hero/HeroSlider";
// import HeroTypist from "@/features/home/Hero/HeroTypist";
import SubscribeNowButton from "@/features/root/home/Hero/SubscribeNowButton";

const Hero = () => {
  return (
    <section className="hero-section bg-gradient3 position-relative overflow-hidden pt-4 pt-lg-6 pb-5">
      <Container>
        <Row className="align-items-center text-center text-sm-end">
          <Col lg={{ offset: 1, span: 6 }} className="hero-left">
            <div className="mb-lg-0">
              <h2 className="hero-title">
                أهلا بك في موقع{" "}
                <span className="highlight highlight-success d-inline-block">
                  ميدبوس
                </span>{" "}
                الالكتروني الجديد
                {/* <HeroTypist /> */}
              </h2>
              <p className="hero-description text-muted pt-1">
                ميدبوس هو أول فريق طبي تعليمي متكامل في سوريا يهدف لتقديم محتوى
                طبي تفاعلي لطلاب الامتحان الوطني الطبي الموحد من خلال كتب ورقية
                والكترونية وملخصات واختبارات وبنوك اسئلة ودعم وارشاد تغني الطالب
                عن التشتت والضياع بين المصادر وتوفر له كل ما يحتاج إليه في مكان
                واحد لاجتياز الامتحان بنجاح والتمهيد لمرحلة الاختصاص الطبي
                لاحقاً.
              </p>
              <div className="pt-1 pt-sm-5 mb-4 mb-lg-0">
                <Link
                  to="/files#categories-list"
                  className="btn btn-primary"
                  data-toggle="smooth-scroll"
                >
                  <FeatherIcon
                    className="ms-2 icon icon-xxs"
                    icon="arrow-right"
                  />
                  عرض الملفات
                </Link>
                <SubscribeNowButton />
              </div>
            </div>
          </Col>
          <HeroSlider />
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
