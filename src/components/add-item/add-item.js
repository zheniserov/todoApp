import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';

import './add-item.css';

export default class AddItem extends Component {

    state = {
        label:''
    }

    onLabelChange = (event) => {
        this.setState({
            label:event.target.value
        });
    };
    onSubmit =(event)=>{
        event.preventDefault();
        this.props.addItem(this.state.label)
        this.setState({
            label:""
        }); 
        
    };
    render() {
        return (
            <form className="add__item"
                onSubmit={this.onSubmit}
            >
                <Input
                    icon="chevron left"
                    className="add__item__input"
                    type="text"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done?"
                    value={this.state.label}
                />
                <Button
                    primary
                    
                >Add Item</Button>
            </form>
        )
    }
}

