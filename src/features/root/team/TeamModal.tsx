import { TeamMember } from "@/API/team/types";
import BackendImage from "@/components/images/BackendImage";
import SwiperSlider from "@/libs/SwiperSlider";
import { ReactQueryPage } from "@/utils/apiHelpers";
import { Badge } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useSearchParams } from "react-router-dom";
import { Navigation } from "swiper/modules";

type Props = {
  list: ReactQueryPage<TeamMember>[];
  hasMore: boolean;
  fetchNext: () => void;
};

export function TeamModal({ list, hasMore, fetchNext }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const teamId = searchParams.get("team-id");
  let initSlide = 0;
  if (teamId)
    list.map((el, idx) => {
      const res = el.data.result.data.findIndex((el) => `${el.id}` === teamId);
      if (res !== -1) {
        initSlide = res + idx * 15;
      }
    });

  const contentList = list.map((page) =>
    page.data.result.data.map((item) => (
      <div key={item.id} className="team-slide">
        <div className="team-img-box">
          <BackendImage url={item.img} alt={item.description} />
        </div>
        <div>
          <h5 className="h4 mb-0 text-primary">{item.name}</h5>
          <Badge className="my-1">{item.title}</Badge>
          <p>{item.description}</p>
        </div>
      </div>
    ))
  );
  const faltArr = contentList.flat();
  return (
    <Modal
      show={!!teamId}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => {
        searchParams.delete("team-id");
        setSearchParams(searchParams, { replace: true });
      }}
      className="team-modal"
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <SwiperSlider
          loop
          navigation
          modules={[Navigation]}
          onActiveIndexChange={(e) => {
            if (hasMore && faltArr.length - e.activeIndex === 8) {
              fetchNext();
            }
          }}
          initialSlide={initSlide}
        >
          {faltArr}
        </SwiperSlider>
      </Modal.Body>
    </Modal>
  );
}
