import NewFileButton from "@/features/Profile/notes/Sidebar/NewFileButton";
import FileItem from "@/features/Profile/notes/Sidebar/FileItem";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import { Collapse } from "react-bootstrap";
import RenameFolderButton from "@/features/Profile/notes/Sidebar/RenameFolderButton";
import DeleteFolderButton from "@/features/Profile/notes/Sidebar/DeleteFolderButton";
import { NoteFolder } from "@/API/notes/types";

type Props = {
  folder: NoteFolder;
};
const FolderItem = ({ folder }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={`note-folder-item ${open ? "opened" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <FeatherIcon icon={`${open ? "chevron-up" : "chevron-down"}`} />
        {folder.name}
      </button>
      <Collapse in={open} className="collapse-wrapper">
        <div id="example-collapse-text">
          <div className=" collapse-content">
            <ul className="list-unstyled pe-0 ps-0 relative">
              {(!folder.notes || folder.notes?.length === 0) && (
                <li className="fs-12">لا يوجد ملفات</li>
              )}
              {folder.notes?.map((file) => (
                <FileItem key={file.id} file={file} />
              ))}
            </ul>
          </div>
          <div className="me-1 my-1 justify-content-around d-flex gap-1">
            <NewFileButton folderId={folder.id} />
            <RenameFolderButton folderId={folder.id} name={folder.name} />
            <DeleteFolderButton id={folder.id} name={folder.name} />
          </div>
        </div>
      </Collapse>
    </li>
  );
};

export default FolderItem;
