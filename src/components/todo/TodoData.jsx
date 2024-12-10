const TodoData = (props) => {
    console.log(">>>Check props: ", props);
    const { name } = props;
    return (
        <div className="todo-list">
            <div>My Name is: {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    )
}

export default TodoData;