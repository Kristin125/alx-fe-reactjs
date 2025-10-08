import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Test new todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  test("toggles a todo’s completed status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Initially not completed
    expect(todoItem).toHaveStyle("text-decoration: none");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
