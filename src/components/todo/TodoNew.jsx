import { useState } from "react";

const TodoNew = (props) => {

    // useState hook
    // const varlueInput = "";
    const [valueInput, setValueInput] = useState("eric");
    const { addNewTodo } = props;

    // addNewTodo("Eric");

    const handlerClick = () => {
        console.log("check valueInput", valueInput);
    }

    const handlerOnChange = (name) => {
        setValueInput(name);
    }

    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handlerOnChange(event.target.value)}
            />
            <button style={{ cursor: "pointer" }}
                onClick={handlerClick}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;