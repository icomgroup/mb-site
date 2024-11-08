import homeQueries from "@/API/home/queries";
import Error from "@/components/feedback/Error";
import NoData from "@/components/feedback/NoData";
import SectionLoading from "@/components/feedback/SectionLoading";
import BackendImage from "@/components/images/BackendImage";
import StarsRate from "@/components/UI/StarsRate";
import SwiperSlider from "@/libs/SwiperSlider";
import { Card } from "react-bootstrap";
import { Navigation } from "swiper/modules";

const swiperConfig = {
  loop: true,
  spaceBetween: 24,
  autoplay: { delay: 5000 },
  breakpoints: {
    "768": { slidesPerView: 1 },
    "1024": { slidesPerView: 2 },
  },
  roundLengths: true,
  navigation: {
    nextEl: "#swiper-custom-next",
    prevEl: "#swiper-custom-prev",
  },
};

const TestimonialsSlider = () => {
  const { data, isLoading, isError, error } = homeQueries.useGetAllReviews();
  if (isLoading) return <SectionLoading />;
  if (isError) return <Error error={error} />;
  if (data && data.length !== 0) {
    return (
      <SwiperSlider {...swiperConfig} pauseOnHover modules={[Navigation]}>
        {data.map((slide, index) => {
          return (
            <div key={index.toString()}>
              <Card className="mb-0">
                <Card.Body className="p-md-5">
                  <p className="fw-normal mb-4 mt-0">{slide.msg}</p>
                  <div className="d-flex align-items-center">
                    <div className="img-box ms-2 rounded-circle">
                      <BackendImage url={slide.img} alt={slide.name} />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="m-0">{slide.name}</h6>
                      <p className="my-0 text-muted fs-13">{slide.title}</p>
                    </div>
                    <StarsRate
                      rate={slide.rate}
                      className="align-self-center stars"
                    />
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </SwiperSlider>
    );
  } else {
    return <NoData />;
  }
};

export default TestimonialsSlider;
