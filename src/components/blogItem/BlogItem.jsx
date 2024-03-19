import moment from "moment";
import { AiFillLike } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";
import { MdModeComment } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
    const sanitizedContent = blog.content.replace(/<[^>]+>/g, '');

    return (
        <div className="grid grid-cols-6 items-center gap-5 mb-8" key={blog._id}>

            <div className="col-span-2 h-full relative">
                <img className="h-[250px] w-full" src={blog?.titleImage} alt="blog image" />
                <p className="absolute top-3 right-3 text-white bg-pink-500 rounded-lg">{blog.category}</p>
            </div>

            <div className="col-span-4">
                <div className="font-semibold text-3xl mb-2 text-nowrap whitespace-nowrap text-ellipsis overflow-hidden">{blog.title}</div>

                <div className="font-medium text-neutral-600 mb-2">
                    {sanitizedContent.length > 170 ? sanitizedContent.substr(0, 170) + '...' : sanitizedContent}
                </div>

                {sanitizedContent.length > 170 && <Link to={`/blog/details/${blog._id}`} className="text-blue-400 hover:text-blue-500 inline hover:underline py-1 px-3 border border-blue-500">See More</Link>}

                <div className="flex justify-between items-center">
                    <div className="mt-5 group">
                        <Link className="flex items-center gap-3" to={`/author/${blog.author.email}`}>
                            <img className="w-12 h-12 rounded-full group-hover:border " src={blog?.author?.profileImage} alt="profile image" />

                            <div>
                                <p className="text-sm text-neutral-600 font-medium group-hover:underline">{blog.author.name}</p>
                                <p className="text-sm text-neutral-600 font-medium group-hover:underline"> {moment(blog.author.date).format('MMMM D, YYYY')}</p>
                            </div>
                        </Link>
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