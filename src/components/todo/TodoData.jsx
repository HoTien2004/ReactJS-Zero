const TodoData = (props) => {
    console.log(">>>Check props: ", props);
    const { name, todos } = props;
    return (
        <div className="todo-list">
            <div>
                {JSON.stringify(todos)}
            </div>
        </div>
    )
}

export default TodoData;