import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import TravelGuides from "./pages/TravelGuides";
import Users from "./pages/Users";
import Cities from "./pages/Cities";
import Services from "./pages/Services";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Hotel from "./pages/Hotel";
import { SkeletonTheme } from "react-loading-skeleton";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: AppLayout,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/hotel/:id",
          element: <Hotel />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
        {
          path: "/cities",
          element: <Cities />,
        },
        {
          path: "/guide",
          element: <TravelGuides />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/services",
          element: <Services />,
        },
      ],
    },
  ]);
  return (
    <SkeletonTheme baseColor="#f8f9fa" highlightColor="#6c757d">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </SkeletonTheme>
  );
}

export default App;
