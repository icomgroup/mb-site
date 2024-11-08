import { File } from "@/API/files/types";
import BackendImage from "@/components/images/BackendImage";
import { daysNumberFormater, pagesNumberFormater } from "@/utils/transform";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
  data: File;
  isGridView: boolean;
};
const FileItem = ({ data, isGridView }: Props) => {
  return (
    <Link
      to={`/profile/files/${data.id}`}
      className={`${
        isGridView ? "grid-file-item" : "list-file-item"
      } profile-file-item overflow-hidden rounded-3 w-full h-100`}
    >
      <div className="img-box">
        <BackendImage url={data.img} alt={data.name} />
      </div>
      <div className="flex-grow-1 py-3 px-3">
        <h3 className="fw-large m-0 h4 mb-2 text-align-right">{data.name}</h3>
        <div className=" d-flex align-items-center gap-2 flex-wrap">
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
        <p className="sp-line-2 mt-2 me-0 text-end">{data.description}</p>
      </div>
    </Link>
  );
};

export default FileItem;
