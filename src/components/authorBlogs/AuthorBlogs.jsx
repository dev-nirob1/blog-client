import { Link } from "react-router-dom";

const AuthorBlogs = ({ blog }) => {
    const { titleImage, title, category, _id } = blog;
    return (
        <div className="flex flex-col p-2 border rounded-md bg-white hover:scale-105 hover:shadow-md transition-all duration-500">
            <img className="w-full h-[200px] rounded-t-md" src={titleImage} alt="image" />
            <h4 className="text-lg font-medium my-3"><span className="bg-rose-400 rounded-md italic">Category</span> : {category}</h4>
            <p><span className="bg-rose-400 rounded-md italic">Title</span>  {title}</p>
            <Link className="mt-2 text-blue-500 hover:text-indigo-600" to={`/blog/details/${_id}`}>See Details</Link>
        </div>
    );
};

export default AuthorBlogs;