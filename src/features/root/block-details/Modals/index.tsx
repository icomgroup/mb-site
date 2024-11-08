import { useSearchParams } from "react-router-dom";
import { storage } from "@/utils/storage";

import CategorySubscribeModal from "@/features/root/block-details/Modals/CategorySubscribeModal";
import SubscribeModal from "@/features/root/block-details/Modals/SubscribeModal";
import LoginFirstModal from "@/features/root/block-details/Modals/LoginFirstModal";

const SubscribeModals = () => {
  const [searchParams] = useSearchParams();
  const fileId = searchParams.get("file-id");
  const blockId = searchParams.get("block-id");
  const token = storage.getToken();
  if (!token) return <LoginFirstModal />;
  return (
    <>
      {fileId && <SubscribeModal />}
      {blockId && <CategorySubscribeModal />}
    </>
  );
};

export default SubscribeModals;
