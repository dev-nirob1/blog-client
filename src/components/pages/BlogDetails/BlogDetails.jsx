import { useLoaderData } from "react-router-dom";
import PopularBlogs from "../../popularBlogs/PopularBlogs";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../loading/Loading";
import AuthorBlogs from "../../authorBlogs/AuthorBlogs";
import { useEffect } from "react";
import SingleBlog from "./singleBlog";

const BlogDetails = () => {
    const { loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const blogDetails = useLoaderData()

    const { data: authorBlogs = [], isLoading: dataLoading, refetch } = useQuery({
        queryKey: ['blogs'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/blogs/${blogDetails.author.email}`)
            console.log(authorBlogs)
            return res.data
        }
    })

    const filteredBlogs = authorBlogs.filter(blog => blog._id !== blogDetails._id)
    useEffect(() => { refetch() }, [refetch, blogDetails.author.email])
    if (loading || dataLoading) {
        return <Loading />
    }
    return (
        <>
            <div className="container mx-auto my-12">
                <div className="flex gap-5">
                    <div className="max-w-[960px] border p-5 space-y-5">
                        <SingleBlog blogDetails={blogDetails}/>

                        {/* more from same author */}
                        <div className="border rounded-md p-4 ">
                            <h2 className="text-2xl font-medium my-3">More from {blogDetails?.author?.name}</h2>

                            <div className="grid grid-cols-3 gap-4">
                                {
                                    filteredBlogs.map(blog => <AuthorBlogs key={blog._id} blog={blog} />)
                                }

                            </div>
                        </div>
                    </div>
                    <div>
                        <PopularBlogs />
                    </div>
                </div >
            </div>
        </>
    );
};

export default BlogDetails;