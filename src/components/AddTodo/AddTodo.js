import React, { useState } from 'react'
import { StyledAddTodo } from '../AddTodo.styles';

function AddTodo() {

    const [userInput, setUserInput] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        //api call to add todo
    }

  return (
    <StyledAddTodo>
    <form>
        <input placeholder='add todo...' value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
        <input onSubmit={handleSubmit} value="submit" type="submit" />
    </form>
    </StyledAddTodo>
  )
}

export default AddTodo