import React from 'react';
import ListItem from './ListItem';

const List = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => (
                <ListItem 
                    todo={todo} 
                    key={todo._id}
                />
            ))}
        </ul>
    );
}

export default List;