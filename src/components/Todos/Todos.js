import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { StyledTodos } from './Todos.styles'

function Todos({todos}) {

    const renderTodos = todos.map((todoData) => <TodoItem todoData={todoData}/>)
    return (
    <StyledTodos>
        {renderTodos}
    </StyledTodos>
  )
}

export default Todos