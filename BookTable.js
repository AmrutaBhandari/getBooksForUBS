import React, { useEffect, useState } from "react";
import { BookRow } from "./BookRow";
import { Spinner } from "./Spinner";
import "./styles.css";

export function BookTable() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchBooks = (url) => {
      return fetch(url);
    };
    //fetching data to get books title and author
    fetchBooks("https://gutendex.com/books/")
      .then((response) => {
        return response.json();
      })
      .then((res) => setBooks(res.results))
      .catch((error) => {
        //Prints error if API fails.
        setBooks([]);
        setError(true);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  const getBookDetails = (book) => {
    const { formats = {} } = book;
    let url = "";
    url = formats["text/plain"];

    if (url && window.open) {
      //Opens the book details in new tab
      window.open(url);
    } else if (!url) {
      //Alerts user if book url is not available
      alert("Book Details are not available");
    }
  };

  return (
    //Displaying book title and book authors
    <div className="App">
      {loading && <Spinner />}
      {!error && !loading && books && books.length ? (
        <table>
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Book Authors</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <BookRow
                getBookDetails={getBookDetails}
                book={book}
                key={book.id}
              />
            ))}
          </tbody>
        </table>
      ) : error ? (
        <div>{"Error while fetching the book records !!"}</div>
      ) : null}
    </div>
  );
}
