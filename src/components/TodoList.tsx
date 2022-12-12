import React from "react";
import { IItem } from "../types/todo";

interface IProps {
  todos: IItem[];
  onRemoveTodo: (id: string) => void;
}

const TodoList: React.FC<IProps> = ({ todos, onRemoveTodo }) => {
  return (
    <ul>
      {todos.map((item) => {
        return (
          <li key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            {/* <button type="button" onClick={() => onRemoveTodo(item.id)}>
              Remove
            </button> */}
            <button type="button" onClick={onRemoveTodo.bind(this, item.id)}>
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// class TodoList extends React.Component<IProps> {
//   render() {
//     return null;
//   }
// }

export default TodoList;
