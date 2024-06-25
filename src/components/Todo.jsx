import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import EditForm from "./Editform";

function Todo({
  todo,
  deleteTodo,
  toggleCompleted,
  toggleIsEditing,
  editTodo,
}) {
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo} />
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          toggleCompleted(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <RiEdit2Fill
          onClick={() => {
            toggleIsEditing(todo.id);
          }}
          style={{ cursor: "pointer" }}
        />
        <RiDeleteBin6Fill
          onClick={() => {
            deleteTodo(todo.id);
          }}
          style={{ cursor: "pointer", marginLeft: "3px" }}
        />
      </div>
    </div>
  );
}

export default Todo;
