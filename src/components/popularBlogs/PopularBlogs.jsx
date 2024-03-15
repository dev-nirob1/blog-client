import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const PopularBlogs = () => {
    const [axiosSecure] = useAxiosSecure()
    const { loading } = useAuth()

    const { data: popularBlogs = [] } = useQuery({
        queryKey: ['blogs/popular'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/blogs/popular')
            console.log(popularBlogs)
            return res.data
        }
    })

    return (
        <div className="bg-white col-span-3 p-3 h-[500px] overflow-y-scroll sticky top-28">
            <h3 className="text-3xl text-center font-medium text-neutral-700">Popular Blogs</h3>
            {
                popularBlogs.map(popular => <Link to={`/blog/details/${popular._id}`} key={popular._id}>
                    <div className="grid grid-cols-6 gap-2 items-center mt-5 pt-3 border-t border-gray-200">
                        <div className="col-span-2">
                            <img className="h-20 w-full" src={popular.titleImage} alt="image" />
                        </div>
                        <p className="col-span-4 text-sm font-bold text-neutral-700">{popular.title}</p>
                    </div>
                </Link>)
            }

        </div>
    );
};

export default PopularBlogs;