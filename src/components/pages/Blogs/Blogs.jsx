import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import BlogItem from "../../blogItem/BlogItem";
import { useLoaderData } from "react-router-dom";
import Loading from "../../loading/Loading";

const Blogs = () => {
    // const [category, setCategory] = useState(null)
    const [axiosSecure] = useAxiosSecure()
    const { loading } = useAuth()
    const { totalBlogs } = useLoaderData()
    const [currentPage, setCurrentPage] = useState(0)
    const blogsPerPage = 2;

    console.log(currentPage)
    const totalPage = Math.ceil(totalBlogs / blogsPerPage)

    const pages = []
    for (let i = 0; i < totalPage; i++) {
        pages.push(i)
    }


    // const categories = ['All', 'Programming & Tech', 'Travel & Adventure', 'Book Review', 'Personal Development', 'News & Updates', 'Health & Fitness']

    // const handleCategory = category => {
    //     setCategory(category === 'All' ? null : category)
    // }
    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const { data: blogs = [], isLoading: dataLoading } = useQuery({
        queryKey: ['blogs', currentPage],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/blogs/pagination?page=${currentPage}&size=${blogsPerPage}`)
            console.log(blogs)
            return res.data
        }
    })

    // const filteredBlogs = category ? blogs.filter(blog => blog.category === category) : blogs;
    if(dataLoading){
        return <Loading/>
    }
    return (
        <div className="min-h-screen max-w-[1080px] mx-auto my-10 relative">
            <div className="grid grid-cols-1 gap-5">
                {/* <div className="w-fit col-span-3 h-screen sticky top-28">
                    <div className="text-xl flex items-center">
                        <span>Wanna Become an Author? </span>
                        <button className="mb-4 text-base text-blue-600 hover:underline">Click here</button>
                    </div>

                    <ul className="space-y-1">

                        {categories.map(item =>
                            <li onClick={() => handleCategory(item)} key={item} className="p-2 hover:bg-white cursor-pointer">{item}</li>
                        )}
                    </ul>
                </div> */}

                <div className=" mt-2">
                    {
                        blogs.map(blog => (
                            <BlogItem key={blog._id} blog={blog} />
                        ))
                    }
                </div>
            </div>
            <div className="text-center mt-10">
                <div className="join">
                    <button onClick={handlePrev} className="join-item btn btn-sm hover:bg-rose-200 hover:text-red-500">Prev</button>
                    {
                        pages.map(page =>
                            <button key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`join-item btn btn-sm hover:bg-rose-300 ${currentPage === page ? 'bg-rose-200 text-red-500' : ''}`}>
                                {page}
                            </button>
                        )
                    }
                    <button onClick={handleNext} className="join-item btn btn-sm hover:bg-rose-200 hover:text-red-500">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;