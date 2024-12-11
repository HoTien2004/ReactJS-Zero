const TodoData = (props) => {
    console.log(">>>Check props: ", props);
    const { todos } = props;
    return (
        <div className="todo-list">
            {todos.map((item) => {
                return (
                    <div className="todo-item" key={item.id}>
                        {item.id} {""}
                        {item.name}
                        <button>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;