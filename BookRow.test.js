import React from "react";
import { render, screen } from "@testing-library/react";
import { BookRow } from "./BookRow";

describe("BookRow", () => {
  const book = {
    title: "Book 1",
    authors: [{ name: "Author 1" }]
  };

  const getBookDetails = jest.fn();
  //To check if props are present
  test("renders book title and authors", () => {
    render(<BookRow book={book} getBookDetails={getBookDetails} />);

    const titleElement = screen.getByText("Book 1");
    const authorsElement = screen.getByText("Author 1");

    expect(titleElement).toBeInTheDocument();
    expect(authorsElement).toBeInTheDocument();
  });
});
