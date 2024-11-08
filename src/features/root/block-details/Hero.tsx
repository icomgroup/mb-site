import fielsQueries from "@/API/files/queries";
import Error from "@/components/feedback/Error";
import FilesNumberBadge from "@/components/UI/FilesNumberBadge";
import HeroSkeleton from "@/features/root/block-details/HeroSkeleton";
import { pointsFormater } from "@/utils/transform";
import FeatherIcon from "feather-icons-react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const BlockDetialsHero = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = fielsQueries.useGetBlockDetails(
    id ?? ""
  );
  return (
    <section
      className="hero-4 pb-5 pt-7 py-sm-7 text-center"
      data-aos="fade-up"
      data-aos-duration="300"
    >
      <Container>
        {isLoading && <HeroSkeleton />}
        {isError && <Error error={error} />}
        {data && (
          <>
            <h1 className="hero-title "> {data.name}</h1>
            <p>{data.description}</p>
            <Row className="border-top border-bottom py-4 align-items-center mt-5">
              <Col>
                <span className="fs-14">عدد الملفات</span>
                <h2 className="mt-1 fw-medium h4">
                  <FilesNumberBadge number={data.file_count} withoutUnit />
                </h2>
              </Col>
              <Col>
                <span className="fs-14">قيمة الاشتراك</span>
                <h2 className="mt-1 fw-medium h4">
                  <Badge bg="" className="badge-soft-primary">
                    {pointsFormater(data.points)}
                  </Badge>
                </h2>
              </Col>
              <Col>
                {!data.is_subscribed && (
                  <Link
                    to={`?block-id=${data.id}&p=${data.points}`}
                    className="btn btn-sm btn-outline-primary"
                  >
                    اشترك الآن
                  </Link>
                )}
                {data.is_subscribed && (
                  <Badge bg="" className="badge-soft-success">
                    مشترك
                  </Badge>
                )}
              </Col>
            </Row>
            <Link to="#files-list" className="mt-5">
              <FeatherIcon
                size={30}
                icon="arrow-down"
                className="bouncing text-primary"
              />
            </Link>
          </>
        )}
      </Container>
    </section>
  );
};

export default BlockDetialsHero;
