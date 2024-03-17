import { FcApprove } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";
import { FaTrash } from "react-icons/fa";
import moment from "moment";

const BlogsData = ({ blog, index, handleDelete, handleApprove, handleDeny }) => {
  const { _id, title, author, denied, approved } = blog;
  return (
    <tr className="bg-white hover:bg-gray-50">
      <th>{index + 1}</th>
      <td>
        <div>
          <p>{author.name}</p>
          <p>{author.email}</p>
        </div>
      </td>
      <td>
        {title}
      </td>
      <td>
        {moment(author.date).format('MMMM D, YYYY')}
      </td>

      <td>
        {approved === false
          ?
          <button className="px-5 py-2 rounded bg-orange-400 hover:bg-orange-500 font-medium">Pending</button>
          :
          <button className="px-5 py-2 rounded bg-green-400 hover:bg-orange-600 font-medium">Approved</button>}
      </td>

      <td>
        <div className="flex gap-5 items-center">
          {
            approved === false && denied === false &&
            (<>
              <button onClick={() => handleApprove(_id)} className="text-red-500 p-1 rounded border" title="Approve"><FcApprove size={25} /></button>

              <button onClick={() => handleDeny(_id)} className="text-red-500 p-1 rounded border" title="Deny"><FcDisapprove size={25} /></button>

            </>)

          }
          {
            approved || denied &&
            (<button onClick={() => handleDelete(_id)} className="text-red-500 p-1 rounded border" title="Delete"><FaTrash size={25} /></button>)
          }
        </div>
      </td>
    </tr >
  );
};

export default BlogsData;