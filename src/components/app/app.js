import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddItem from '../add-item';


export default class App extends Component {
    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, done: false },
            { label: 'Build Awesome App', important: true, done: false },
            { label: 'Go Home', important: false, done: false }
        ],
        term: '',
        filter: 'all'
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const newArray = [
                ...todoData.slice(0, id),
                ...todoData.slice(id + 1)];
            return {
                todoData: newArray
            }
        });
    };

    addItem = (text) => {
        this.setState(({ todoData }) => {
            const newItem = {
                label: text,
                important: false
            }
            const newArray = [
                ...todoData, newItem
            ];
            return {
                todoData: newArray
            }
        });
    };

    toggleProperty(arr, id, propName) {
        const oldItem = arr[id];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        return [
            ...arr.slice(0, id),
            newItem,
            ...arr.slice(id + 1)
        ];
       
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return{
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return{
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    search(items, term){
        if(term.length === 0){
            return items; 
        }
        return items.filter((item)=>{
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }
    
    onSearchChange = (term) =>{
        this.setState({term});
    };
    onFilterChange = (filter) =>{
        this.setState({filter});
    };

    filter(items, filter){
        switch(filter){
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;

        }
    }
    

    render() {
        const{todoData, term, filter} = this.state;
        const visibleItems = this.filter(
            this.search(todoData, term), filter
        );
        const doneCount = this.state.todoData.filter(el => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        return (
            <Grid centered columns={3}>
                <Grid.Column>
                    <Segment>
                        <span>{(new Date().toString())}</span>
                        <AppHeader toDo={todoCount} done={doneCount} />
                        <SearchPanel
                            onLabelChange={this.onSearchChange}
                            filter={filter}
                            onFilterChange={this.onFilterChange}
                        />
                        <TodoList
                            todos={visibleItems}
                            onDeleted={key => { this.deleteItem(key); }}
                            onToggleImportant={this.onToggleImportant}
                            onToggleDone={this.onToggleDone}
                        />
                        <AddItem
                            addItem={(text) => { this.addItem(text); }}
                        />
                    </Segment>
                </Grid.Column>
            </Grid>

        );
    };
}

