import { useState } from "react";
import AuthorInfo from "../../AuthorInfo/AuthorInfo";

const SingleBlog = ({ blogDetails }) => {
    const [toggle, setToggle] = useState(false)
    
    return (
        <div>
            <h1 className="text-3xl w-3/4 font-medium">{blogDetails.title}</h1>
            <div className="flex justify-between items-center">
                <AuthorInfo blog={blogDetails} />
                <h3 className="text-lg font-medium">Category : {blogDetails.category}</h3>
            </div>
            <img className="w-full h-[60vh] my-6" src={blogDetails.titleImage} alt="blog image" />
            <div>
                <p dangerouslySetInnerHTML={{ __html: blogDetails.content }}></p>

            </div>
            <div className="bg-white rounded-lg p-4 shadow-md mt-5">
                {/* Post content */}
                <p className="mb-2 px-4 hover:underline">{blogDetails.likes} likes</p>

                {/* Like, comment, share buttons */}
                <div className="flex justify-between items-center border-t border-b py-3 px-5">
                    <button className="text-blue-500 hover:text-blue-600">
                        Like
                    </button>
                    <button onClick={() => setToggle(!toggle)} className="text-blue-500 hover:text-blue-600">
                        Comment
                    </button>
                    <button className="text-blue-500 hover:text-blue-600">
                        Share
                    </button>
                </div>

                {/* Comment input form */}

                <div className={`${toggle === true ? 'flex' : 'hidden'} mt-5`}>
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        className="border border-r-0 border-gray-300 p-2 rounded-l-md w-full"
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SingleBlog;