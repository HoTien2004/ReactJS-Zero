const TodoData = (props) => {
    console.log(">>>Check props: ", props);
    const { todos, deleteTodo } = props;

    const handleClick = (id) => {
        deleteTodo(id);
    }

    return (
        <div className="todo-list">
            {todos.map((item) => {
                return (
                    <div className="todo-item" key={item.id}>
                        {item.id} {""}
                        {item.name}
                        <button
                            style={{ cursor: "pointer" }}
                            onClick={() => handleClick(item.id)}
                        >Delete</button>
                    </div>
                )
            })}
        </div >
    )
}

export default TodoData;