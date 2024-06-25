import { useState } from "react";
import { BsPlus } from "react-icons/bs";

function CreateForm({ addTodo }) {
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(content);
    setContent("");
  };
  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="請輸入待辦事項"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button type="submit">
        <BsPlus style={{ fontSize: "24px" }} />
      </button>
    </form>
  );
}

export default CreateForm;
