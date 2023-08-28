import Layout from "../pages/layout";
import Index from "../pages";

import Page_comic from "../pages/comic/comic";
import Page_Genres from "../pages/Genres/Genres";
import { createBrowserRouter } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import Page_Comming from "../pages/Comming/Comming";
import Page_News from "../pages/News/News";
import ChapterPage from "../pages/ChapterPage/ChapterPage";
import ReadChapter from "../pages/ReadChapter/ReadChapter";
import Nhap from "../pages/ChapterPage/nhap";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ConfirmAcount from "../pages/ConfirmAcount/ConfirmAcount";
import ReadNews from "../pages/ReadNews/ReadNews";
import Page_SeeAll from "../pages/PageSeeAll/PageSeeAll";
import SearchResults from "../pages/SearchResults";
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
                path: "/contact-us",
                element: <ContactUs />,
            },

            {
                path: "/:id",
                element: <Page_SeeAll />,
            },

            {
                path: "commingsoon",
                element: <Page_Comming />,
            },
            {
                path: "news",
                element: <Page_News />,
            },

            {
                path: "/manga/:slug",
                element: <ChapterPage />,
            },
            {
                path: "/manga/:slug/:id",
                element: <ReadChapter />,
            },
            {
                path: "news/:id",
                element: <ReadNews />,
            },
            {
              path: "/search",
              element: <SearchResults />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/user-profile",
        element: <UserProfile />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/confirm-acount",
        element: <ConfirmAcount />,
    },
    {
        path: "/nhap",
        element: <Nhap />,
    },
]);
export default router;
