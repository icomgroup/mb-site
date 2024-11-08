import { Button, Stack } from "react-bootstrap";

import errorImg from "@/assets/images/feedback/error.png";

type Props = {
  retry?: () => void;
  message: string | undefined;
  className?: string;
};

const ClientError = ({ retry, message, className }: Props) => {
  return (
    <Stack gap={1} className={`${className ?? ""} error-section-wrapper`}>
      <div className="mx-auto w-fit error-section">
        <img src={errorImg} />
      </div>
      <p className="h5 text-primary text-center mb-1">
        عذراً، حصل أمر ما خاطئ.
      </p>
      {message && <p className="h6 text-primary text-center">{message}</p>}
      {retry && (
        <Button
          onClick={retry}
          variant="primary"
          size="sm"
          className="mt-2 mx-auto w-fit"
        >
          إعادة المحاولة مرة أخرى
        </Button>
      )}
    </Stack>
  );
};
export default ClientError;
