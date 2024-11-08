import authQueries from "@/API/auth/queries";
import { LoginPayload } from "@/API/auth/types";
import Submit from "@/components/buttons/Submit";
import FormInput from "@/components/inputs/FormInput";
import PasswordInput from "@/components/inputs/PasswordInput";
import { queryClient } from "@/context/queryClient";
import { loginDefaults, loginSchema } from "@/features/Auth/login/validation";
import useSnackbar from "@/hooks/useSnackbar";
import { storage } from "@/utils/storage";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const { errorSnackbar } = useSnackbar();
  const methods = useForm<LoginPayload>({
    defaultValues: loginDefaults,
    resolver: yupResolver(loginSchema),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const { mutate, isPending } = authQueries.useLoginQuery();
  const onSubmit = async (body: LoginPayload) => {
    mutate(body, {
      onSuccess: ({ token, id }) => {
        storage.setToken(token);
        storage.setId(id);
        queryClient.clear();
        navigate("/profile/files", { replace: true });
      },
      onError: (err) => {
        errorSnackbar(err);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormInput
        type="email"
        name="email"
        register={register}
        errors={errors}
        label="البريد"
        placeholder="البريد"
        containerClass={"mb-3"}
      />
      <PasswordInput
        label="كلمة المرور"
        type="password"
        register={register}
        errors={errors}
        name="password"
        placeholder="كلمة المرور"
        containerClass={"mb-3"}
      />
      <Link
        target="_blank"
        className="btn btn-sm mb-3 text-primary underline-on-hover"
        to="/auth/forget-password"
      >
        نسيت كلمة المرور
      </Link>
      <div className="mb-0 text-center d-grid">
        <Submit isSubmitting={isPending} small>
          تسجيل الدخول
        </Submit>
      </div>
    </form>
  );
};

export default LoginForm;
