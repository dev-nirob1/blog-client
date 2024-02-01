import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import App from "../App";
import Dashboard from "../layout/Dashboard";
import Tabs from "../components/pages/Authentications/Tabs";
import ResetPassword from "../components/pages/Authentications/ResetPassword";
import AdminHome from "../components/pages/dashboard/admin/AdminHome";
import AuthorHome from "../components/pages/dashboard/author/AuthorHome";
import MyBlogs from "../components/pages/dashboard/author/MyBlogs";
import ManageBlogs from "../components/pages/dashboard/admin/ManageBlogs/ManageBlogs";
import ManageUsers from "../components/pages/dashboard/admin/ManageUsers/ManageUsers";
import AddBlog from "../components/AddBlog/AddBlog";
import Blogs from "../components/pages/Blogs/Blogs";
import BlogDetails from "../components/pages/BlogDetails/BlogDetails";


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
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/blog/details/:id',
                element: <BlogDetails />
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