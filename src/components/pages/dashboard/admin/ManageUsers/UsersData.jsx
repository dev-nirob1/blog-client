
const UsersData = ({ user, index, handleDeleteUser, handleMakeAuthor, handleMakeAdmin }) => {
    const { name, email, image, role,  } = user;
    return (
        <tbody>
            <tr>
                <th>{index + 1}</th>
                <td>
                    <div>{name}</div>
                    <div>{email}</div>
                </td>
                <td>
                    <img height="50" width="50" src={image} alt="" />
                </td>
                {role ? <td>{role}</td> : <td>User</td>}
                <th>
                    {!role && <td onClick={()=>handleDeleteUser(email)}>User</td>}
                    {role === 'author' && <td>Author</td>}
                    {role === 'admin' && <td>Admin</td>}
                </th>
            </tr>

        </tbody>
    );
};

export default UsersData;