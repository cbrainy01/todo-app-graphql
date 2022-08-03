import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { StyledProgress } from './Progress.styles'

function Progress({todos}) {

    const renderInProgress = todos.filter((todo) => todo.status === "IN_PROGRESS" ).map((todo) => <TodoItem todoData={todo}/>)

  return (
    <StyledProgress>
        {renderInProgress}
    </StyledProgress>
  )
}

export default Progress