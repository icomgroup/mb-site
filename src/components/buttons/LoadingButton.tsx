import Loading from "@/components/feedback/Loading";
import ToolTip from "@/components/UI/ToolTip";
import { ReactNode } from "react";
import { Button } from "react-bootstrap";
import { ButtonProps } from "react-bootstrap";

type Props = {
  isLoading: boolean;
  label: ReactNode;
  small?: boolean;
} & Omit<ButtonProps, "size">;

const LoadingButton = ({
  isLoading,
  label,
  small,
  disabled,
  className,
  onClick,
  variant,
  title,
  ...props
}: Props) => {
  if (disabled || !title) {
    return (
      <Button
        {...props}
        onClick={onClick}
        size={small ? "sm" : "lg"}
        disabled={disabled || isLoading}
        variant={variant ?? "primary"}
        className={`${className} d-flex align-items-center justify-content-center`}
      >
        {isLoading && <Loading className="position-absolute" small={small} />}
        <div className={`${isLoading ? "opacity-0" : ""}`}>{label}</div>
      </Button>
    );
  }
  return (
    <ToolTip title={title}>
      <Button
        {...props}
        onClick={onClick}
        size={small ? "sm" : "lg"}
        disabled={disabled || isLoading}
        variant={variant ?? "primary"}
        className={`${className} d-flex align-items-center justify-content-center`}
      >
        {isLoading && <Loading className="position-absolute" small={small} />}
        <div className={`${isLoading ? "opacity-0" : ""}`}>{label}</div>
      </Button>
    </ToolTip>
  );
};

export default LoadingButton;
