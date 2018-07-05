import axios from 'axios';

export default {
    getAll: function() {
        return axios.get("/api/todos");
    },
    add: function(todo) {
        return axios.post("/api/todos", todo);
    }
}