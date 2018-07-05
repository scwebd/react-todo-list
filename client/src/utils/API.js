import axios from 'axios';

export default {
    getAll: function() {
        return axios.get("/api/todos");
    },
    add: function(todo) {
        return axios.post("/api/todos", todo);
    },
    editTodo: function(id, todo) {
        return axios.put(`/api/todos/${id}`, todo);
    }
}