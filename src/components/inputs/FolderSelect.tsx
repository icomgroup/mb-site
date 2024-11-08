import { ReactNode } from "react";

import notesQueries from "@/API/notes/queries";
import Loading from "@/components/feedback/Loading";
import SelectInput from "@/components/inputs/SelectInput";

const FolderSelect = ({
  onChange,
  value,
}: {
  onChange: (id: string) => void;
  value: string;
}) => {
  const { data, isLoading, isError } = notesQueries.useGetAllNoteFoldersQuery();
  let content: ReactNode = <option value="-1">لا يوجد مجلدات</option>;
  if (isLoading)
    content = (
      <option value="-1">
        <Loading small />
      </option>
    );
  if (isError) content = <option value="-1">حصل امر ما خاطئ</option>;
  if (data && data.result.length !== 0) {
    content = data.result.map((folder) => (
      <option key={folder.id} value={folder.id}>
        {folder.name}
      </option>
    ));
  }
  return (
    <SelectInput
      label="المجلد"
      title="المجلد"
      className="w-fit py-1 mb-1 me-3"
      name="folder"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {content}
    </SelectInput>
  );
};

export default FolderSelect;
