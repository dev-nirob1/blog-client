import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="my-10">
            <h2 className="text-center text-3xl font-semibold"> Featured Categories</h2>

            <div className="grid grid-cols-6 gap-5 py-8">

                <div className="group">
                    <Link className="relative" >
                        <img className="rounded h-32 w-60" src="programming&tech.webp" alt="" />
                        <div className="absolute bottom-0 items-end justify-center h-full w-full bg-gradient-to-b from-neutral-500 to-neutral-700 opacity-75  hidden group-hover:flex rounded">
                            <h3 className="text-center group-hover:underline text-white text-lg font-medium p-2">Programming & Tech</h3>
                        </div>
                    </Link>
                </div>

                <div className="group">
                    <Link className="relative" >
                        <img className="rounded h-32 w-60" src="travel.jpg" alt="" />
                        <div className="absolute bottom-0 items-end justify-center h-full w-full bg-gradient-to-b from-neutral-500 to-neutral-700 opacity-75  hidden group-hover:flex rounded">
                            <h3 className="text-center group-hover:underline text-white text-lg font-medium p-2">Travel & Adventure</h3>
                        </div>
                    </Link>
                </div>

                <div className="group">
                    <Link className="relative" >
                        <img className="rounded h-32 w-60" src="book-review.jpg" alt="" />
                        <div className="absolute bottom-0 items-end justify-center h-full w-full bg-gradient-to-b from-neutral-500 to-neutral-700 opacity-75  hidden group-hover:flex rounded">
                            <h3 className="text-center group-hover:underline text-white text-lg font-medium p-2">Book Review</h3>
                        </div>
                    </Link>
                </div>

                <div className="group">
                    <Link className="relative" >
                        <img className="rounded h-32 w-60" src="personal-development.jpg" alt="" />
                        <div className="absolute bottom-0 items-end justify-center h-full w-full bg-gradient-to-b from-neutral-500 to-neutral-700 opacity-75  hidden group-hover:flex rounded">
                            <h3 className="text-center group-hover:underline text-white text-lg font-medium p-2">Personal Development</h3>
                        </div>
                    </Link>
                </div>

                <div className="group">
                    <Link className="relative" >
                        <img className="rounded h-32 w-60" src="images.jpg" alt="" />
                        <div className="absolute bottom-0 items-end justify-center h-full w-full bg-gradient-to-b from-neutral-500 to-neutral-700 opacity-75 hidden group-hover:flex rounded">
                            <h3 className="text-center group-hover:underline text-white text-lg font-medium p-2">News & Updates</h3>
                        </div>
                    </Link>
                </div>

                <div className="group">
                    <Link className="relative" >
                        <img className="rounded h-32 w-60" src="health.jpg" alt="" />
                        <div className="absolute bottom-0 items-end justify-center h-full w-full bg-gradient-to-b from-neutral-500 to-neutral-700 opacity-75 hidden group-hover:flex rounded">
                            <h3 className="text-center group-hover:underline text-white text-lg font-medium p-2">Health & Fitness</h3>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Category;