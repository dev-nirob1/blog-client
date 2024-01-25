import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <ul className="space-y-2">
            <li className="p-2 font-semibold hover:bg-rose-600 cursor-pointer"><Link className="block" to="dashboard/admin-home">Admin Home</Link></li>

            <li className="p-2 font-semibold hover:bg-rose-600 cursor-pointer"><Link className="block" to="dashboard/add-blog">Add Blog</Link></li>

            <li className="p-2 font-semibold hover:bg-rose-600 cursor-pointer"><Link className="block" to="dashboard/my-blogs">My Blogs</Link></li>

            <li className="p-2 font-semibold hover:bg-rose-600 cursor-pointer"><Link className="block" to="dashboard/manage-blogs">Manage All Blogs</Link></li>

            <li className="p-2 font-semibold hover:bg-rose-600 cursor-pointer"><Link className="block" to="dashboard/manage-users">Manage Users</Link></li>

        </ul>
    );
};

export default Sidebar;