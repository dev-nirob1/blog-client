import { Link, useLoaderData } from 'react-router-dom'
import useAuth from "./hooks/useAuth";
import Loading from './components/loading/Loading';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Category from './components/featuredCategories/Category';
import Slider from './components/Slider/Slider';
import BlogsPagination from './components/BlogsWithPagination/BlogsPagination';

function App() {
  const { loading } = useAuth()
  const { totalApprovedBlogs } = useLoaderData()

  if (loading ) {
    return <Loading />
  }

  return (
    <div className="container mx-auto mt-5 mb-12 min-h-screen">

      {/* slider section  */}
      <Slider />

      {/* category section  */}
      <Category />

      <div className="">

        <h3 className='text-3xl font-semibold text-center my-8'>Features Blogs</h3>
        <div>
          <BlogsPagination totalBlogs={totalApprovedBlogs} />
        </div>

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
