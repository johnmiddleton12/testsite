import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div
            // className={task.done ? "task reminder" : "task"}
            className={`task ${task.done ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
                {task.title}{" "}-{" "}{task.done ? "Done" : "Not done"}
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.description}</p>
        </div>
    );
};

export default Task;
