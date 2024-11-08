import { AxiosError } from "axios";

import { parseBackendError } from "@/utils/apiHelpers";
import { Navigate } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";

export type ErrorProps = {
  error: unknown;
  retry?: () => void;
  className?: string;
};

export const InlineError = ({ error, retry, className }: ErrorProps) => {
  let message;
  let status = -1; //
  if (error instanceof AxiosError) {
    message = parseBackendError(error);
    status = error.response?.status ?? status;
    if (error?.code === "ERR_NETWORK")
      message = "خطأ بالشبكة! يرجى التحقق من الإتصال بالإنترنت.";
  }
  if (status == 401) {
    return <Navigate to="/login" />;
  }
  return (
    <Stack gap={1} className={className ?? ""}>
      <p className="h5 text-primary text-center mb-1">عذراً!</p>
      <p className="h6 text-primary text-center">
        {message ? message : "حصل أمر ما خاطئ! يرجى إعادة المحاولة مرة أخرى"}
      </p>
      {retry && (
        <Button onClick={retry} variant="primary" className="mt-2">
          إعادة المحاولة مرة أخرى
        </Button>
      )}
    </Stack>
  );
};
export default InlineError;
