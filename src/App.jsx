import { Link } from 'react-router-dom'
import PopularBlogs from "./components/popularBlogs/PopularBlogs";
import useAuth from "./hooks/useAuth";
import useAxiosSecure from "./hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from './components/loading/Loading';
import BlogItem from './components/blogItem/BlogItem';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Category from './components/featuredCategories/Category';
import Slider from './components/Slider/Slider';

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
    <div className="container mx-auto mt-5 mb-12 min-h-screen">
      {/* slider section  */}
      <Slider />
      {/* category section  */}
      <Category />

      <div className="grid grid-cols-12 gap-5">


        <div className="col-span-9">
          {
            blogs.map(blog => (
              <BlogItem key={blog._id} blog={blog} />
            ))
          }
        </div>

        {/* popular Blogs section */}
        <PopularBlogs />
      </div>
      <div className="text-center mt-10">
        <Link to="/blogs" className="text-lg font-medium px-10 py-4 rounded bg-rose-400 text-white">See All</Link>
      </div>

      {/* newletter section  */}
      <NewsLetter />

    </div>
  );
}

export default App;
