import authQueries from "@/API/auth/queries";
import { ResetPassowrdBody } from "@/API/auth/types";
import Submit from "@/components/buttons/Submit";
import FormInput from "@/components/inputs/FormInput";
import { queryClient } from "@/context/queryClient";
import {
  resetPassowrdDefualts,
  resetPasswordSchema,
} from "@/features/Auth/ResetPassword/validation";
import useSnackbar from "@/hooks/useSnackbar";
import { storage } from "@/utils/storage";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const ResetPasswordForm = () => {
  const { token } = useParams();
  const [searchParams] = useSearchParams();
  const { errorSnackbar, successSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const defaultValues = {
    ...resetPassowrdDefualts,
    token,
    email: searchParams.get("email") ?? "",
  };
  const methods = useForm<ResetPassowrdBody>({
    defaultValues,
    resolver: yupResolver(resetPasswordSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const { mutate, isPending } = authQueries.useResetPasswordQuery();
  const onSubmit = async (body: ResetPassowrdBody) => {
    mutate(body, {
      onSuccess: () => {
        storage.clearToken();
        queryClient.clear();
        successSnackbar("تم تغيير كلمة المرور بنجاح");
        navigate("/auth/login");
      },
      onError: (err) => {
        errorSnackbar(err);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormInput
        type="password"
        name="password"
        register={register}
        errors={errors}
        label="كلمة المرور"
        containerClass={"mb-3"}
      />
      <FormInput
        type="password"
        name="password_confirmation"
        register={register}
        errors={errors}
        label="تأكيد كلمة المرور"
        containerClass={"mb-3"}
      />
      <div className="mb-0 text-center d-grid">
        <Submit isSubmitting={isPending} small>
          إرسال
        </Submit>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
