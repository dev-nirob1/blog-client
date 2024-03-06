import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AddBlog = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [value, setValue] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const handleAddBlogs = async (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const category = form.category.value;
        const titleImage = form.image.files[0];
        setSelectedImage(titleImage);

        const formData = new FormData();
        formData.append('image', titleImage);

        const imgResponse = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageUpload_key}`, {
            method: 'POST',
            body: formData,
        });
        const imgData = await imgResponse.json();
        console.log('ImgBB Response:', imgData);

        const blogs = {
            author: {
                name: user?.displayName,
                profileImage: user?.photoURL,
                date: new Date(),
            },
            titleImage: imgData.data.url,
            title,
            category,
            content: value,
            likes: parseInt(0),
            comments: parseInt(0),
            approved: false
        };

        const res = await axiosSecure.post('/blogs', blogs);
        if(res.data.acknowledged){
            alert('blogs added successfully')
        }
        console.log('Blog Added:', res.data);
        form.reset()
    };

    return (
        <div>
            <h1 className="font-medium text-3xl text-center">Add Your Content</h1>
            <form onSubmit={handleAddBlogs} className="w-10/12 mx-auto my-8">

                <label htmlFor="title"></label>
                <input type="text" className="p-2 mb-4 border outline-none rounded w-full" placeholder="Title" name='title' />

                <label htmlFor="category"></label>
                <select className="p-2 block bg-white rounded border w-full" id="cars" name="category">
                    <option disabled selected>Select a category</option>
                    <option value="Programming & Tech">Programming & Tech</option>
                    <option value="Travel & Adventure">Travel & Adventure</option>
                    <option value="Book Review">Book Review</option>
                    <option value="Personal Development">Personal Development</option>
                    <option value="News & Updates">News & Updates</option>
                    <option value="Health & Fitness">Health & Fitness</option>
                </select>

                <label htmlFor="image"></label>
                <input className='mt-4 p-2 border rounded w-full mx-auto' type="file" id='image' name='image' />

                <div className='mt-4'>
                    <ReactQuill theme="snow" value={value} onChange={setValue} />
                </div>
                <button className='border px-5 py-2 rounded bg-indigo-500 text-white font-medium mt-4' type="submit">Add Blog</button>
            </form>
        </div>
    );
};

export default AddBlog;
