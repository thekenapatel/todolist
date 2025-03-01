import React from "react";


function ToDoItem(props) {
    return (
        <div>
            <li
                onClick={() => {
                    props.onChecked(props.id);
                }}
                style={{ cursor: "pointer" }}
            >
                {props.text} ❌
            </li>
        </div>
    );
}

export default ToDoItem;