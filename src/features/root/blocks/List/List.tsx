import { Col } from "react-bootstrap";
import { InfiniteData } from "@tanstack/react-query";

import { GetAllBlocks } from "@/API/files/types";
import BlockListItem from "@/features/root/blocks/List/ListItem";

const BlockList = ({
  data,
}: {
  data: InfiniteData<{ data: GetAllBlocks; pageParam: number }, unknown>;
}) => {
  return data.pages.map((page) =>
    page.data.result.data.map((item, index) => (
      <Col lg={4} key={index.toString()}>
        <BlockListItem data={item} />
      </Col>
    ))
  );
};

export default BlockList;
