import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import BlogItem from "../blogItem/BlogItem";
import Pagination from "../paginationButton/Pagination";

const BlogsPagination = ({ totalBlogs }) => {
    const [axiosSecure] = useAxiosSecure()
    const { loading } = useAuth()
    const [currentPage, setCurrentPage] = useState(0)

    let blogsPerPage = 2;
    const totalPage = Math.ceil(totalBlogs / blogsPerPage)

    const pages = []
    for (let i = 0; i < totalPage; i++) {
        pages.push(i)
    }
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
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs/pagination', currentPage],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/blogs/pagination?page=${currentPage}&size=${blogsPerPage}`)
            return res.data
        }
    })

    return (
        <div className="container mx-auto">
            {
                blogs.map(blog => <BlogItem key={blog._id} blog={blog}></BlogItem>
                )
            }

            <div className="text-center my-10">
                <div className="join">
                    <button onClick={handlePrev} className="join-item btn btn-sm hover:bg-rose-200 hover:text-red-500">Prev</button>
                    {
                        pages.map(page => <Pagination key={page}
                            page={page}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />)
                    }
                    <button onClick={handleNext} className="join-item btn btn-sm hover:bg-rose-200 hover:text-red-500">Next</button>
                </div>
            </div>
        </div>
    );
};

export default BlogsPagination;