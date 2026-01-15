import UserManagement from "../components/pages/UserManagement";
import Home from "../components/pages/Home";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path:"/user_management",
    exact: false,
    children: <UserManagement />
  },
];