import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const AuthorDetails = () => {
    return (
        <div className="container mx-auto py-10">
            <div className="max-w-[1080px] mx-auto border p-8">
                <div className="max-w-[800px] mx-auto flex justify-center items-center mb-5">
                    <div className="space-y-5 flex-grow">
                        
                    <div>
                    <h2 className="text-3xl font-bold">Hello World</h2>
                    <em>Role: Author</em>
                    <em>Email: example@gmail.com</em>
                    </div>

                        <div className="flex gap-5">
                            <p>Member since</p>
                            <p>24-4-2023</p>
                        </div>
                    </div>
                    <div>
                        <img className="rounded-full h-32 w-32" src="https://i.ibb.co/4fVGjBw/smiley-man-holding-project-documents.jpg" alt="" />
                    </div>
                </div>
               <div className="grid grid-cols-3 gap-5 rounded-md pt-5 border-t-4">
               <div className="flex flex-col p-2 border rounded-md bg-white hover:scale-105 hover:shadow-md transition-all duration-500">
                    <img className="w-full h-[200px] rounded-t-md" src="https://i.ibb.co/4fVGjBw/smiley-man-holding-project-documents.jpg" alt="image" />
                    <h4 className="text-lg font-medium my-3"><span className="bg-rose-400 rounded-md italic">Category</span> : category</h4>
                    <p><span className="bg-rose-400 rounded-md italic">Title</span>  title</p>

                    <div className="flex mt-2 justify-between items-center">
                        <Link className="p-2 rounded bg-gray-100 hover:bg-gray-200 text-blue-500 hover:text-indigo-600" to={`/blog/details/`}>
                            <FaEye size={25} />
                        </Link>
                        {
                            location.pathname === "/dashboard/author-blogs" &&
                            <Link className="p-2 rounded bg-green-100 hover-bg-green-200 text-green-500 hover:text-green-600" to={`/blog/details/`}>
                                <FaEdit size={25} />
                            </Link>
                        }
                        {
                            location.pathname === "/dashboard/author-blogs" &&
                            <Link className="p-2 rounded bg-red-100 hover-bg-red-200  text-red-500 hover:text-red-600" to={`/blog/details/`}>
                                <FaTrash size={25} />
                            </Link>
                        }
                    </div>
                </div>
               <div className="flex flex-col p-2 border rounded-md bg-white hover:scale-105 hover:shadow-md transition-all duration-500">
                    <img className="w-full h-[200px] rounded-t-md" src="https://i.ibb.co/4fVGjBw/smiley-man-holding-project-documents.jpg" alt="image" />
                    <h4 className="text-lg font-medium my-3"><span className="bg-rose-400 rounded-md italic">Category</span> : category</h4>
                    <p><span className="bg-rose-400 rounded-md italic">Title</span>  title</p>

                    <div className="flex mt-2 justify-between items-center">
                        <Link className="p-2 rounded bg-gray-100 hover:bg-gray-200 text-blue-500 hover:text-indigo-600" to={`/blog/details/`}>
                            <FaEye size={25} />
                        </Link>
                        {
                            location.pathname === "/dashboard/author-blogs" &&
                            <Link className="p-2 rounded bg-green-100 hover-bg-green-200 text-green-500 hover:text-green-600" to={`/blog/details/`}>
                                <FaEdit size={25} />
                            </Link>
                        }
                        {
                            location.pathname === "/dashboard/author-blogs" &&
                            <Link className="p-2 rounded bg-red-100 hover-bg-red-200  text-red-500 hover:text-red-600" to={`/blog/details/`}>
                                <FaTrash size={25} />
                            </Link>
                        }
                    </div>
                </div>
               <div className="flex flex-col p-2 border rounded-md bg-white hover:scale-105 hover:shadow-md transition-all duration-500">
                    <img className="w-full h-[200px] rounded-t-md" src="https://i.ibb.co/4fVGjBw/smiley-man-holding-project-documents.jpg" alt="image" />
                    <h4 className="text-lg font-medium my-3"><span className="bg-rose-400 rounded-md italic">Category</span> : category</h4>
                    <p><span className="bg-rose-400 rounded-md italic">Title</span>  title</p>

                    <div className="flex mt-2 justify-between items-center">
                        <Link className="p-2 rounded bg-gray-100 hover:bg-gray-200 text-blue-500 hover:text-indigo-600" to={`/blog/details/`}>
                            <FaEye size={25} />
                        </Link>
                        {
                            location.pathname === "/dashboard/author-blogs" &&
                            <Link className="p-2 rounded bg-green-100 hover-bg-green-200 text-green-500 hover:text-green-600" to={`/blog/details/`}>
                                <FaEdit size={25} />
                            </Link>
                        }
                        {
                            location.pathname === "/dashboard/author-blogs" &&
                            <Link className="p-2 rounded bg-red-100 hover-bg-red-200  text-red-500 hover:text-red-600" to={`/blog/details/`}>
                                <FaTrash size={25} />
                            </Link>
                        }
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default AuthorDetails;