import FeatherIcon from "feather-icons-react";
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import notesQueries from "@/API/notes/queries";
import InlineError from "@/components/feedback/InlineError";
import SectionLoading from "@/components/feedback/SectionLoading";
import EmptyList from "@/features/Profile/notes/Sidebar/EmptyList";
import FolderItem from "@/features/Profile/notes/Sidebar/FolderItem";
import NewFolderButton from "@/features/Profile/notes/Sidebar/NewFolderButton";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { data, isLoading, isError, error, isSuccess } =
    notesQueries.useGetAllNoteFoldersQuery();
  let content: ReactNode = <EmptyList />;
  if (data && data.result.length !== 0) {
    content = (
      <ul className="list-unstyled p-0 m-0 mt-3">
        {data.result.map((folder) => (
          <FolderItem key={folder.id} folder={folder} />
        ))}
      </ul>
    );
  }
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        className="sidebar-toggler d-flex align-items-center gap-1 btn btn-sm btn-outline-secondary rounded-2"
        onClick={() => setOpen((prev) => !prev)}
      >
        <FeatherIcon icon={`${open ? "chevron-left" : "chevron-right"}`} />
        {open ? "إغلاق القائمة" : "عرض القائمة"}
      </button>
      <div
        className={`notes_sidebar sidebar bg-gradient3 ${open ? "active" : ""}`}
      >
        <button
          className="sidebar-toggler d-flex align-items-center gap-1 btn btn-sm btn-outline-secondary rounded-2"
          onClick={() => setOpen((prev) => !prev)}
        >
          <FeatherIcon icon={`${open ? "chevron-left" : "chevron-right"}`} />
          {open ? "إغلاق القائمة" : "عرض القائمة"}
        </button>
        <NewFolderButton />
        {isLoading && <SectionLoading className="mt-5" />}
        {isError && <InlineError className="mt-5" error={error} />}
        {isSuccess && content}
      </div>
    </>
  );
};

export default Sidebar;
