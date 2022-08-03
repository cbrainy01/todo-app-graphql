import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { StyledCompleted } from './Completed.styles'

function Completed({todos}) {

    const renderCompleted = todos.filter((todo) => todo.status === "COMPLETED" ).map((todo) => <TodoItem todoData={todo}/>)
  return (
    <StyledCompleted>
        {renderCompleted}
    </StyledCompleted>
  )
}

export default Completed