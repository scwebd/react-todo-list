import React from 'react';

const ListItem = ({ todo }) => {
    return (
        <li>{todo.task}</li>
    )
}

export default ListItem;