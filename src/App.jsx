import { Link } from 'react-router-dom'
import PopularBlogs from "./components/popularBlogs/PopularBlogs";
import { AiFillLike } from "react-icons/ai";
import { MdModeComment } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";
import useAuth from "./hooks/useAuth";
import useAxiosSecure from "./hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from './components/loading/Loading';
import AuthorInfo from './components/AuthorInfo/AuthorInfo';

function App() {
  const [axiosSecure] = useAxiosSecure()
  const { loading } = useAuth()

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
  return (
    <div className="container mx-auto mt-5 mb-12 relative min-h-screen">
      <div className="grid grid-cols-12 gap-5">

        <div className="col-span-9">
          {
            blogs.map(blog => (
              <div className="grid grid-cols-6 items-center gap-5 border-b py-8" key={blog._id}>

                <div className="col-span-2 h-full relative">
                  <img className="h-[250px] w-full" src={blog?.titleImage} alt="blog image" />
                  <p className="absolute top-3 right-3 text-white bg-pink-500 rounded-lg">{blog.category}</p>
                </div>

                <div className="col-span-4">
                  <div className="font-semibold text-gray-700 text-3xl mb-2">{blog.title}</div>

                  <div className="font-medium text-neutral-600" dangerouslySetInnerHTML={{ __html: blog.content.length > 200 ? blog.content.substr(0, 200) + '...' : blog.content }}></div>

                  {blog?.content?.length > 200 && <Link to={`/blog/details/${blog._id}`} className="text-blue-400 hover:text-blue-500 inline font-medium">See More</Link>}

                  <div className="flex justify-between items-center ">
                    <AuthorInfo blog={blog}/>

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

        {/* Second Sticky Column */}
        <PopularBlogs />
      </div>
      <div className="text-center mt-10">
        <Link to="/blogs" className="text-lg font-medium px-10 py-4 rounded bg-rose-400 text-white">See All</Link>
      </div>
    </div>
  );
}

export default App;
