import moment from "moment";
import { Link } from "react-router-dom";

const AuthorInfo = ({ blog }) => {
    return (
        <Link to="/author/:email" className="flex items-center mt-5 gap-3">
            <img className="gap-3 w-12 h-12 rounded-full hover:border hover:border-blue-500" src={blog?.author?.profileImage} alt="profile image" />
            <div>
                <div>
                    <p className="text-sm text-neutral-600 font-medium">{blog.author.name}</p>
                    <p className="text-sm text-neutral-600 font-medium"> {moment(blog.author.date).format('MMMM D, YYYY')}</p>
                </div>
            </div>
        </Link>
    );
};

export default AuthorInfo;