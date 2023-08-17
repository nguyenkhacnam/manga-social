import Layout from "../pages/layout";
import Index from "../pages";

import Page_comic from "../pages/comic/comic";

import Page_Genres from "../pages/Genres/Genres";
import Page_chapper from "../pages/Chapper/chapper";
import { createBrowserRouter } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import Page_NewRelease from "../pages/NewRelease/NewRelease";
import Page_Recent from "../pages/Recent/Recent";
import Page_Comming from "../pages/Comming/Comming";
import Page_News from "../pages/News/News";
import ChapterPage from "../pages/ChapterPage/ChapterPage";
import ReadChapter from "../pages/ReadChapter/ReadChapter";
import Page_Recommended from "../pages/Recommended/Recommended";
import Page_Comedy from "../pages/Comedy/Comedy";
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
                path: "newRelease",
                element: <Page_NewRelease />,
            },
            {
                path: "recent",
                element: <Page_Recent />,
            },
            {
                path: "recommnended",
                element: <Page_Recommended />,
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
                path: "comedy",
                element: <Page_Comedy />,
            },
            {
                path: "chapter/:slug",
                element: <ChapterPage />,
            },
            {
                path: "chapter/:slug/:id",
                element: <ReadChapter />,
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
]);
export default router;
