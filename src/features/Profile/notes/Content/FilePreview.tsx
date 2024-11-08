import FeatherIcon from "feather-icons-react";
import parse from "html-react-parser";

const FilePreview = ({ data }: { data: string }) => {
  if (data.trim().length === 0 || data.trim() === "-")
    return (
      <p className="text-muted h6">
        الملف لا يحوي بيانات.. اضغط
        <FeatherIcon size={16} className="mx-1" icon="edit" />
        لإضافة متحوى.
      </p>
    );
  return <div className="ck-content">{parse(data)}</div>;
};

export default FilePreview;
