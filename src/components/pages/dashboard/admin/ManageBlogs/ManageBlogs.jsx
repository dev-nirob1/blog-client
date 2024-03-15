import { useQuery } from "@tanstack/react-query";
import BlogsData from "./BlogsData";
import useAuth from "../../../../../hooks/useAuth";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";

const ManageBlogs = () => {
  const { loading } = useAuth()
  const [axiosSecure] = useAxiosSecure()
  const { data: blogsManagement = [], refetch } = useQuery({
    queryKey: ['/blogs/management'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get('/blogs/management')
      return res.data
    }
  })


  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Serial</th>
            <th>Author</th>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogsManagement.map((blog, index) => <BlogsData key={blog._id} blog={blog} index={index} refetch={refetch} />)}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBlogs;