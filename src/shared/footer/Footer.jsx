import { FaGooglePlay, FaAppStore, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="container mx-auto bg-transparent text-gray-800 py-8 px-5 bg-gray-50 border-gray-500">
            <div className='flex justify-between items-center py-5'>
                <h2 className="text-4xl font-medium">
                    Logo
                </h2>

                {/* App Store/Google Play links */}
                <div className="flex space-x-4">
                    <a href="#" className="text-xl">
                        <FaGooglePlay />
                    </a>
                    <a href="#" className="text-xl">
                        <FaAppStore />
                    </a>
                </div>
            </div>
            <hr className='border-b border-t-0 border-gray-500' />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 pt-5 text-lg font-medium">
                {/* Column 1: Address and Copyright */}
                <div className="mb-4 md:mb-0 md:border-r md:border-gray-500 md:pr-4 md:pl-4">
                    <p className=" mb-2">123 Street, City</p>
                    <p className="mb-2">Country, 12345</p>
                    <p className='text-sm font-normal'>&copy; 2024 Your Blog. All rights reserved.</p>
                </div>

                {/* Column 2: Links */}
                <ul className="mb-4 md:mb-0 md:border-r md:border-gray-500 md:pr-4 md:pl-4 text-left">
                    <li>
                        <a href="#" className="block mb-2">
                            Link 1
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block mb-2">
                            Link 2
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block">
                            Link 3
                        </a>
                    </li>
                </ul>

                {/* Column 3: Terms and Related Blogs */}
                <ul className="mb-4 text-left md:mb-0 md:border-r md:border-gray-500 md:pr-4 md:pl-4">
                    <li>
                        <a href="#" className="block mb-2">
                            Terms & Conditions
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block mb-2">
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block">
                            Related Blog 2
                        </a>
                    </li>
                </ul>

                {/* Column 4: Social Media Links */}
                <div className="flex items-center">
                    <a href="#" className="text-xl mr-4">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-xl mr-4">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-xl">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
