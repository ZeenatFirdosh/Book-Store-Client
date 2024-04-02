import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <>
      <article class="h-90  m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
        <a href="#" class="block h-full w-full">
          <img
            class="max-h-50 w-full object-cover"
            alt="featured image"
            src={image}
          />
          <div class="w-full bg-white p-4">
            <p class="text-md font-medium text-indigo-500">By {author} </p>
            <p class="mb-2 text-xl font-medium text-gray-800">{name}</p>
            <p class="text-xs font-light text-gray-400">{description}</p>
            <div class="justify-between mt-4 flex flex-wrap items-center">
              <Link
                to={`/books/${_id}`}
                class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"
              >
                Update
              </Link>
              <Button
                onClick={deleteHandler}
                class="mr-2 mt-1 rounded-2xl bg-red-100 py-1.5 px-4 text-xs text-gray-600"
              >
                Delete
              </Button>
            </div>
          </div>
        </a>
      </article>
    </>
  );
};

export default Book;
