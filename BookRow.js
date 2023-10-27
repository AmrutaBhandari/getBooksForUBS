import React from "react";

export function BookRow({ book, getBookDetails }) {
  const { title = "", authors = [] } = book;

  let authorsName = "";
  if (authors && authors.length) {
    authorsName = authors
      .map((eachAuthor) => {
        return eachAuthor.name;
      })
      .join();
  }

  return (
    //Displays each record from API
    <tr onClick={() => getBookDetails(book)}>
      <td>{title}</td>
      <td>{authorsName}</td>
    </tr>
  );
}
