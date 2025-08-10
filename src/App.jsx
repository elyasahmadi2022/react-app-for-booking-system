import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SkeletonTheme } from "react-loading-skeleton";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cities from "./pages/Cities";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Payment from "./pages/Payment";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import TravelGuides from "./pages/TravelGuides";
import Users from "./pages/Users";
import SignUpLayout from "./ui/AccountLayout";
import AdminLayout from "./ui/AdminLayout";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { GlobalProvider } from "./ui/GlobalContext";
import Settings from "./pages/Settings";
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
        {
          path: "/hotel/:id",
          element: <Hotel />,
        },
      ],
    },
    {
      path: "/account/",
      Component: SignUpLayout,
      children: [
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "/admin/",
      Component: AdminLayout,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);
  return (
    <GlobalProvider>
      <SkeletonTheme baseColor="#f8f9fa" highlightColor="#6c757d">
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </SkeletonTheme>
    </GlobalProvider>
  );
}

export default App;
