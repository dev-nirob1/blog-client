import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import moment from 'moment';
import PopularBlogs from "./components/popularBlogs/PopularBlogs";
import { AiFillLike } from "react-icons/ai";
import { MdModeComment } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="container mx-auto my-10 relative min-h-screen">
      <div className="grid grid-cols-12 gap-5">

        {/* First Sticky Column */}
        {/* <div className="bg-gray-100 col-span-3 h-fit p-3 sticky top-28">
          <div className="text-xl flex items-center">
            <span>Wanna Become an Author? </span>
            <button className="mb-4 text-base text-blue-600 hover:underline">Click here</button>
          </div>

          <ul className="space-y-3">
            <li className="p-2 hover:bg-white cursor-pointer">Programming & Tech</li>
            <li className="p-2 hover:bg-white cursor-pointer">Travel & Adventure</li>
            <li className="p-2 hover:bg-white cursor-pointer">Book Review</li>
            <li className="p-2 hover:bg-white cursor-pointer">Personal Development</li>
            <li className="p-2 hover:bg-white cursor-pointer">News & Updates</li>
            <li className="p-2 hover:bg-white cursor-pointer">Health & Fitness</li>
          </ul>
        </div> */}

        {/* Main Content Column */}
        <div className="col-span-9">
          {
            blogs.map(blog => (
              <div className="grid grid-cols-6 items-center gap-5 border-b py-8" key={blog._id}>

                <div className="col-span-2 h-full relative">
                  <img className="h-[250px] w-full" src={blog?.titleImage} alt="" />
                  <p className="absolute top-3 right-3 text-white bg-orange-400 rounded-lg">{blog.category}</p>
                </div>

                <div className="col-span-4">
                  <div className="font-semibold text-3xl mb-2">{blog.title}</div>

                  <div className="font-medium text-neutral-600" dangerouslySetInnerHTML={{ __html: blog.content.length > 200 ? blog.content.substr(0, 200) + '...' : blog.content }}></div>

                  {blog?.content?.length > 200 && <Link to={`/blog/details/:id`} className="text-blue-400 hover:text-blue-500 inline">See More</Link>}

                  <div className="flex justify-between items-center ">
                    <div className="flex items-center mt-5 gap-3">
                      <img className="gap-3 w-12 h-12 rounded-full" src={blog?.author?.profileImage} alt="profile image" />
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
