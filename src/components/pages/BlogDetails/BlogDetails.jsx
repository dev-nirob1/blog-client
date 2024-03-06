// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import PopularBlogs from "../../popularBlogs/PopularBlogs";

const BlogDetails = () => {
    // const id = useParams()
    // const [blog, setBlog] = useState([])
    const { loading } = useAuth()

    // useEffect(() => {
    //     fetch(`http://localhost:5000/blogs/65bb5cb66f996c23d599819b`)
    //         .then(res => res.json())
    //         .then(data => setBlog(data))
    // }, [id])
    // const { titleImage, title,  content} = blog;
    // console.log(blog)

    if (loading) {
       return <div>loading..</div>
    }
    return (
        <div className="container mx-auto my-12">
            <div className="flex gap-5">
                <div className="max-w-[960px] border p-5 space-y-5">
                    <div>
                        <h1 className="text-4xl font-medium mb-4">Lorem ipsum dolor sit amet.</h1>
                        {/* <img className="w-full h-[60vh]" src={titleImage} alt="blog image" /> */}
                        <div>
                            {/* <p dangerouslySetInnerHTML={{ __html: content }}>lorem50</p> */}
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam illo iusto nesciunt ullam facilis repellat perspiciatis voluptatem laudantium rerum, deserunt impedit quo ex quas? Eligendi quidem iste debitis dicta error quis velit pariatur. Temporibus optio omnis a in atque fuga, tempora nam rem animi. Fugit, vel aliquid. Deleniti beatae ipsam ab harum? Ex, dolorem deleniti quasi odio ullam voluptate officiis iusto, in, est dicta omnis optio quas sequi? Cumque debitis eos natus, perspiciatis beatae quisquam repudiandae. Molestiae, eum laborum, incidunt, accusamus animi nulla eos sequi alias odio totam omnis eveniet ipsam non. Recusandae beatae perferendis eveniet minus sunt blanditiis quibusdam?</p>
                        </div>
                    </div>

                    {/* more from same author */}

                    <div>
                        <h2 className="text-2xl font-medium mb-3">More from this author</h2>
                        <div className="grid grid-cols-3 p-4 gap-4 border rounded">
                            <div className="p-2 border rounded">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, maiores.</div>
                            <div className="p-2 border rounded">Voluptatibus sequi ratione quis porro recusandae quasi deleniti doloribus ad!</div>
                            <div className="p-2 border rounded">Itaque, modi labore velit placeat unde esse eligendi adipisci ad.</div>
                            <div className="p-2 border rounded">Minima quod sit, explicabo deleniti consectetur error assumenda repellendus quis?</div>
                        </div>
                    </div>
                </div>
                <div>
                    <PopularBlogs/>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;