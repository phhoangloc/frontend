import Api from './Api';
import url from '../storage/url';


const getTodoByUser = () => {
    return Api.get(`${url}/listtodo`)
}
const creatTodoByUser = (todolist) => {
    const body = {
        todolist
    }
    return Api.post(`${url}/listtodo`, body)
}
const updateTodoByUser = (id, todolist) => {
    const body = {
        todolist
    }
    return Api.put(`${url}/listtodo/` + id, body)
}
const deleteTodoByUser = (id) => {
    return Api.delete(`${url}/listtodo/` + id)
}
const TodoApi = {
    getTodoByUser,
    creatTodoByUser,
    updateTodoByUser,
    deleteTodoByUser
}
export default TodoApi