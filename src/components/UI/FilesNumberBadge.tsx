import { filesNumberFormater } from "@/utils/transform";
import classNames from "classnames";
import { Badge } from "react-bootstrap";

type Props = {
  className?: string;
  number: number;
  withoutUnit?: boolean;
};
const FilesNumberBadge = ({
  className,
  number,
  withoutUnit = false,
}: Props) => {
  const variant = number === 0 ? "danger" : number < 6 ? "primary" : "teal";
  return (
    <Badge
      bg=""
      className={classNames(`badge-soft-${variant}`, "mb-1", className)}
    >
      {withoutUnit ? number : filesNumberFormater(number)}
    </Badge>
  );
};

export default FilesNumberBadge;
