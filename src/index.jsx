import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes/Index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { UserProvider } from "./Context/FormContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const router = createBrowserRouter(routes);

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
