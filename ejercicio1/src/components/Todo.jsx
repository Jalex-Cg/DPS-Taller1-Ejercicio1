import React from 'react'
import producto from '../producto.json';

const Todo = ({todo, index, deleteTodo, precio}) => {
return (
    <>
    <div className="list">
    <h3>{todo}</h3>
    <h3>{precio}</h3>
    {/* {producto.ListaProducto.map((result)=>"$"+result.precio)}  */}
    <button className="btn-delete" onClick={() => deleteTodo(index)}>X</button>
    </div>
    </>
    )
}
    export default Todo
