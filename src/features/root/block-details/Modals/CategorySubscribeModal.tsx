import accountQueries from "@/API/account/queries";
import fielsQueries from "@/API/files/queries";
import LoadingButton from "@/components/buttons/LoadingButton";
import ToolTip from "@/components/UI/ToolTip";
import controllers from "@/constants/controllers";
import { queryClient } from "@/context/queryClient";
import useSnackbar from "@/hooks/useSnackbar";
import { pointsFormater } from "@/utils/transform";
import FeatherIcon from "feather-icons-react";
import { Button, Modal, Placeholder } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";

const CategorySubscribeModal = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const fileId = searchParams.get("block-id") ?? "";
  const points = searchParams.get("p") ?? "";
  const { successSnackbar, errorSnackbar } = useSnackbar();
  const { mutate, isPending } = fielsQueries.useBuyBlockMutation();
  const { data, isError, isLoading, isSuccess, refetch } =
    accountQueries.useInfoQuery();
  const handleSubscribe = () => {
    mutate(fileId, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [controllers.BLOCKS, "details", id],
        });
        queryClient.invalidateQueries({
          queryKey: [controllers.BLOCKS, "files", id],
        });
        queryClient.invalidateQueries({
          queryKey: [controllers.USER, "my-cat"],
        });
        queryClient.invalidateQueries({
          queryKey: [controllers.CENTERS, "all", id],
        });
        queryClient.invalidateQueries({
          queryKey: [controllers.USER, "info"],
        });
        successSnackbar("تم الاشتراك بالكتلة بنجاح");
        onClose();
      },
      onError: (err) => {
        errorSnackbar(err);
      },
    });
  };
  function onClose() {
    searchParams.delete("block-id");
    searchParams.delete("p");
    setSearchParams(searchParams, { replace: true });
  }
  return (
    <Modal
      show={!!fileId}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onClose}
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <h2 className="text-primary">اشتراك بالكتلة</h2>
        <p className="text-center d-flex mx-auto justify-content-center">
          رصيدك الحالي: {isSuccess && data && pointsFormater(data.points)}
          {isLoading && (
            <Placeholder animation="glow" as="div">
              <Placeholder
                xs={3}
                style={{
                  borderRadius: "10px",
                  padding: "0 50px",
                  margin: "0 10px 0",
                }}
              />
            </Placeholder>
          )}
          {isError && (
            <span className="d-flex gap-2 me-2 fs-13 align-items-center">
              حدث خطأ ما!
              <ToolTip title="إعادة المحاولة">
                <button onClick={() => refetch()}>
                  <FeatherIcon size={15} icon="refresh-cw" />
                </button>
              </ToolTip>
            </span>
          )}
        </p>
        <p className="text-center">قيمة الاشتراك: {pointsFormater(+points)}</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <LoadingButton
          isLoading={isPending}
          onClick={handleSubscribe}
          variant="primary"
          label="اشترك"
          small
        />
        <Button
          disabled={isPending}
          size="sm"
          onClick={onClose}
          variant="outline-danger"
        >
          إلغاء
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CategorySubscribeModal;
