import TabTitle from "@/features/Profile/components/TabTitle";
import NotesContextProvider from "@/features/Profile/contexts/NotesContextProvider";
import Content from "@/features/Profile/notes/Content";
import CreateNewDialog from "@/features/Profile/notes/Dialog";
import Sidebar from "@/features/Profile/notes/Sidebar";

const Notes = () => {
  return (
    <NotesContextProvider>
      <TabTitle title="ملاحظاتي" subtitle="إدارة الملاحظات." />
      <div className="notes-card bg-white rounded d-flex gap-2">
        <Sidebar />
        <Content />
      </div>
      <CreateNewDialog />
    </NotesContextProvider>
  );
};

export default Notes;
