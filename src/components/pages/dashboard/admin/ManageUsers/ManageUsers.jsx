import useAuth from "../../../../../hooks/useAuth";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UsersData from "./UsersData";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { loading } = useAuth()
    
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            console.log(users)
            return res.data
        }
    })

    const handleDeleteUser = email => {
        console.log(email)
    }
    const handleMakeAuthor = email => {
        console.log(email)
    }
    const handleMakeAdmin = email => {
        console.log(email)
    }

    return (
        <div className="bg-white pb-8">
            <h1 className="text-3xl text-center font-medium text-neutral-800 py-8">Manage Users</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Current Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {users.map((user, index) => <UsersData key={index} index={index} user={user} refetch={refetch} handleDeleteUser={handleDeleteUser} handleMakeAuthor={handleMakeAuthor} handleMakeAdmin={handleMakeAdmin} />)

                    }
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;