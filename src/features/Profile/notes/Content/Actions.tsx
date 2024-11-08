import LoadingButton from "@/components/buttons/LoadingButton";
import ToolTip from "@/components/UI/ToolTip";
import FeatherIcon from "feather-icons-react";
import { Button } from "react-bootstrap";

type Props = {
  isEditing: boolean;
  isLoadind: boolean;
  onSave: () => void;
  onCancel: () => void;
  onEnableEditing: () => void;
};
const Actions = ({
  isEditing,
  isLoadind,
  onCancel,
  onSave,
  onEnableEditing,
}: Props) => {
  if (!isEditing)
    return (
      <div className="d-flex justify-content-end gap-1 me-auto">
        <ToolTip title="تعديل الملف">
          <Button
            aria-label="تعديل الملف"
            id="test"
            size="sm"
            variant="outline-secondary"
            className="border-0"
            onClick={onEnableEditing}
          >
            <FeatherIcon icon="edit" />
          </Button>
        </ToolTip>
      </div>
    );
  return (
    <div className="d-flex gap-1  justify-content-end me-auto">
      <LoadingButton
        aria-label="حفظ التعديلات"
        title="حفظ التعديلات"
        variant="outline-primary"
        className="border-0"
        onClick={onSave}
        small
        label={<FeatherIcon icon="save" />}
        isLoading={isLoadind}
      />
      <ToolTip title="إلغاء التعديلات">
        <Button
          aria-label="إلغاء التعديلات"
          size="sm"
          variant="outline-danger"
          className="border-0"
          onClick={onCancel}
        >
          <FeatherIcon icon="x" />
        </Button>
      </ToolTip>
    </div>
  );
};

export default Actions;
