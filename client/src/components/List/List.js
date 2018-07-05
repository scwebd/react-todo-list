import React from 'react';
import ListItem from './ListItem';

const List = ({ todos, toggleComplete, editTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <ListItem 
                    todo={todo}
                    toggleComplete={toggleComplete} 
                    editTodo={editTodo}
                    key={todo._id}
                    isComplete={todo.complete}
                />
            ))}
        </ul>
    );
}

export default List;