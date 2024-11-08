import { NoteFile } from "@/API/notes/types";
import { NavLink } from "react-router-dom";

type Props = {
  file: NoteFile;
};
const FileItem = ({ file }: Props) => {
  return (
    <li className="note-file-item">
      <NavLink to={`/profile/notes/${file.id}`}>{file.name}</NavLink>
    </li>
  );
};

export default FileItem;
