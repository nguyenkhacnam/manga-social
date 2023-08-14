import Layout from "../pages/layout";
import Index from "../pages";
import Page_login from "../pages/Login/login";
import Page_comic from "../pages/comic/comic";
import Page_SignIn from "../pages/Signin/Sign_in";
import Page_Genres from "../pages/Genres/Genres";
import Page_chapper from "../pages/Chapper/chapper";
import { createBrowserRouter } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import ContactUs from "../pages/ContactUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/comic",
        element: <Page_comic />,
      },
      {
        path: "/genres",
        element: <Page_Genres />,
      },
      {
        path: "/chapper",
        element: <Page_chapper />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Page_login />,
  },
  {
    path: "/register",
    element: <Page_SignIn />,
  },
]);
export default router;
