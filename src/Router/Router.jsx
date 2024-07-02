import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Dashboard/DashboardPages.jsx/Dashboard";
import FoodOrder from "../Dashboard/DashboardPages.jsx/FoodOrder";
import ManageMenu from "../Dashboard/DashboardPages.jsx/ManageMenu";
import CustomerReview from "../Dashboard/DashboardPages.jsx/CustomerReview";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children : [
        {
            path: '/',
           element: <Dashboard />
        },
        {
          path: '/foodOrder',
          element: <FoodOrder />
        },
        {
          path: '/manage-menu',
          element: <ManageMenu />
        },
        {
          path: '/customer-review',
          element:<CustomerReview />
        }
      ]
    },
  ]);