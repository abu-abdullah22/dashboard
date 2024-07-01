import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Dashboard/DashboardPages.jsx/Dashboard";
import FoodOrder from "../Dashboard/DashboardPages.jsx/FoodOrder";

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
        }
      ]
    },
  ]);