import useAuth from "../../../../../hooks/useAuth";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UsersData from "./UsersData";
import Loading from "../../../../loading/Loading";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { loading } = useAuth()

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            console.log(users)
            return res.data
        }
    })

    const handleDeleteUser = async (email) => {
        const res = await axiosSecure.delete(`/users/delete/${email}`)
        console.log(email)
        if (res.data.deletedCount) {
            alert('user deleted')
            refetch()
        }
    }
    const handleMakeAuthor = async (email) => {
        const res = await axiosSecure.patch(`/user/author/${email}`)
        if (res.data.modifiedCount > 0) {
            alert('Make Author')
            refetch()
        }
    }

    const handleMakeAdmin = async (email) => {
        const res = await axiosSecure.patch(`/user/admin/${email}`)
        if (res.data.modifiedCount > 0) {
            alert('Made Admin')
            refetch()
        }
    }

    const handleDemoteToUser = async (email) => {
        const res = await axiosSecure.patch(`/user/demoteAuthor//${email}`)
        if (res.data.modifiedCount > 0) {
            alert('Author Demoted to normal user')
            refetch()
        }
    }

    if (isLoading) {
        return <Loading />
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
                    {users.map((user, index) => <UsersData
                        key={index}
                        index={index}
                        user={user}
                        refetch={refetch}
                        handleDeleteUser={handleDeleteUser}
                        handleMakeAuthor={handleMakeAuthor}
                        handleMakeAdmin={handleMakeAdmin}
                        handleDemoteToUser={handleDemoteToUser}
                    />)

                    }
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;