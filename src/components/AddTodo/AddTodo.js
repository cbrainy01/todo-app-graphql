import React, { useState } from 'react'
import { InputContainer, StyledAddTodo, SubmitTodo, TodoInput } from './AddTodo.styles';
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
    <InputContainer>
    <form onSubmit={handleSubmit}>
        <TodoInput placeholder='add todo...' value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
        {/* <SubmitTodo value="submit" type="submit" /> */}
        <button>Submit</button>
    </form>
    </InputContainer>
    </StyledAddTodo>
  )
}

export default AddTodo