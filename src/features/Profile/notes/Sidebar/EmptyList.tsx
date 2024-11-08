import FeatherIcon from "feather-icons-react";

const EmptyList = () => {
  return (
    <div className="text-center h5 mt-5">
      <FeatherIcon icon="folder" size={100} />
      <div className="mt-3">لا يوجد مجلدات</div>
    </div>
  );
};

export default EmptyList;
