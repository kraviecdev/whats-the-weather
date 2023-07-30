import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import store from "./core/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 60000,
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </Provider>
);

reportWebVitals();
