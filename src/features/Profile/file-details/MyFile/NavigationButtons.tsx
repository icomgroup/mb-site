import FeatherIcon from "feather-icons-react";
import { Button } from "react-bootstrap";

import { FileStreamResponseHeaders } from "@/API/files/types";
import ToolTip from "@/components/UI/ToolTip";

export type Props = {
  headers: FileStreamResponseHeaders;
  setPage: (page: string | null) => void;
};
const NavigationButtons = ({ headers, setPage }: Props) => {
  return (
    <div className="navigation-buttons py-2">
      <ToolTip title="الصفحة السابقة">
        <Button
          disabled={!headers.PrevPage}
          onClick={() => setPage(headers.PrevPage)}
          size="sm"
          className="p-1 p-lg-2"
        >
          <FeatherIcon icon="arrow-right" />
        </Button>
      </ToolTip>
      <p className="m-0">{` ${headers.TotalPage} / ${headers.PageNo}`}</p>
      <ToolTip title="الصفحة التالية">
        <Button
          disabled={!headers.NextPage}
          onClick={() => setPage(headers.NextPage)}
          size="sm"
          className="p-1 p-lg-2"
        >
          <FeatherIcon icon="arrow-left" />
        </Button>
      </ToolTip>
    </div>
  );
};

export default NavigationButtons;
