import { Button, Modal } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";

const LoginFirstModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const fileId = searchParams.get("file-id") ?? "";
  const blockId = searchParams.get("block-id") ?? "";

  function onClose() {
    searchParams.delete("block-id");
    searchParams.delete("file-id");
    searchParams.delete("p");
    setSearchParams(searchParams, { replace: true });
  }
  return (
    <Modal
      show={!!fileId || !!blockId}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onClose}
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <h2 className="text-primary text-center">تسجيل الدخول مطلوب</h2>
        <p className="text-center">يرجى تسجيل الدخول لإتمام الاشتراك</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Link
          to={`/auth/login`}
          className="btn btn-primary btn-sm fw-semibold me-2"
        >
          تسجيل الدخول
        </Link>
        <Button size="sm" onClick={onClose} variant="outline-danger">
          إلغاء
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginFirstModal;
