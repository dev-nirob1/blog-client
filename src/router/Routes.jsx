import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import App from "../App";
import Dashboard from "../layout/Dashboard";
import Tabs from "../components/pages/Authentications/Tabs";
import ResetPassword from "../components/pages/Authentications/ResetPassword";
import AdminHome from "../components/pages/dashboard/admin/AdminHome";
import AuthorHome from "../components/pages/dashboard/author/AuthorHome";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/login',
                element: <Tabs />
            },
            {
                path: '/reset-password',
                element: <ResetPassword />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'dashboard/admin-home',
                element: <AdminHome />
            },
            {
                path: 'dashboard/author-home',
                element: <AuthorHome />
            },
        ]
    }
]);
export default router