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
import AuthorDetails from "../components/pages/Author/AuthorDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <App />,
                loader: ()=> fetch('http://localhost:5000/blogsCount')
            },
            {
                path: '/blogs',
                element: <Blogs />,
            },
            {
                path: '/blog/details/:id',
                element: <BlogDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/blog/${params.id}`)
            },
            {
                path: '/login',
                element: <Tabs />
            },
            {
                path: '/reset-password',
                element: <ResetPassword />
            },
            {
                path: '/author/:email',
                element: <AuthorDetails />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'admin-home',
                element: <AdminHome />
            },
            {
                path: 'add-blog',
                element: <AddBlog />
            },
            {
                path: 'my-blogs',
                element: <MyBlogs />
            },
            {
                path: 'manage-blogs',
                element: <ManageBlogs />
            },
            {
                path: 'manage-users',
                element: <ManageUsers />
            },
            //authors related routes
            {
                path: 'author-home',
                element: <AuthorHome />
            },
            {
                path: 'add-blog',
                element: <AddBlog />
            },
            {
                path: 'author-blogs',
                element: <MyBlogs />
            },
        ]
    }
]);
export default router