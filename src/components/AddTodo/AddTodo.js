import React, { useState } from 'react'
import { StyledAddTodo } from './AddTodo.styles';
import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../../graphql/mutations';
import { GET_TODOS } from '../../graphql/queries';

function AddTodo() {

    const [userInput, setUserInput] = useState("")
    const [addTodo] = useMutation(ADD_TODO);

    async function handleSubmit(e) {
      e.preventDefault();
      if (!userInput.trim()) {
        console.log("input field empty!");
        return;
      }
      console.log("adding todo of ", userInput);
      await addTodo({ 
        variables: { title: userInput },
        refetchQueries: [
          { query: GET_TODOS }
        ] 
      });
      setUserInput("")
    }

  return (
    <StyledAddTodo>
    <form onSubmit={handleSubmit}>
        <input placeholder='add todo...' value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
        <input value="submit" type="submit" />
    </form>
    </StyledAddTodo>
  )
}

export default AddTodo