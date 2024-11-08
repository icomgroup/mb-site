import { File } from "@/API/files/types";
import BackendImage from "@/components/images/BackendImage";
import ToolTip from "@/components/UI/ToolTip";
import {
  daysNumberFormater,
  pagesNumberFormater,
  pointsFormater,
} from "@/utils/transform";
import FeatherIcon from "feather-icons-react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
  data: File;
};

const FileItem = ({ data }: Props) => {
  return (
    <div
      className="file-item overflow-hidden rounded-3 mb-3"
      data-aos="fade-up"
    >
      <div className="img-box">
        {data.is_subscribed && (
          <span className="subscriber-badge">
            <FeatherIcon icon="check" size={15} />
            مشترك
          </span>
        )}
        <BackendImage url={data.img} alt={data.name} />
      </div>
      <div className="flex-grow-1 p-3">
        <div className="gap-2 d-flex flex-wrap">
          <Badge bg="" className="badge-soft-primary w-fit">
            {pointsFormater(data.points)}
          </Badge>
          <Badge bg="" className="badge-soft-teal w-fit">
            {pagesNumberFormater(data.number_of_page)}
          </Badge>
          <Badge bg="" className="badge-soft-secondary w-fit">
            مدة الدراسة: {daysNumberFormater(data.study_time)}
          </Badge>
          <Badge bg="" className="badge-soft-orange w-fit">
            {data.subject}
          </Badge>
        </div>
        <h3 className="mt-3 mb-0 fw-large">{data.name}</h3>

        <ToolTip title={data.description}>
          <p className="mb-3 mt-0">{data.description}</p>
        </ToolTip>
        {!data.is_subscribed && (
          <Link
            to={`?file-id=${data.id}&p=${data.points}`}
            className="btn btn-primary btn-sm"
          >
            اشتراك
          </Link>
        )}
        {data.is_subscribed && (
          <Link
            to={`/profile/files/${data.id}`}
            className="btn btn-teal btn-sm"
          >
            عرض
          </Link>
        )}
      </div>
    </div>
  );
};

export default FileItem;
