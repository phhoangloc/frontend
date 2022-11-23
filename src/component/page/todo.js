import { useState, useEffect } from "react"
import TodoApi from "../../api/TodoApi"
import configicon from "../../img/configIcon.png"
import deleteicon from "../../img/deleteicon.png"

const Todo = () => {
    const [deleteArray, setDeleteArray] = useState([])
    const [todo, setTodo] = useState()
    const [id, setId] = useState()
    const [newtodo, setNewTodo] = useState()
    const inputnewtodo = document.querySelector("#newtodo")

    const getTodo = async () => {
        const result = await TodoApi.getTodoByUser()
        setTodo(result)
    }

    useEffect(() => {
        getTodo()
    }, [todo]);

    const onclickgetId = async (id) => {
        setId(id)
        inputnewtodo.focus()
    }

    const onclickdelete = async (id) => {
        const result = await TodoApi.deleteTodoByUser(id)
    }

    const onchangeCheckbox = (id) => {
        const array = deleteArray.filter(item => item == id)
        array.length == 0 ?
            setDeleteArray([...deleteArray, id]) :
            setDeleteArray(deleteArray.filter(item => item != id))
    }

    const data = todo ? todo.map((item, index) =>
        <tr key={index}>
            <td className="col1"><input type="checkbox" onChange={() => onchangeCheckbox(item.id)} /></td>
            <td className="col2">{item.TODO} <span><img src={configicon} onClick={() => onclickgetId(item.id)} /><img src={deleteicon} onClick={() => onclickdelete(item.id)} /></span></td>
            <td className="col3">{item.done}</td>
            <td className="col4">{item.date != "null" ? item.date : null}</td>
        </tr>
    ) : null

    const onclickAddTodo = async () => {
        const result = await TodoApi.creatTodoByUser(newtodo)
        inputnewtodo.value = null
    }
    const onclickconfigTodo = async () => {
        const result = await TodoApi.updateTodoByUser(id, newtodo)
        inputnewtodo.value = null
        setId()
    }
    const onclickDeleteArray = () => {
        deleteArray.map(async (item, idex) => {
            await TodoApi.deleteTodoByUser(item);
        })
    }
    const input = id ?
        <><input id="newtodo" type="text" placeholder="config todo" onChange={(e) => setNewTodo(e.target.value)} /><button onClick={onclickconfigTodo}>CONFIG</button></> :
        <><input id="newtodo" type="text" placeholder="add new" onChange={(e) => setNewTodo(e.target.value)} /><button onClick={onclickAddTodo}>ADD</button></>
    return (
        <div className="Todo">
            <h1>TODO LIST</h1>
            {input}
            <table className="todotable">
                <tbody>
                    <tr>
                        <th className="col1">{deleteArray.length ? <img src={deleteicon} onClick={onclickDeleteArray} /> : 'select'}</th>
                        <th className="col2">todo</th>
                        <th className="col3">done</th>
                        <th className="col4">date</th>
                    </tr>
                    {data}
                </tbody>
            </table>
        </div>
    )
}
export default Todo
