import moment from "moment";
import { Link } from "react-router-dom";

const AuthorInfo = ({ blog }) => {
    return (
        <div className="flex items-center mt-5 gap-3">
            <Link to={`/blog/details/${blog._id}`}><img className="gap-3 w-12 h-12 rounded-full" src={blog?.author?.profileImage} alt="profile image" /></Link>
            <div>
                <div>
                    <p className="text-sm text-neutral-600 font-medium">{blog.author.name}</p>
                    <p className="text-sm text-neutral-600 font-medium"> {moment(blog.author.date).format('MMMM D, YYYY')}</p>
                </div>
            </div>
        </div>
    );
};

export default AuthorInfo;