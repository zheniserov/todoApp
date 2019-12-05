import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term:''
    } 

    buttons =[
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]

    onLabelChange = (event)=>{
        const term = event.target.value
        this.setState({term});
        this.props.onLabelChange(term);

    };

    

    render() {

        const {filter, onFilterChange} = this.props;


        const buttons = this.buttons.map(({name,label}) => {
            const isActive = filter === name;
            return (
                <Button 
                    key={name} 
                    basic color={isActive? 'green':'blue'}
                    onClick={()=> onFilterChange(name)}
                >{label}</Button>
            )
        })

        return (

            <div className="search__panel">
                <Input
                    icon="search"
                    type="text"
                    placeholder="Search"
                    onChange={this.onLabelChange}
                    value={this.state.term}
                    />
                <Button.Group >
                    {buttons}
                </Button.Group>
            </div>
        );
    }
}
