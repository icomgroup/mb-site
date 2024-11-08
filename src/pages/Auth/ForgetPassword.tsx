import ForgetPasswordForm from "@/features/Auth/ForgetPassword/Form";
import ForgetPasswordSuccessMessage from "@/features/Auth/ForgetPassword/SuccessMessage";
import { useState } from "react";

const ForgetPassword = () => {
  const [success, setSuccess] = useState(false);
  if (success) return <ForgetPasswordSuccessMessage />;
  return (
    <>
      <h1 className="h3 text-center text-md-end">نسيت كلمة المرور</h1>
      <p className="h5 text-center text-md-end">
        أدخل بريدك الإلكتروني لتغيير كلمة المرور
      </p>
      <ForgetPasswordForm onSuccess={() => setSuccess(true)} />
    </>
  );
};

export default ForgetPassword;
