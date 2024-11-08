import ResetPasswordForm from "@/features/Auth/ResetPassword/Form";
import { Badge } from "react-bootstrap";
import { Navigate, useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  if (!email) return <Navigate to="/auth/login" />;

  return (
    <>
      <h1 className="h3 text-center">تغيير كلمة المرور لحسابك:</h1>
      <Badge bg="" className="badge-soft-secondary mx-auto d-block w-fit my-3">
        {email}
      </Badge>
      <p className="h5 text-center text-md-end">أدخل كلمة المرور الجديدة</p>
      <ResetPasswordForm />
    </>
  );
};

export default ResetPassword;
