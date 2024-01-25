import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import App from "../App";
import Dashboard from "../layout/Dashboard";
import Tabs from "../components/pages/Authentications/Tabs";
import ResetPassword from "../components/pages/Authentications/ResetPassword";
import AdminHome from "../components/pages/dashboard/admin/AdminHome";
import AuthorHome from "../components/pages/dashboard/author/AuthorHome";
import AddBlog from "../components/pages/dashboard/author/AddBlog";
import MyBlogs from "../components/pages/dashboard/author/MyBlogs";
import ManageBlogs from "../components/pages/dashboard/admin/ManageBlogs/ManageBlogs";
import ManageUsers from "../components/pages/dashboard/admin/ManageUsers/ManageUsers";


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
                path: 'dashboard/add-blog',
                element: <AddBlog />
            },
            {
                path: 'dashboard/my-blogs',
                element: <MyBlogs />
            },
            {
                path: 'dashboard/manage-blogs',
                element: <ManageBlogs />
            },
            {
                path: 'dashboard/manage-users',
                element: <ManageUsers />
            },
            //authors related routes
            {
                path: 'dashboard/author-home',
                element: <AuthorHome />
            },
            {
                path: 'dashboard/add-blog',
                element: <AddBlog />
            },
            {
                path: 'dashboard/my-blogs',
                element: <MyBlogs />
            },
        ]
    }
]);
export default router