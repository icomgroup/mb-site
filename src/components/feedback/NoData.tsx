import { Stack } from "react-bootstrap";

import noDataImg from "@/assets/images/feedback/no-data.png";
import { ReactNode } from "react";

type Props = { className?: string; action?: ReactNode; msg?: string };

const NoData = ({ className, msg = "لا يوجد بيانات", action }: Props) => {
  return (
    <Stack gap={1} className={className ?? ""}>
      <div className="mx-auto w-fit no-data">
        <img src={noDataImg} alt="no data img" />
      </div>
      <p className="fs-13 text-primary text-center">{msg}</p>
      {action && action}
    </Stack>
  );
};
export default NoData;
