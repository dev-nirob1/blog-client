import { FaTrash, FaUserCheck } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const UsersData = ({ user, index, handleDeleteUser, handleMakeAuthor, handleMakeAdmin,handleDemoteToUser }) => {
    const { name, email, image, role } = user;
    
    return (
        <tbody>
            <tr className="hover:bg-gray-50">
                <th>{index + 1}</th>
                <td>
                    <Link to="/author">
                        <img height="50" width="50" className="rounded-full hover:border-blue-500 hover:border" src={image} alt="" />
                    </Link>
                </td>
                <td>
                    <div>{name}</div>
                </td>
                <td>
                    <div>{email}</div>
                </td>

                {/* current role */}
                <td>
                    {!role &&
                        <button className="p-1 rounded bg-gray-100 text-gray-500">
                            <FaUserCheck size={25} title="User" />
                        </button>
                    }
                    {role === 'author' &&
                        <button className="p-1 rounded bg-green-100 text-green-500">
                            <FaUserPen size={25} title="Author" />
                        </button>
                    }
                    {role === 'admin' &&
                        <button className="p-1 rounded bg-red-100 text-red-500">
                            <MdAdminPanelSettings size={25} title="Admin" />
                        </button>
                    }
                </td>

                {/* Conditional icons */}
                <td>
                    <div className="flex gap-5 items-center">
                        {/* Show icons based on user role */}
                        {!role && (
                            <>
                                {/* <FaUserCheck size={25} title="User" /> */}
                                <button onClick={() => handleMakeAuthor(email)} className="p-1 rounded bg-gray-100 text-gray-500">
                                    <FaUserPen size={25} title="Author" />
                                </button>
                                <button onClick={() => handleMakeAdmin(email)} className="p-1 rounded bg-green-100 text-green-500">
                                    <MdAdminPanelSettings size={25} title="Admin" />
                                </button>
                                <button onClick={() => handleDeleteUser(email)} className="p-1 rounded bg-red-100 text-red-500">
                                    <FaTrash size={25} title="Delete" />
                                </button>
                            </>
                        )}
                        {role === 'author' && (
                            <>
                                <button onClick={()=> handleDemoteToUser(email)} className="p-1 rounded bg-gray-100 text-gray-500">
                                    <FaUserCheck size={25} title="Make User" />
                                </button>
                                <button onClick={() => handleMakeAdmin(email)} className="p-1 rounded bg-green-100 text-green-500">
                                    <MdAdminPanelSettings size={25} title="Make Admin" />
                                </button>
                                <button onClick={() => handleDeleteUser(email)} className="p-1 rounded bg-red-100 text-red-500">
                                    <FaTrash size={25} title="Delete User" />
                                </button>
                            </>
                        )}
                        {role === 'admin' && (
                            <>
                                Can`t Delete an Admin
                            </>
                        )}
                    </div>
                </td>
            </tr>

        </tbody>
    );
};

export default UsersData;