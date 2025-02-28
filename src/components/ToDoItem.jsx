import React from "react";


function ToDoItem(props) {
    return (
        <li>
            <button
                onClick={() => {
                    props.onChecked(props.id);
                }}
            >
                {props.text} ❌
            </button>
        </li>
    );
}

export default ToDoItem;