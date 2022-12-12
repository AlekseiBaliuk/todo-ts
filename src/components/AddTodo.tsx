import React, { useState } from "react";
import { IItem } from "../types/todo";

interface IProps {
  onAddTodo: (todo: IItem) => void;
}

const AddTodo: React.FC<IProps> = (props) => {
  //   const titleInputRef = useRef<HTMLInputElement>(null);

  // type OnlyTitle = Pick<IItem, "title">;

  // const [todo, titleTodo] = useState<Partial<OnlyTitle>>({});

  const [todo, SetTodo] = useState<IItem>({ id: "", title: "" });

  function titleHandler(e: React.ChangeEvent<HTMLInputElement>) {
    SetTodo({
      id: Math.random().toString(),
      title: e.target.value,
    });
  }

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    // console.log(titleInputRef.current?.value);
    if (!todo || todo.title.trim() === "") {
      return;
    }
    props.onAddTodo(todo);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <span>Add title</span>
        <input type="text" id="add-todo" onChange={titleHandler} />
        {/* <input type="text" id="add-todo" onChange={titleHandler} ref={titleInputRef} /> */}
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodo;
