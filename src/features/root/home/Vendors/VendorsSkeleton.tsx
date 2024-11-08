import { Col, Placeholder } from "react-bootstrap";

const VendorsSkeleton = () => {
  const arr = new Array(6).fill(0);
  return arr.map((_, idx) => (
    <Col lg={4} md={6} key={idx} className="mb-4 ">
      <div className="d-flex center-item pb-md-3 bg-white p-3 flex-column rounded-1 shadow-sm">
        <h3 className="mt-0 mb-3 h5 fw-medium">
          <Placeholder animation="wave" as="div">
            <Placeholder xs={8} style={{ borderRadius: "10px" }} />
          </Placeholder>
        </h3>
        <div className="flex-grow-1 d-flex flex-column justify-content-center">
          <div className="d-flex px-md-1 mb-3">
            <span className="bg-soft-info avatar avatar-sm rounded icon icon-with-bg icon-xs text-info ms-2 flex-shrink-0">
              <Placeholder animation="wave" as="div">
                <Placeholder
                  xs={12}
                  style={{
                    fontSize: "3rem",
                    color: "var(--bs-info)",
                    borderRadius: "5px",
                    width: "3rem",
                  }}
                />
              </Placeholder>
            </span>
            <div className="flex-grow-1">
              <h4 className="h5 m-0 fw-medium">
                <Placeholder animation="wave" as="div">
                  <Placeholder
                    xs={5}
                    style={{ borderRadius: "10px", fontSize: "12px" }}
                  />
                </Placeholder>
              </h4>
              <div className="text-muted fw-normal h5 my-1">
                <Placeholder animation="wave" as="div">
                  <Placeholder
                    xs={8}
                    style={{ borderRadius: "10px", fontSize: "10px" }}
                  />
                </Placeholder>
              </div>
            </div>
          </div>
          <div className="d-flex px-md-1">
            <span className="bg-soft-info avatar avatar-sm rounded icon icon-with-bg icon-xs text-info ms-2 flex-shrink-0">
              <Placeholder animation="wave" as="div">
                <Placeholder
                  xs={12}
                  style={{
                    fontSize: "3rem",
                    color: "var(--bs-info)",
                    borderRadius: "5px",
                    width: "3rem",
                  }}
                />
              </Placeholder>
            </span>
            <div className="flex-grow-1">
              <h4 className="m-0 fw-medium">
                <Placeholder animation="wave" as="div">
                  <Placeholder
                    xs={5}
                    style={{ borderRadius: "10px", fontSize: "12px" }}
                  />
                </Placeholder>
              </h4>
              <div className="h5 address-text text-muted fw-normal my-1">
                <Placeholder animation="wave" as="div">
                  <Placeholder
                    xs={8}
                    style={{ borderRadius: "10px", fontSize: "10px" }}
                  />
                </Placeholder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  ));
};

export default VendorsSkeleton;
