import FileEditorDetails from "@/features/Profile/notes/Content/FileEditorDetails";
import FeatherIcon from "feather-icons-react";

import { useParams } from "react-router-dom";

const Content = () => {
  const { id } = useParams();
  return (
    <div className="flex-1 notes-content">
      {id && <FileEditorDetails id={id} />}
      {!id && (
        <div className="h-full d-flex text-gray justify-content-center align-items-center">
          <FeatherIcon icon="file" size={100} />
        </div>
      )}
    </div>
  );
};

export default Content;
