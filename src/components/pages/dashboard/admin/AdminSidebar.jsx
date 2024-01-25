import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <ul className="space-y-2">
            <li className="p-2 hover:bg-blue-600 cursor-pointer"><Link to="dashboard/admin-home">Admin Home</Link></li>

            <li className="p-2 hover:bg-blue-600 cursor-pointer"><Link to="dashboard/manage-blogs">Manage Blogs</Link></li>

            <li className="p-2 hover:bg-blue-600 cursor-pointer"><Link to="dashboard/manage-users">Manage Users</Link></li>
            
            <li className="p-2 hover:bg-blue-600 cursor-pointer"><Link to="dashboard/admin-home">Admin-Home</Link></li>
        </ul>
    );
};

export default Sidebar;