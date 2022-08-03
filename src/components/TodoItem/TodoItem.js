import React from 'react'
import { StyledTodoItem } from './TodoItem.styles'

function TodoItem({todoData}) {
  return (
    <StyledTodoItem>
        <p>{todoData.title}</p>
        <button aria-label='delete'>x</button>
    </StyledTodoItem>
  )
}

export default TodoItem