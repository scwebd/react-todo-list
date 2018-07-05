import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Label, Input } from 'reactstrap';
// combine all of the svgs!
import checkmark from '../../images/checkmark.svg';
import undo from '../../images/undo.svg';
import close from '../../images/close.svg';

const Item = styled.li`
  color: ${props => props.isComplete ? 'gray' : 'black'};
  cursor: ${props => props.isComplete ? 'default' : 'pointer'};
  list-style-type: none;
`;

const Icon = styled.img`
    cursor: pointer;
`

class ListItem extends Component {
    state = {
        editable: false,
        todo: this.props.todo.task
    }

    toggleEditable = () => {
        this.setState({ editable: !this.state.editable })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = (event, id) => {
        event.preventDefault();
        this.props.editTodo(id, { task: this.state.todo });
        this.toggleEditable();
    }

    renderContent = () => {
        const { todo, isComplete, toggleComplete } = this.props;
        if (this.state.editable && !isComplete) {
            return (
                <Form inline onSubmit={(event) => this.handleFormSubmit(event, todo._id)}>
                    <FormGroup>
                        <Label for="todo" hidden>Edit todo:</Label>
                        <Input
                            type="text"
                            name="todo"
                            id="todo"
                            placeholder="Update task"
                            value={this.state.todo}
                            onChange={this.handleInputChange}
                        />
                        <span onClick={this.toggleEditable}><Icon src={close} alt="Close" /></span>
                    </FormGroup>
                </Form>
            
            )
        } else {
            return (
                <Item isComplete={isComplete ? true : false} editable={this.state.editable} onClick={this.toggleEditable}>{todo.task}
                    <Icon
                        src={isComplete ? undo : checkmark}
                        alt={isComplete ? "Mark as incomplete" : "Mark as complete"}
                        onClick={() => toggleComplete(todo._id, isComplete)}
                    />
                </Item>
            )
        }
    }

    render() {
        return(
            <Fragment>
                {this.renderContent()}
            </Fragment>
        )       
    }
}

export default ListItem;