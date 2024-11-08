import { OverlayTrigger, OverlayTriggerProps, Tooltip } from "react-bootstrap";

type Props = {
  title: string;
} & Omit<OverlayTriggerProps, "overlay" | "delay">;

const ToolTip = ({ children, title, ...props }: Props) => {
  return (
    <OverlayTrigger
      delay={100}
      container={document.body}
      overlay={<Tooltip {...props}>{title}</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  );
};

export default ToolTip;
