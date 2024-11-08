import accountQueries from "@/API/account/queries";
import Submit from "@/components/buttons/Submit";
import FormInput from "@/components/inputs/FormInput";
import controllers from "@/constants/controllers";
import { queryClient } from "@/context/queryClient";
import useSnackbar from "@/hooks/useSnackbar";
import yup from "@/libs/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ChargeForm = () => {
  const { mutate, isPending } = accountQueries.useChargeMutation();
  const { errorSnackbar, successSnackbar } = useSnackbar();
  const methods = useForm<{ code: string }>({
    defaultValues: { code: "" },
    resolver: yupResolver(yup.object({ code: yup.string().required() })),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = ({ code }: { code: string }) => {
    mutate(code, {
      onSuccess: () => {
        successSnackbar("تم شحن الرصيد بنجاح");
        queryClient.invalidateQueries({ queryKey: [controllers.USER, "info"] });
        reset();
      },
      onError: (err) => {
        errorSnackbar(err, { not_found_msg: "الكود المدخل غير موجود" });
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h4 className="mb-1 mt-0 h3">أدخل الكود لشحن الرصيد</h4>
      <FormInput
        name="code"
        register={register}
        errors={errors}
        label="الكود"
        placeholder="أدخل الكود"
        containerClass={"mb-3"}
      />
      <Submit small isSubmitting={isPending}>
        شحن
      </Submit>
    </form>
  );
};

export default ChargeForm;
