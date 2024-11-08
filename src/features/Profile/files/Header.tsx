import CategoriesFillter from "@/features/Profile/files/CategoriesFillter";
import FeatherIcon from "feather-icons-react";
import { Dispatch, SetStateAction } from "react";
import { Button } from "react-bootstrap";

const Header = ({
  setGridView,
  isGrid,
}: {
  setGridView: Dispatch<SetStateAction<boolean>>;
  isGrid: boolean;
}) => {
  return (
    <div className="d-flex justify-content-sm-end justify-content-center align-items-center flex-wrap mb-4 ms-sm-5 gap-1">
      <CategoriesFillter />
      <Button
        onClick={() => setGridView(false)}
        size="sm"
        variant={isGrid ? "outline-secondary" : "secondary"}
        className="border-0 py-1 px-2"
      >
        <FeatherIcon icon="list" />
      </Button>
      <Button
        onClick={() => setGridView(true)}
        size="sm"
        variant={isGrid ? "secondary" : "outline-secondary"}
        className="border-0 py-1 px-2"
      >
        <FeatherIcon icon="grid" />
      </Button>
    </div>
  );
};

export default Header;
