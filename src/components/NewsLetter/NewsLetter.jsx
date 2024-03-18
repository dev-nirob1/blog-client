
const NewsLetter = () => {
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div className="h-[50vh] container mx-auto flex items-center justify-center bg-gray-900 my-10">
            <div className="w-3/4 text-gray-300 text-center">
                <h2 className="text-3xl font-medium">
                    Subscribe to Our Newsletter!
                </h2>
                <p className="mt-4 mb-5 font-medium w-10/12 mx-auto">
                    Stay ahead of the curve with Blog-Express&apos;s newsletter. Get fresh insights, expert tips, and exclusive content delivered straight to your inbox. Join our community of avid readers and bloggers today!
                </p>
                <form onSubmit={handleSubmit} className="flex w-1/2 mx-auto justify-center items-center">
                    <input className="w-full p-2 rounded-l outline-none border-none" type="text" placeholder="Input Your Email" />
                    <button className="py-2 px-4 bg-rose-600 font-semibold text-gray-50 rounded-r">SubsCribe</button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;