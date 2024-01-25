import { Link } from "react-router-dom";

const AuthorSidebar = () => {
    return (
        <ul className="space-y-2">
           <li className="p-2 cursor-pointer"><Link to="dashboard/author-home">Author Home</Link></li>
           <li className="p-2 cursor-pointer"><Link to="dashboard/admin-home">My Blogs</Link></li>
           <li className="p-2 cursor-pointer"><Link to="dashboard/add-blog">Add Blog</Link></li>

        </ul>
    );
};

export default AuthorSidebar;