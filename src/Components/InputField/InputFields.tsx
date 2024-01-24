import React, { useRef } from "react";
import "./Style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void;
}

const InputFields: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

  const inpurRef = useRef<HTMLInputElement>(null)

  return (
    <form className="input" onSubmit={
      (e)=>{
        handleAdd(e);
        inpurRef.current?.blur();
      }
    }
    >

      <input 
      ref={inpurRef}
      type="input"
      value={todo} 
      onChange={(e) => setTodo(e.target.value)}
      placeholder="Enter a task" 
      className="input__box" />

      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputFields;
