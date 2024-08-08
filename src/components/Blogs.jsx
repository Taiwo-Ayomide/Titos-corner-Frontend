// src/components/BlogList.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../requestMethods'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get('/blogs/');
        const data = response.data.map(blog => ({ ...blog, showFull: false }));

        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error('Expected an array but got:', data)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBlogs();
  }, []);

  const toggleReadMore = (id) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id ? { ...blog, showFull: !blog.showFull } : blog
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-32">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white shadow-2xl mb-6 p-6 rounded-lg w-full lg:w-2/3 mx-auto"
        >
          <article>
            <h3 className="text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600">
              {blog.headline}
            </h3>
            <p
              className={`mt-3 text-sm leading-6 text-gray-600 text-justify ${
                blog.showFull ? '' : 'line-clamp-3'
              }`}
            >
              {blog.description}
            </p>
            <button
              className="mt-2 text-sm text-blue-500"
              onClick={() => toggleReadMore(blog.id)}
            >
              {blog.showFull ? 'Read less' : 'Read more'}
            </button>
            <div className="flex items-center mt-6">
              <svg
                fill="#000000"
                viewBox="0 0 32 32"
                className="h-10 w-10 rounded-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 11.5 12 C 10.671875 12 10 12.671875 10 13.5 C 10 14.328125 10.671875 15 11.5 15 C 12.328125 15 13 14.328125 13 13.5 C 13 12.671875 12.328125 12 11.5 12 Z M 18 13 L 18 15 L 23 15 L 23 13 Z M 20.96875 17.03125 C 20.96875 18.714844 20.292969 19.882813 19.3125 20.71875 C 18.332031 21.554688 17.035156 22 16 22 C 13.878906 22 12.4375 21.140625 11.3125 20.03125 L 9.90625 21.46875 C 11.300781 22.839844 13.320313 24 16 24 C 17.554688 24 19.261719 23.414063 20.625 22.25 C 21.988281 21.085938 22.96875 19.289063 22.96875 17.03125 Z"></path>
              </svg>
              <div className="ml-4">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {blog.author}
                </p>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
