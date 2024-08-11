import React, { useState, useEffect } from 'react';
import axiosInstance from '../requestMethods';

const Ebook = () => {
  const [books, setEbooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get('/books/');
        const data = await response.data;

        if (Array.isArray(data)) {
          setEbooks(data);
        } else {
          console.error('Expected an array but got:', data)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="pt-24 flex flex-wrap justify-center gap-8">
      {books.map((book) => (
        <div 
          key={book.id} 
          className="w-full sm:w-10/12 md:w-5/12 xl:w-1/4 bg-yellow-100 p-8 rounded-lg shadow-lg" 
          data-aos="fade-up" 
          data-aos-duration="3000"
        >
          <div className="flex flex-col items-center">
            <img src={book.imageUrl} className="w-44 xl:w-60" loading='lazy' alt="cover" />
            <div className="pt-3 text-center">
              <h1 className="font-bold text-xl">{book.title}</h1>
              <p className="text-sm pt-1">{book.description}</p>
              <p className="text-sm pt-1"># {book.price}</p>
              <p className="text-sm pt-1">{book.pages} pages</p>
              <button className="bg-yellow-500 px-4 py-2 border-2 border-red-500 rounded-xl mt-2 text-white hover:bg-red-500 transition duration-300 ease-in-out">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Ebook;
