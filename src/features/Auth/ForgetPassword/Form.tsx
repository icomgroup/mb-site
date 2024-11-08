import authQueries from "@/API/auth/queries";
import { ForgetPasswordBody } from "@/API/auth/types";
import Submit from "@/components/buttons/Submit";
import FormInput from "@/components/inputs/FormInput";
import useSnackbar from "@/hooks/useSnackbar";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import yup from "@/libs/yup";

const ForgetPasswordForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const { errorSnackbar } = useSnackbar();
  const methods = useForm<ForgetPasswordBody>({
    defaultValues: { email: "" },
    resolver: yupResolver(
      yup.object({
        email: yup.string().email("يرجى إدخال بريد صالح").required(),
      })
    ),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const { mutate, isPending } = authQueries.useForgetPasswordQuery();
  const onSubmit = async (body: ForgetPasswordBody) => {
    mutate(body, {
      onSuccess: () => {
        onSuccess();
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
        placeholder="example@gmail.com"
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
export default ForgetPasswordForm;
