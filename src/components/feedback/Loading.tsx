import { Spinner, SpinnerProps } from "react-bootstrap";

const Loading = ({
  small,
  className,
  ...props
}: {
  small?: boolean;
  className?: string;
} & SpinnerProps) => {
  return (
    <Spinner
      {...props}
      {...(small ? { size: "sm" } : {})}
      className={className ?? ""}
      role="status"
      aria-hidden="true"
    />
  );
};
export default Loading;
