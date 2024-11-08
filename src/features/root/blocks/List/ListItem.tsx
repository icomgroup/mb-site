import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

import { Block } from "@/API/files/types";
import FilesNumberBadge from "@/components/UI/FilesNumberBadge";

type Props = {
  data: Block;
};

const BlockListItem = ({ data }: Props) => {
  return (
    <div
      className="category-item mb-4 p-4 rounded"
      data-aos="fade-up"
      data-aos-duration="300"
    >
      <h4 className="fw-semibold h2">
        <Link to="/pages/blog/post">{data.name}</Link>
      </h4>
      <p className="text-muted">{data.description}</p>
      <div className="mt-3 d-flex gap-2 align-items-center justify-content-between">
        <Link
          to={`/files/${data.id}`}
          className="btn btn-primary btn-sm w-fit d-flex gap-1 align-items-center"
        >
          <FeatherIcon icon="arrow-right" size={20} />
          عرض التفاصيل
        </Link>
        <FilesNumberBadge number={data.file_count} />
      </div>
    </div>
  );
};

export default BlockListItem;
