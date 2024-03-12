import moment from "moment";
import { AiFillLike } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";
import { MdModeComment } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
    return (
        <div className="grid grid-cols-6 items-center gap-5 mb-8 cursor-pointer" key={blog._id}>

            <div className="col-span-2 h-full relative">
                <img className="h-[250px] w-full" src={blog?.titleImage} alt="blog image" />
                <p className="absolute top-3 right-3 text-white bg-pink-500 rounded-lg">{blog.category}</p>
            </div>

            <div className="col-span-4">
                <div className="font-semibold text-3xl mb-2">{blog.title}</div>

                <div className="font-medium text-neutral-600" dangerouslySetInnerHTML={{ __html: blog.content.length > 200 ? blog.content.substr(0, 200) + '...' : blog.content }}></div>

                {blog?.content?.length > 200 && <Link to={`/blog/details/${blog._id}`} className="text-blue-400 hover:text-blue-500 inline hover:underline">See More</Link>}

                <div className="flex justify-between items-center ">
                    <div className="flex items-center mt-5 gap-3">
                        <Link to={`/blog/details/${blog._id}`}><img className="gap-3 w-12 h-12 rounded-full" src={blog?.author?.profileImage} alt="profile image" /></Link>
                        <div>
                            <div>
                                <p className="text-sm text-neutral-600 font-medium">{blog.author.name}</p>
                                <p className="text-sm text-neutral-600 font-medium"> {moment(blog.author.date).format('MMMM D, YYYY')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-8 items-center mr-5">
                        <button className="text-lg text-neutral-600 font-medium flex items-center gap-2"><AiFillLike /> {blog.likes}</button>

                        <button className="text-lg flex items-center gap-2 text-neutral-600 font-medium"><MdModeComment /> {blog?.comments}</button>

                        <button className="text-lg flex items-center gap-2 text-neutral-600 font-medium"><FaRegShareSquare /></button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BlogItem;