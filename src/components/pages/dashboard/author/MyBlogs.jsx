import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import AuthorBlogs from "../../../authorBlogs/AuthorBlogs";
import { useLocation } from "react-router-dom";
import Loading from "../../../loading/Loading";

const MyBlogs = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const location = useLocation()
    console.log(location)

    const { data: userBlogs = [], isLoading: dataLoading } = useQuery({
        queryKey: [`blogs/${user?.email}`],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`blogs/${user?.email}`)
            return res.data;
        }
    })
    if(dataLoading){
        return <Loading/>
    }
    return (
        <div>
            <div className="text-3xl font-medium">
                My Blogs
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5">
                {
                    userBlogs.map(blog => <AuthorBlogs key={blog._id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default MyBlogs;