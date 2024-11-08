import { Button, Stack } from "react-bootstrap";

import errorImg from "@/assets/images/feedback/error.png";

type Props = { retry?: () => void; className?: string };

const SomethingWentWrong = ({ retry, className }: Props) => {
  return (
    <Stack gap={1} className={`${className ?? ""} error-section-wrapper`}>
      <div className="error-section">
        <img src={errorImg} />
      </div>
      <p className="h5 text-primary text-center mb-1">عذراً!</p>
      <p className="h6 text-primary text-center">
        حصل أمر ما خاطئ! يرجى إعادة المحاولة مرة أخرى
      </p>
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
export default SomethingWentWrong;
