import React from "react";
import { render, screen } from "@testing-library/react";
import { BookTable } from "./BookTable";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

const resultsProps = [
  {
    id: 1,
    title: "Book 1 Title",
    authors: [{ name: "Book 1 Author" }]
  }
];

describe("BookTable", () => {
  // To match the props
  let wrapper = shallow(<BookTable props={resultsProps} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

test("renders book titles and authors when data is loaded", () => {
  render(<BookTable />);

  const book1Title = screen.getByText("Book 1 Title");
  const book1Author = screen.getByText("Book 1 Author");

  expect(book1Title).toBeInTheDocument();
  expect(book1Author).toBeInTheDocument();
});
