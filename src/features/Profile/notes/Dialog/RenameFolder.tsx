import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import notesQueries from "@/API/notes/queries";
import Submit from "@/components/buttons/Submit";
import FormInput from "@/components/inputs/FormInput";
import { queryClient } from "@/context/queryClient";
import { useNotesContext } from "@/features/Profile/contexts/notes-context";
import useSnackbar from "@/hooks/useSnackbar";
import yup from "@/libs/yup";
import controllers from "@/constants/controllers";

const RenameFolder = () => {
  const { closeDialog, id, name } = useNotesContext();
  const { mutate, isPending: isPending } =
    notesQueries.useUpdateFolderMutation();
  const { errorSnackbar, successSnackbar } = useSnackbar();
  const methods = useForm<{ name: string }>({
    defaultValues: { name },
    resolver: yupResolver(yup.object({ name: yup.string().required() })),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = ({ name }: { name: string }) => {
    mutate(
      { name, id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [controllers.FOLDERS, "all"],
          });
          successSnackbar(`تم تعديل المجلد`);
          closeDialog();
        },
        onError: (err) => errorSnackbar(err),
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormInput
        name="name"
        label={`اسم المجلد`}
        register={register}
        errors={errors}
        placeholder="الاسم"
      />
      <div className=" mt-5  d-flex justify-content-center gap-2">
        <Submit isSubmitting={isPending} small>
          تعديل
        </Submit>
        <Button onClick={closeDialog} variant="outline-danger">
          إلغاء
        </Button>
      </div>
    </form>
  );
};

export default RenameFolder;
