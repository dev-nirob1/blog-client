
const Blogs = () => {
    return (
        <div className="min-h-screen container mx-auto my-10 relative">
            <div className="flex gap-5">
                <div className="w-fit sticky top-28">
                    <div className="text-xl flex items-center">
                        <span>Wanna Become an Author? </span>
                        <button className="mb-4 text-base text-blue-600 hover:underline">Click here</button>
                    </div>

                    <ul className="space-y-3">
                        <li className="p-2 hover:bg-white cursor-pointer">Programming & Tech</li>
                        <li className="p-2 hover:bg-white cursor-pointer">Travel & Adventure</li>
                        <li className="p-2 hover:bg-white cursor-pointer">Book Review</li>
                        <li className="p-2 hover:bg-white cursor-pointer">Personal Development</li>
                        <li className="p-2 hover:bg-white cursor-pointer">News & Updates</li>
                        <li className="p-2 hover:bg-white cursor-pointer">Health & Fitness</li>
                    </ul>
                </div>
                <div className="flex-grow">
                    <div className="bg-green-500 h-20">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;