import { Link } from "react-router-dom";

const AuthorSidebar = () => {
    return (
        <ul className="space-y-2">
           <li className="font-semibold p-2 hover:bg-rose-600 cursor-pointer"><Link className="block" to="author-home">Author Home</Link></li>
           <li className="font-semibold p-2 hover:bg-rose-600 cursor-pointer"><Link className="block" to="author-blogs">My Blogs</Link></li>
           <li className="font-semibold p-2 hover:bg-rose-600 cursor-pointer"><Link className="block" to="add-blog">Add Blog</Link></li>

        </ul>
    );
};

export default AuthorSidebar;