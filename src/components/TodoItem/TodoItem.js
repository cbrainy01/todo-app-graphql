import React from 'react'
import { DeleteButton, StyledTodoItem } from './TodoItem.styles'
import { useDrag } from "react-dnd";
import { useMutation } from '@apollo/client';
import { DELETE_TODO } from '../../graphql/mutations';
import { GET_TODOS } from '../../graphql/queries';

function TodoItem({todoData}) {

    const [deleteTodo] = useMutation(DELETE_TODO)

    const [ {isDragging}, drag ] = useDrag(() => ({
        type: "todoCard",
        item: {id: todoData.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

    async function handleDeleteTodo() {

        await deleteTodo({
            variables: { id: todoData.id },
            refetchQueries: [
                { query: GET_TODOS }
            ]
        })
    }

  return (
    <StyledTodoItem ref={drag} isDragging>
        <p>{todoData.title}, id: {todoData.id}</p>
        <DeleteButton onClick={handleDeleteTodo} aria-label='delete todo'>x</DeleteButton>
    </StyledTodoItem>
  )
}

export default TodoItem