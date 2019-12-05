import React from 'react';
import { List } from 'semantic-ui-react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
    const elements = todos.map((item, key) => {
        return (
            <div className="todo__list" key={key}>
                <List.Item className="todo__item" >
                    <TodoListItem
                        {...item}
                        onDeleted={() => { onDeleted(key) }}
                        onToggleImportant={() => onToggleImportant(key)}
                        onToggleDone={() => onToggleDone(key)}
                    />
                </List.Item>
            </div>
        );
    })
    return (
        <List>
            {elements}
        </List>
    );
};

export default TodoList;