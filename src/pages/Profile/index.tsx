import { Card, Col, Row } from "react-bootstrap";

import TabTitle from "@/features/Profile/components/TabTitle";
import EditInfoForm from "@/features/Profile/home/EditInfoForm";
import accountQueries from "@/API/account/queries";
import PageFallback from "@/components/feedback/PageFallback";
import Error from "@/components/feedback/Error";

const ProfileHome = () => {
  const { isLoading, data, error, isError, isSuccess } =
    accountQueries.useInfoQuery();
  return (
    <>
      <TabTitle title="إعدادات الحساب" subtitle="تعديل معلوماتك الشخصية" />
      <Row className="mt-2">
        <Col lg={12} className="px-0">
          <Card>
            <Card.Body>
              {isLoading && <PageFallback />}
              {isError && <Error className="mt-3" error={error} />}
              {isSuccess && data && <EditInfoForm data={data} />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProfileHome;
