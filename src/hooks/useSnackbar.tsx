import { parseBackendError, ParseBackendErrorParams } from "@/utils/apiHelpers";
import { AxiosError } from "axios";
import { useSnackbar as useNotiSnackbar } from "notistack";

const useSnackbar = () => {
  const { enqueueSnackbar } = useNotiSnackbar();

  const errorSnackbar = (
    err: unknown,
    params: ParseBackendErrorParams = {}
  ) => {
    let message = "حصل أمر ما خاطئ!";
    if (err instanceof AxiosError) {
      message = parseBackendError(err, params) ?? message;
    }
    if (typeof err === "string") message = err;
    enqueueSnackbar(message, { variant: "error" });
  };
  const successSnackbar = (msg: string) => {
    enqueueSnackbar(msg, { variant: "success" });
  };
  const infoSnackbar = (msg: string) => {
    enqueueSnackbar(msg, { variant: "info" });
  };

  const warningSnackbar = (msg: string) => {
    enqueueSnackbar(msg, { variant: "warning" });
  };

  return { errorSnackbar, successSnackbar, infoSnackbar, warningSnackbar };
};

export default useSnackbar;
