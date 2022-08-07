import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { StyledTodos } from './Todos.styles'
import { useDrop } from "react-dnd";
import { useMutation } from '@apollo/client';
import { UPDATE_TODO } from '../../graphql/mutations';
import { GET_TODOS } from '../../graphql/queries';

function Todos({todos, handleTodosDrop}) {

    const [updateTodo] = useMutation(UPDATE_TODO)

    const renderTodos = todos.filter((todo) => todo.status === "TODO" ).map((todo) => <TodoItem key={todo.id} todoData={todo}/>);
    // const renderTodos = todos.map((todo) => <TodoItem key={todo.id} todoData={todo}/>)

    const[{isOver}, drop] = useDrop(() => ({
        accept: "todoCard",
        drop: (item) => moveToTodos(item.id, item.status, item.title),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    async function moveToTodos(cardId, cardOrigin, cardTitle) {
        // console.log("cardId: ", cardId, " to todos");
        if(cardOrigin === "TODO") { return }
        await updateTodo({
            variables: { id: cardId, status: "TODO" },
            refetchQueries: [
                { query: GET_TODOS }
            ]
        })
        // invoke callback
        // handleTodosDrop(cardOrigin, "TODO", cardId, cardTitle);
    }

    return (
    <StyledTodos ref={drop}>
        <h2>Todos</h2>
        {renderTodos}
    </StyledTodos>
  )
}

export default Todos