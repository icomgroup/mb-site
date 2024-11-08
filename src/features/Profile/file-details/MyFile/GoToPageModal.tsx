import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import yup from "@/libs/yup";

import FormInput from "@/components/inputs/FormInput";
import Submit from "@/components/buttons/Submit";
import useSnackbar from "@/hooks/useSnackbar";
import ToolTip from "@/components/UI/ToolTip";
import GoToFileIcon from "@/assets/images/GoToFileIcon";

const GoToPageModal = ({
  setPage,
  total,
}: {
  setPage: (num: string) => void;
  total: string;
}) => {
  const [show, setShow] = useState(false);

  const { errorSnackbar } = useSnackbar();

  const methods = useForm<{ pageNum: number }>({
    defaultValues: { pageNum: 0 },
    resolver: yupResolver(
      yup.object({
        pageNum: yup
          .number()
          .max(+total, (max) => `يرجى إدخال رقم أصغر من  ${max.max}`)
          .min(1, (max) => `يرجى إدخال رقم أكبر من  ${max.min - 1}`)
          .typeError("يرجى إدخال أرقام فقط")
          .required(),
      })
    ),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = ({ pageNum }: { pageNum: number }) => {
    if (isNaN(+pageNum)) {
      errorSnackbar("قيمة غير صحيحة! يرجى إدخال أرقام فقط");
    } else {
      setPage(`${Math.max(pageNum, 1)}`);
      setShow(false);
    }
  };

  return (
    <>
      <ToolTip title="انتقل إلى صفحة">
        <Button
          onClick={() => setShow(true)}
          variant="soft-secondary"
          className="go-to-page-btn border-secondary py-1 px-2"
        >
          <GoToFileIcon />
        </Button>
      </ToolTip>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <h2 className="text-primary">انتقال لصفحة</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormInput
              type="number"
              name="pageNum"
              label={`أدخل رقم أصغر من ${total}، وأكبر من ${0}`}
              register={register}
              errors={errors}
              placeholder="رقم الصفحة"
            />
            <div className=" mt-5  d-flex justify-content-center gap-2">
              <Submit isSubmitting={isSubmitting} small>
                انتقال
              </Submit>
              <Button onClick={() => setShow(false)} variant="outline-danger">
                إلغاء
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GoToPageModal;
