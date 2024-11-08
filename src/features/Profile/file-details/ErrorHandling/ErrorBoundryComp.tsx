import { MyFileError } from "@/features/Profile/file-details/ErrorHandling/MyFileError";
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  msg: string;
}

interface State {
  error?: Error | null;
}

class ErrorBoundryComp extends Component<Props, State> {
  public state: State = {
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.error) {
      throw new MyFileError(this.props.msg, this.state.error);
    }

    return this.props.children;
  }
}

export default ErrorBoundryComp;
