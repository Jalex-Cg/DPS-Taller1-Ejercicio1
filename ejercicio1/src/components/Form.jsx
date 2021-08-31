
import Todo from '../components/Todo';
import { useState } from 'react';
import producto from '../producto.json';
const Form = () => {
    const [todo, setTodo] = useState({})
    const [todos, setTodos]=useState([
        
    ])

const handleChange = e => setTodo({[e.target.name]: e.target.value})
const handleClick = e => {
    if(Object.keys(todo).length === 0 || todo.todo.trim() === ''){
        alert('el campo no puede estar vacio')
        return
    }
    setTodos([...todos,todo])
}

const deleteTodo = indice => {
    const newTodos = [...todos]
    newTodos.splice(indice, 1)
    setTodos(newTodos)
}

return (
    <>
    <form onSubmit={e => e.preventDefault()}>

        <div>
            <label>Agregar Producto</label><br />
            <select name="todo" onChange={handleChange}>
                <option selected disabled="true">-Seleccionar producto-</option>
                {producto.ListaProducto.map((result)=> (<option name="precio" title={"$"+result.precio}>{result.nombre}</option>))}
            </select>
        </div>
        <button onClick={handleClick}>agregar</button>
    </form>
    {
        todos.map((value,index) => (<Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo} />))
    }
    </>
)
}
export default Form