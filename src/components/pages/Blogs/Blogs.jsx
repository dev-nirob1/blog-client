import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import BlogItem from "../../blogItem/BlogItem";
import Loading from "../../loading/Loading";

const Blogs = () => {
    const [category, setCategory] = useState(null)
    const [axiosSecure] = useAxiosSecure()
    const { loading } = useAuth()

    const categories = ['All', 'Programming & Tech', 'Travel & Adventure', 'Book Review', 'Personal Development', 'News & Updates', 'Health & Fitness']

    const handleCategory = category => {
        setCategory(category === 'All' ? null : category)
    }

    const { data: blogs = [], isLoading: blogsLoading } = useQuery({
        queryKey: ['blogs'],
        enabled: !loading,
        queryFn: async () => {
          const res = await axiosSecure.get('/blogs')
          console.log(blogs)
          return res.data
        }
      })

      if (loading || blogsLoading) {
        return <Loading />
      }

    const filteredBlogs = category ? blogs.filter(blog => blog.category === category) : blogs;

    return (
        <div className="min-h-screen max-w-[1080px] mx-auto my-10 relative">
            <div className="grid grid-cols-9 gap-5">

                <div className="w-fit col-span-2 h-screen sticky top-28">
                    <div className="text-xl flex items-center">
                        <span>Wanna Become an Author? </span>
                        <button className="mb-4 text-base text-blue-600 hover:underline">Click here</button>
                    </div>

                    <ul className="space-y-1">

                        {categories.map(item =>
                            <li onClick={() => handleCategory(item)} key={item} className="p-2 hover:bg-white cursor-pointer">{item}</li>
                        )}
                    </ul>
                </div>

                <div className="col-span-7 mt-2">
                    {
                        filteredBlogs.map(blog => (
                            <BlogItem key={blog._id} blog={blog} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;