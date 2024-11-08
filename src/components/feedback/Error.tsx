import { AxiosError } from "axios";

import ClientError from "./ClientError";
import SomethingWentWrong from "./SomethingWentWrong";

import { parseBackendError } from "@/utils/apiHelpers";
import { Navigate } from "react-router-dom";
import { storage } from "@/utils/storage";

export type ErrorProps = {
  error: unknown;
  retry?: () => void;
  className?: string;
  msg404?: string;
};

export const Error = ({ error, retry, msg404, className }: ErrorProps) => {
  let message;
  let status = -1; //
  if (error instanceof AxiosError) {
    message = parseBackendError(error, { not_found_msg: msg404 });
    status = error.response?.status ?? status;
    if (error?.code === "ERR_NETWORK")
      message = "خطأ بالشبكة! يرجى التحقق من الإتصال بالإنترنت.";
  }
  if (status == 401 || status == 403) {
    storage.clearToken();
    return <Navigate to="/auth/login" />;
  }
  return status === 500 ? (
    <SomethingWentWrong retry={retry} className={className} />
  ) : (
    <ClientError message={message} retry={retry} className={className} />
  );
};
export default Error;
