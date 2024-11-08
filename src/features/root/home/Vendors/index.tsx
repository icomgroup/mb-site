import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";

import homeQueries from "@/API/home/queries";
import Error from "@/components/feedback/Error";
import NoData from "@/components/feedback/NoData";
import SectionTitle from "@/features/root/home/components/SectionTitle";
import TelegramIcon from "@/assets/images/TelegramIcon";
import InfiniteScroll from "@/libs/infiniteScroll";
import VendorsSkeleton from "@/features/root/home/Vendors/VendorsSkeleton";

const Vendors = () => {
  const query = homeQueries.useGetAllVendors();
  const { data, isLoading, isError, error, isSuccess } = query;
  let content: ReactNode = <NoData />;
  if (data && data.pages[0] && data.pages[0].data.result.data.length !== 0) {
    content = data.pages.map((page) =>
      page.data.result.data.map((vendor, index) => {
        const isTelegram =
          vendor.phone.startsWith("http") || vendor.phone.startsWith("t.me");
        return (
          <Col lg={4} md={6} key={index.toString()} className="mb-4 ">
            <div className="d-flex center-item pb-md-3 bg-white p-3 flex-column rounded-1 shadow-sm">
              <h4 className="mt-0 h3 fw-medium">{vendor.name}</h4>
              <div className="flex-grow-1 d-flex flex-column justify-content-center">
                {!isTelegram && (
                  <a
                    href={`tel:${vendor.phone}`}
                    className="d-flex px-md-1 mb-3"
                  >
                    <span className="bg-soft-orange avatar avatar-sm rounded icon icon-with-bg icon-xs text-orange ms-2 flex-shrink-0">
                      <FeatherIcon
                        icon="phone-call"
                        className="icon-dual-orange"
                      />
                    </span>
                    <div className="flex-grow-1">
                      <h5 className="m-0 fw-medium">رقم الهاتف</h5>
                      <p className="text-muted fw-normal h5 my-1 text-break">
                        {vendor.phone}
                      </p>
                    </div>
                  </a>
                )}
                {isTelegram && (
                  <a
                    target="_blank"
                    href={vendor.phone}
                    className="d-flex px-md-1 mb-3"
                  >
                    <span className="bg-soft-info avatar avatar-sm rounded icon icon-with-bg icon-xs text-info ms-2 flex-shrink-0">
                      <TelegramIcon />
                    </span>
                    <div className="flex-grow-1">
                      <h5 className="m-0 fw-medium">تيليغرام</h5>
                      <p className="text-muted fw-normal h5 my-1 text-break">
                        {vendor.phone}
                      </p>
                    </div>
                  </a>
                )}
                <div className="d-flex px-md-1">
                  <span className="bg-soft-info avatar avatar-sm rounded icon icon-with-bg icon-xs text-info ms-2 flex-shrink-0">
                    <FeatherIcon icon="map-pin" className="icon-dual-info" />
                  </span>
                  <div className="flex-grow-1">
                    <h5 className="m-0 fw-medium">{vendor.region}</h5>
                    <p className="h5 address-text text-muted fw-normal my-1">
                      {vendor.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        );
      })
    );
  }
  return (
    <section
      className="pt-5 pb-6 py-sm-8 mb-5 mb-sm-0 bg-light position-relative"
      data-aos="fade-up"
      data-aos-duration="300"
    >
      <div className="divider top d-none d-sm-block"></div>
      <Container>
        <SectionTitle
          title="مراكز البيع"
          subTitle="أين تجد أعمال ميدبوس في المحافظات السورية"
        />
        {isLoading && (
          <Row className="mt-5 align-items-stretch gap-4 gap-sm-0">
            <VendorsSkeleton />
          </Row>
        )}
        {isError && <Error error={error} />}
        <InfiniteScroll
          className="row mt-5 align-items-stretch gap-4 gap-sm-0"
          query={query}
          loader={<VendorsSkeleton />}
        >
          {isSuccess && content}
        </InfiniteScroll>
      </Container>
    </section>
  );
};

export default Vendors;
