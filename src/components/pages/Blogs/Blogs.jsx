import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdModeComment } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import moment from "moment";
import { Link } from "react-router-dom";
import { useState } from "react";

const Blogs = () => {
    const [category, setCategory] = useState(null)
    const [axiosSecure] = useAxiosSecure()
    const { loading } = useAuth()

    const categories = ['All', 'Programming & Tech', 'Travel & Adventure', 'Book Review', 'Personal Development', 'News & Updates', 'Health & Fitness']

    const handleCategory = category => {
        setCategory(category === 'All' ? null : category)
        console.log(category)
    }
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/blogs')
            console.log(blogs)
            return res.data
        }
    })

    const filteredBlogs = category ? blogs.filter(blog => blog.category === category) : blogs;
    console.log(filteredBlogs)
    return (
        <div className="min-h-screen max-w-[1080px] mx-auto my-10 relative">
            <div className="grid grid-cols-12 gap-5">
                <div className="w-fit col-span-3 h-screen sticky top-28">
                    <div className="text-xl flex items-center">
                        <span>Wanna Become an Author? </span>
                        <button className="mb-4 text-base text-blue-600 hover:underline">Click here</button>
                    </div>

                    <ul className="space-y-1">

                        {categories.map(item =>
                            <li onClick={() => handleCategory(item)} key={item} className="p-2 hover:bg-white cursor-pointer">{item}</li>
                        )}

                        {/* <li className="p-2 hover:bg-white cursor-pointer">Programming & Tech</li>
                        <li className="p-2 hover:bg-white cursor-pointer">Travel & Adventure</li>
                        <li className="p-2 hover:bg-white cursor-pointer">Book Review</li>
                        <li className="p-2 hover:bg-white cursor-pointer">Personal Development</li>
                        <li className="p-2 hover:bg-white cursor-pointer">News & Updates</li>
                        <li className="p-2 hover:bg-white cursor-pointer">Health & Fitness</li> */}
                    </ul>
                </div>
                <div className="col-span-9 mt-2">
                    {
                        filteredBlogs.map(blog => (
                            <div className="grid grid-cols-6 items-center gap-5 mb-8 cursor-pointer" key={blog._id}>

                                <div className="col-span-2 h-full relative">
                                    <img className="h-[250px] w-full" src={blog?.titleImage} alt="blog image" />
                                    <p className="absolute top-3 right-3 text-white bg-pink-500 rounded-lg">{blog.category}</p>
                                </div>

                                <div className="col-span-4">
                                    <div className="font-semibold text-3xl mb-2">{blog.title}</div>

                                    <div className="font-medium text-neutral-600" dangerouslySetInnerHTML={{ __html: blog.content.length > 200 ? blog.content.substr(0, 200) + '...' : blog.content }}></div>

                                    {blog?.content?.length > 200 && <Link to={`/blog/details/${blog._id}`} className="text-blue-400 hover:text-blue-500 inline">See More</Link>}

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
                        ))
                    }
                </div>
            </div>
            <div className="text-center">
                <div className="join">
                    <button className="join-item btn btn-sm">1</button>
                    <button className="join-item btn btn-sm btn-active">2</button>
                    <button className="join-item btn btn-sm">3</button>
                    <button className="join-item btn btn-sm">4</button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;