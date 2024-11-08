import TabTitle from "@/features/Profile/components/TabTitle";
import { Alert, Card, Col, Row } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";

const DisableExtensions = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") ?? "";
  return (
    <>
      <TabTitle title="ملفاتي" subtitle="تصفح الملفات" />
      <Row className="mt-2">
        <Col lg={12} className="px-0">
          <Card className="main-card">
            <Card.Body className="px-0  row justify-content-center w-full align-items-center">
              <Col lg={6}>
                <Alert
                  key="warning"
                  variant="warning"
                  className="mx-auto text-center"
                >
                  الرجاء إيقاف اضافات المتصفح للتمكن من استعراض الملف 🙏🏻
                </Alert>
                <Link
                  className="btn btn-small btn-warning mx-auto d-block w-fit"
                  to={`/profile/files/${id}`}
                >
                  حسناً، أعد المحاولة
                </Link>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DisableExtensions;
