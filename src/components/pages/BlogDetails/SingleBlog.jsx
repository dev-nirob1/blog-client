import AuthorInfo from "../../AuthorInfo/AuthorInfo";

const SingleBlog = ({blogDetails}) => {
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
                                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                {/* Like, comment, share buttons */}
                                <div className="flex justify-between items-center">
                                    <button className="text-blue-500 hover:text-blue-600">
                                        Like
                                    </button>
                                    <button className="text-blue-500 hover:text-blue-600">
                                        Comment
                                    </button>
                                    <button className="text-blue-500 hover:text-blue-600">
                                        Share
                                    </button>
                                </div>

                                {/* Comment input form */}

                                <div className="mt-4">
                                    <input
                                        type="text"
                                        placeholder="Write a comment..."
                                        className="border border-gray-300 p-2 rounded-md w-full"
                                    />
                                    <button
                                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                    >
                                        Submit
                                    </button>
                                </div>

                            </div>
                        </div>
    );
};

export default SingleBlog;