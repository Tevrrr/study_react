import React from 'react';
import Todoline from './TodoLine';

const Todolist = ({TodoItems, remove}) => {
    return (
        <div>
            {TodoItems.map((TodoItem, index) =>
                <Todoline 
                remove = {remove}
                TodoText={TodoItem.TodoText} 
                number={index+1}
                id={TodoItem.id}/>
            )}
        </div>
    );
}

export default Todolist;
