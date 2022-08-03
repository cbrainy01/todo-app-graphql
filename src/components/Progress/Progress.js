import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { StyledProgress } from './Progress.styles'
import { useDrop } from "react-dnd";
import { useMutation } from '@apollo/client';
import { UPDATE_TODO } from '../../graphql/mutations';
import { GET_TODOS } from '../../graphql/queries';

function Progress({todos}) {

    const [updateTodo] = useMutation(UPDATE_TODO)

    const renderInProgress = todos.filter((todo) => todo.status === "IN_PROGRESS" ).map((todo) => <TodoItem key={todo.id} todoData={todo}/>)

    const[{isOver}, drop] = useDrop(() => ({
        accept: "todoCard",
        drop: (item) => moveToProgress(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    async function moveToProgress(cardId) {
        // if landing spot is same as takeoff spot, return. dont make api call
        console.log("cardId: ", cardId, " to in progress");
        await updateTodo({
            variables: { id: cardId, status: "IN_PROGRESS" },
            refetchQueries: [
                { query: GET_TODOS }
            ]
        })
    }
  return (
    <StyledProgress ref={drop}>
        In Progress
        {renderInProgress}
    </StyledProgress>
  )
}

export default Progress