import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { StyledCompleted } from './Completed.styles'
import { useDrop } from "react-dnd";
import { useMutation } from "@apollo/client";
import { UPDATE_TODO } from '../../graphql/mutations';
import { GET_TODOS } from '../../graphql/queries';

function Completed({todos}) {

    const [updateTodo] = useMutation(UPDATE_TODO)

    const renderCompleted = todos.filter((todo) => todo.status === "COMPLETED" ).map((todo) => <TodoItem key={todo.id} todoData={todo}/>)
  
    const[{isOver}, drop] = useDrop(() => ({
        accept: "todoCard",
        drop: (item) => moveToCompleted(item.id, item.status),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    async function moveToCompleted(cardId, cardOrigin) {
        // if landing spot is same as takeoff spot, return. dont make api call
        // console.log("cardorgin: ", cardOrigin)
        // console.log("cardId: ", cardId, " to completed ");
        if(cardOrigin === "COMPLETED") { return }
        await updateTodo({
            variables: { id: cardId, status: "COMPLETED" },
            refetchQueries: [
                { query: GET_TODOS }
            ]
        })
    }
  
    return (
    <StyledCompleted ref={drop}>
        <h2>Completed</h2>
        {renderCompleted}
    </StyledCompleted>
  )
}

export default Completed