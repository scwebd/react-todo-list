import React, { Component, Fragment } from 'react';
import API from './utils/API';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import List from './components/List/List';

class App extends Component {
	state  = {
		todos: [],
		newTodo: ""	
	}

	componentDidMount() {
		this.getTodos();
	}

	getTodos = () => {
		API.getAll()
			.then(todos => this.setState({ todos: todos.data }))
			.catch(err => console.log(err));
	}

	addTodo = todo => {
		API.add(todo)
			.then(todo => {
				this.setState({ newTodo: "" });
				this.getTodos();
			})
			.catch(err => console.log(err));
	}

	editTodo = (id, todo) => {
		API.editTodo(id, todo)
			.then(todo => this.getTodos())
			.catch(err => console.log(err));		
	}

	toggleComplete = (id, complete) => {
		const toggledValue = complete ? false : true;
		API.editTodo(id, { complete: toggledValue })
			.then(todo => this.getTodos())
			.catch(err => console.log(err));
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	handleFormSubmit = event => {
		event.preventDefault();
		const newTodo = {
			task: this.state.newTodo,
			priority: 3
		}
		if (this.state.newTodo) {
			this.addTodo(newTodo)
		} else {
			console.log("set error state");
		}
	}

	render() {
		const remaining = this.state.todos.filter(todo => !todo.complete);
		const completed = this.state.todos.filter(todo => todo.complete);
		return (
			<Container>
				<Row>
					<Col>
						<h1>MERN To Do List</h1>
						<FormGroup onSubmit={this.handleFormSubmit}>
          					<Label for="newTodo" hidden>Add new todo:</Label>
							<Input 
								type="text" 
								name="newTodo" 
								id="newTodo" 
								placeholder="Task to complete"
								value={this.state.newTodo}
								onChange={this.handleInputChange} 
							/>
							<button type="submit" onClick={this.handleFormSubmit}>Submit</button>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md="6">
						<List todos={remaining} toggleComplete={this.toggleComplete} editTodo={this.editTodo} />
					</Col>
					<Col md="6">
						<List todos={completed} toggleComplete={this.toggleComplete} editTodo={this.editTodo} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
