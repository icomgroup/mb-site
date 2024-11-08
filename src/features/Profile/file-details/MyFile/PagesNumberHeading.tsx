import { pagesNumberFormater } from "@/utils/transform";
import { Badge } from "react-bootstrap";

type Props = {
  num: number;
};

const PagesNumberHeading = ({ num }: Props) => {
  return (
    <div className="file-pages-num">
      <hr />
      <Badge bg="" className="num-badge badge-soft-primary">
        {pagesNumberFormater(num)}
      </Badge>
    </div>
  );
};

export default PagesNumberHeading;
