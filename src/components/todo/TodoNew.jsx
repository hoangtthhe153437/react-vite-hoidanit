
const TodoNew = (props) => {
    console.log(">>> Check point", props);

    const { addNewTodo } = props;

    // addNewTodo("Eric");
    return (
        <div className='todo-new'>
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default TodoNew;