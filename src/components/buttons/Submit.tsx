import Loading from "@/components/feedback/Loading";
import { ReactNode, RefObject, forwardRef } from "react";
import { Button } from "react-bootstrap";

type Props = {
  isSubmitting?: boolean;
  error?: boolean;
  small?: boolean;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
};

const Submit = forwardRef(function FR(
  {
    isSubmitting = false,
    error = false,
    disabled,
    children,
    small,
    className,
  }: Props,
  ref
) {
  return (
    <Button
      ref={ref as RefObject<any>}
      disabled={isSubmitting || error || disabled}
      variant="primary"
      type="submit"
      className={`${className} d-flex align-items-center justify-content-center`}
    >
      {isSubmitting && <Loading className="position-absolute" small={small} />}
      <div className={`${isSubmitting ? "opacity-0" : ""}`}>{children}</div>
    </Button>
  );
});
export default Submit;
