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

  const handleApprove = async (id) => {
    const response = await axiosSecure.patch(`/blogs/approved/${id}`)
    if (response.data.modifiedCount) {
      alert('Blog Approved')
      refetch()
    }
  }

  const handleDeny = async (id) => {
    const response = await axiosSecure.patch(`/blogs/denied/${id}`)
    console.log(response)
    if (response.data.modifiedCount) {
      alert('blog denied')
      refetch()
    }
  }

  const handleDelete = async (id) => {
    const response = await axiosSecure.delete(`/blogs/delete/${id}`)
    if (response.data.deletedCount) {
      alert('blog Deleted')
      refetch()
    }
  }

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
          {blogsManagement.map((blog, index) => <BlogsData key={blog._id}
            blog={blog}
            index={index}
            refetch={refetch}
            handleDelete={handleDelete}
            handleDeny={handleDeny}
            handleApprove={handleApprove}
          />)}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBlogs;