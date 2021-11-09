import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [title, setText] = useState("");
    const [description, setDescription] = useState("");
    const [done, setDone] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert('Please add a task!')
            return
        }

        onAdd({ title, description, done });

        setText("")
        setDescription("")
        setDone(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={title}
                    onChange={(e) => setText(e.target.value)}
                ></input>
            </div>
            <div className="form-control">
                <label>Description</label>
                <input
                    type="text"
                    placeholder="Add Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></input>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    value={done}
                    onChange={(e) => setDone(e.currentTarget.checked)}
                ></input>
            </div>

            <input
                className="btn btn-block"
                type="submit"
                value="Save Task"
            ></input>
        </form>
    );
};

export default AddTask;
