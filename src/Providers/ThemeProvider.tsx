import { ReactNode } from "react";
import { ThemeProvider as Provider } from "react-bootstrap";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <Provider dir="rtl">{children}</Provider>;
};

export default ThemeProvider;
