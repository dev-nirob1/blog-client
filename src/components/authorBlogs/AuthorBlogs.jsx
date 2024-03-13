import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
const AuthorBlogs = ({ blog }) => {
    const { titleImage, title, category, _id } = blog;
    return (
        <div className="flex flex-col p-2 border rounded-md bg-white hover:scale-105 hover:shadow-md transition-all duration-500">
            <img className="w-full h-[200px] rounded-t-md" src={titleImage} alt="image" />
            <h4 className="text-lg font-medium my-3"><span className="bg-rose-400 rounded-md italic">Category</span> : {category}</h4>
            <p><span className="bg-rose-400 rounded-md italic">Title</span>  {title}</p>

            <div className="flex mt-2 justify-between items-center">
                <Link className="p-2 rounded bg-gray-100 hover:bg-gray-200 text-blue-500 hover:text-indigo-600" to={`/blog/details/${_id}`}>
                    <FaEye size={25} />
                </Link>
                {
                    location.pathname === "/dashboard/author-blogs" &&
                    <Link className="p-2 rounded bg-green-100 hover-bg-green-200 text-green-500 hover:text-green-600" to={`/blog/details/${_id}`}>
                        <FaEdit size={25} />
                    </Link>
                }
                {
                    location.pathname === "/dashboard/author-blogs" && 
                    <Link className="p-2 rounded bg-red-100 hover-bg-red-200  text-red-500 hover:text-red-600" to={`/blog/details/${_id}`}>
                        <FaTrash size={25} />
                    </Link>
                }
            </div>
        </div>
    );
};

export default AuthorBlogs;