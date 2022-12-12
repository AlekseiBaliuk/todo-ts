import React, { useState } from "react";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { IItem } from "./types/todo";

const App: React.FC = () => {
  const [todos, SetTodos] = useState<IItem[]>([]);

  function todoAddHandler(todo: IItem) {
    SetTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
    // SetTodos((prevTodos) => {
    //   return [
    //     ...prevTodos,
    //     {
    //       id: Math.random().toString(),
    //       title: todo.title,
    //     },
    //   ];
    // });
  }

  function todoRemoveHandler(id: string) {
    SetTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="App">
      <AddTodo onAddTodo={todoAddHandler} />
      <TodoList onRemoveTodo={todoRemoveHandler} todos={todos} />
    </div>
  );
};

export default App;
