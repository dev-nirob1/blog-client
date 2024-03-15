import { FaTrash, FaUserCheck } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";

const UsersData = ({ user, index, handleDeleteUser, handleMakeAuthor, handleMakeAdmin }) => {
    const { name, email, image, role, } = user;


    return (
        <tbody>
            <tr className="hover:bg-gray-50">
                <th>{index + 1}</th>
                <td>
                    <img height="50" width="50" className="rounded-full" src={image} alt="" />
                </td>
                <td>
                    <div>{name}</div>
                </td>
                <td>
                    <div>{email}</div>
                </td>
                {role ? <td>{role}</td> : <td title={role}><FaUserCheck size={25} /></td>}
                <td>
                    <div className="flex gap-5 items-center">
                        <p><FaUserCheck size={25} /></p>
                        <p><FaUserPen size={25} /></p>
                        <p><MdAdminPanelSettings size={25} /></p>
                        <p className="text-red-500"><FaTrash size={25} /></p>
                        {!role && <td onClick={() => handleDeleteUser(email)}></td>}
                        {role === 'author' && <td><FaUserPen /></td>}
                        {role === 'admin' && <td>Admin</td>}
                    </div>
                </td>
            </tr>

        </tbody>
    );
};

export default UsersData;