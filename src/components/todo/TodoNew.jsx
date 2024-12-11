import { useState } from "react";

const TodoNew = (props) => {

    // useState hook
    const [valueInput, setValueInput] = useState("david");

    const { addNewTodo } = props;

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }

    return (
        <div className="todo-add">
            <input type="text"
                onChange={(e) => handleOnChange(e.target.value)}
                value={valueInput}
            />
            <button
                style={
                    { cursor: "pointer" }
                }
                onClick={handleClick}
            >Add</button>
            <div style={{
                fontSize: "16px",
                marginTop: "10px"
            }}>
                Data = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;