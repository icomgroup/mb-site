import { ReactNode } from "react";
import { QueryClientProvider as Provider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/context/queryClient";

type Props = { children: ReactNode };

const QueryClientProvider = ({ children }: Props) => {
  return (
    <Provider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {children}
    </Provider>
  );
};
export default QueryClientProvider;
