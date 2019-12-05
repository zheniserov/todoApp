import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
    
    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

        let classNames = "todo__list__span";
        if(done){
            classNames += " done";
        };
        if(important){
            classNames += " important";
        };
       
        
        return (
            <div className="todo__list__item">
                <div className={classNames}>
                    <span 
                    onClick={onToggleDone}>
                    {label}</span>
                </div>
                <div className="todo__list__button">
                    <Button 
                    icon basic color="red"
                    onClick={onDeleted}
                    >
                        <Icon name="trash" />
                    </Button>
                    <Button 
                    icon basic color="green"
                    onClick={onToggleImportant}
                    >
                        <Icon name="exclamation" />
                    </Button>
                </div>
            </div>

        );
    }
}
