import { FcApprove } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";
import { FaTrash } from "react-icons/fa";

const BlogsData = ({ blog, refetch, index }) => {
  const { _id, title, titleImage, author, category, approved } = blog;
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
        {author.date}
      </td>
      <td>
        {approved === false
          ?
          <button className="px-5 py-2 rounded bg-orange-400 hover:bg-orange-500 font-medium">Pending</button>
          :
          <button className="px-5 py-2 rounded bg-green-400 hover:bg-orange-600 font-medium">Approved</button>}
      </td>
      <td>
        <ul className="flex gap-5 items-center">
          <li><FcApprove size={25} /></li>
          <li><FcDisapprove size={25} /></li>
          <li><FaTrash size={25} /></li>
        </ul>
      </td>
    </tr>
  );
};

export default BlogsData;