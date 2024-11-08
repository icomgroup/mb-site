import { Button } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";

import ToolTip from "@/components/UI/ToolTip";
import useSnackbar from "@/hooks/useSnackbar";

type Props = {
  text: string;
  title?: string;
  className?: string;
  msg?: string;
};
const CopyToClipboardButton = ({
  text,
  className = "",
  title = "نسخ",
  msg,
}: Props) => {
  const { infoSnackbar } = useSnackbar();

  const handleCopy = async () => {
    try {
      if ("clipboard" in navigator) {
        await navigator.clipboard.writeText(text);
        infoSnackbar(msg ?? "تم النسخ");
      } else {
        document.execCommand("copy", true, text);
        infoSnackbar(msg ?? "تم النسخ");
      }
    } catch (error) {
      console.error("Unable to copy to clipboard:", error);
    }
  };

  return (
    <div className={className}>
      <ToolTip title={title}>
        <Button
          onClick={handleCopy}
          variant="outline-secondary"
          className="border-0 py-1 px-2 ml-auto d-block"
        >
          <FeatherIcon icon="copy" />
        </Button>
      </ToolTip>
    </div>
  );
};

export default CopyToClipboardButton;
