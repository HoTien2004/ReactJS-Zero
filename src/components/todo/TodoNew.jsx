import { useState } from "react";

const TodoNew = (props) => {

    // useState hook
    const [valueInput, setValueInput] = useState("tienho");

    const { addNewTodo } = props;

    const handleClick = () => {
        addNewTodo(valueInput);
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }

    return (
        <div className="todo-add">
            <input type="text"
                onChange={(e) => handleOnChange(e.target.value)}
            />
            <button
                style={
                    { cursor: "pointer" }
                }
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;