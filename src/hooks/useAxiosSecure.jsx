import axios from 'axios'
const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: import.meta.env.VITE_api_url
    })

    return [axiosSecure]

};

export default useAxiosSecure;