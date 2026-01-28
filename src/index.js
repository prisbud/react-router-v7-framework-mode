import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./helper/queryClient";
import App from "./App";
import Products, { productsLoader } from "./Components/Products";
import { QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
    loader: productsLoader,
    loadingElement: <p>Loading products...</p>,
    errorElement: <p>Error page</p>,
  },
]);

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
