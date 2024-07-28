
const TodoNew = (props) => {
    console.log(">>> Check point", props);

    const { addNewTodo } = props;

    // addNewTodo("Eric");

    const handlerClick = () => {
        alert("Click me");
    }

    const handlerOnChange = (name) => {
        console.log("handlerOnChange", name);
    }

    return (
        <div className='todo-new'>
            <input type="text"
                onChange={handlerOnChange((event) => handlerOnChange(event.target.value))}
            />
            <button style={{ cursor: "pointer" }}
                onClick={handlerClick}
            >Add</button>
        </div>
    )
}

export default TodoNew;