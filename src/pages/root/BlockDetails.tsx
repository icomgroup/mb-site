import { Container } from "react-bootstrap";

import FilesList from "@/features/root/block-details/FilesList";
import BlockDetialsHero from "@/features/root/block-details/Hero";
import SubscribeModals from "@/features/root/block-details/Modals";

const BlockDetials = () => {
  return (
    <>
      <BlockDetialsHero />
      <Container>
        <FilesList />
      </Container>
      <SubscribeModals />
    </>
  );
};

export default BlockDetials;
