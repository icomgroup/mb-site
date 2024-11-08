import FeatherIcon from "feather-icons-react";
import { Alert } from "react-bootstrap";

const ForgetPasswordSuccessMessage = () => {
  return (
    <>
      <h1 className="h3 text-center">يرجى التحقق من بريدك الإلكرتوني</h1>
      <Alert variant="success" className="my-3 border-success">
        <FeatherIcon
          icon="check"
          size={30}
          className="my-2 ms-2 text-success "
        />
        تم إرسال تفاصيل استعادة كلمة المرور الخاصة بك إلى بريدك الإلكتروني!
      </Alert>
    </>
  );
};

export default ForgetPasswordSuccessMessage;
