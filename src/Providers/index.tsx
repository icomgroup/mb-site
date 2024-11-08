import { ReactNode } from "react";

import ThemeProvider from "@/Providers/ThemeProvider";
import QueryClientProvider from "@/Providers/QueryClientProvider";
import SnackbarProvider from "@/Providers/SnackbarProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <SnackbarProvider>{children}</SnackbarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Providers;
