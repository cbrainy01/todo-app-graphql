import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { StyledTodos } from './Todos.styles'
import { useDrop } from "react-dnd";
import { useMutation } from '@apollo/client';
import { UPDATE_TODO } from '../../graphql/mutations';
import { GET_TODOS } from '../../graphql/queries';

function Todos({todos}) {

    const [updateTodo] = useMutation(UPDATE_TODO)

    const renderTodos = todos.filter((todo) => todo.status === "TODO" ).map((todo) => <TodoItem key={todo.id} todoData={todo}/>);

    const[{isOver}, drop] = useDrop(() => ({
        accept: "todoCard",
        drop: (item) => moveToTodos(item.id, item.status),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    async function moveToTodos(cardId, cardOrigin) {
        // console.log("cardId: ", cardId, " to todos");
        if(cardOrigin === "TODO") { return }
        await updateTodo({
            variables: { id: cardId, status: "TODO" },
            refetchQueries: [
                { query: GET_TODOS }
            ]
        })
    }

    return (
    <StyledTodos ref={drop}>
        Todos
        {renderTodos}
    </StyledTodos>
  )
}

export default Todos