import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div>
      <section class="py-20">
  <h1 class="mb-12 text-center font-sans text-5xl font-bold">Books</h1>
  <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
    
  {books &&
          books.map((book, i) => (
            <div key={i}>
              <Book book={book} />
            </div>
          ))}
    
   
   
  </div>
</section>

      {/* <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul> */}
    </div>
  );
};

export default Books;
