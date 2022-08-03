import React from 'react'
import { DeleteButton, StyledTodoItem } from './TodoItem.styles'
import { useDrag } from "react-dnd"

function TodoItem({todoData}) {

    const [ {isDragging}, drag ] = useDrag(() => ({
        type: "todoCard",
        item: {id: todoData.id},
        // card: "sup",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

  return (
    // <StyledTodoItem isDragging={isDragging}>
    <StyledTodoItem ref={drag} isDragging>
        <p>{todoData.title}, id: {todoData.id}</p>
        <DeleteButton aria-label='delete todo'>x</DeleteButton>
    </StyledTodoItem>
  )
}

export default TodoItem