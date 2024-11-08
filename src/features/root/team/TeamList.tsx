import { Badge, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { TeamMember } from "@/API/team/types";
import NoData from "@/components/feedback/NoData";
import BackendImage from "@/components/images/BackendImage";
import { ReactQueryPage } from "@/utils/apiHelpers";
import ToolTip from "@/components/UI/ToolTip";

type Props = { list: ReactQueryPage<TeamMember>[] };

const TeamList = ({ list }: Props) => {
  if (list.length === 0) return <NoData />;
  return list.map((page) =>
    page.data.result.data.map((teamMember, index) => {
      return (
        <Col lg={4} md={6} key={index.toString()} className=" mb-4">
          <Link
            to={`?team-id=${teamMember.id}`}
            replace
            className="p-2 rounded p-md-3 team-item"
          >
            <BackendImage
              url={teamMember.img}
              alt="avatar"
              className="d-block rounded"
            />
            <div className="flex-grow-1 mt-3">
              <h5 className="mt-0 mb-1 fw-medium h3 text-primary">
                {teamMember.name}
              </h5>
              <Badge>{teamMember.title}</Badge>
              <ToolTip title={teamMember.description}>
                <p className="text-muted fw-medium mb-0 mt-1">
                  {teamMember.description}
                </p>
              </ToolTip>
            </div>
          </Link>
        </Col>
      );
    })
  );
};

export default TeamList;
