import { ReactNode } from "react";
import styled from "styled-components";
import {
  SnackbarProvider as Provider,
  SnackbarKey,
  useSnackbar,
} from "notistack";
import { MaterialDesignContent } from "notistack";
import FeatherIcon from "feather-icons-react";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    backgroundColor: "rgb(var(--bs-success-rgb))",
  },
  "&.notistack-MuiContent-error": {
    backgroundColor: "rgb(var(--bs-danger-rgb))",
  },
  "&.notistack-MuiContent-info": {
    backgroundColor: "rgb(var(--bs-info-rgb))",
  },
  "&.notistack-MuiContent-warning": {
    backgroundColor: "rgb(var(--bs-warning-rgb))",
    color: "var(--bs-secondary)",
  },
}));
const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  function SnackbarCloseButton({ snackbarKey }: { snackbarKey: SnackbarKey }) {
    const { closeSnackbar } = useSnackbar();

    return (
      <button
        className="noti-close-btn btn btn-sm p-1 px-sm-2"
        onClick={() => closeSnackbar(snackbarKey)}
      >
        <FeatherIcon icon="x" size={18} />
      </button>
    );
  }
  return (
    <Provider
      action={(snackbarKey) => (
        <SnackbarCloseButton snackbarKey={snackbarKey} />
      )}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      maxSnack={2}
      autoHideDuration={4000}
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        info: StyledMaterialDesignContent,
        warning: StyledMaterialDesignContent,
      }}
    >
      {children}
    </Provider>
  );
};

export default SnackbarProvider;
