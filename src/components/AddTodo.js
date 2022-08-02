import React, { useState } from 'react'

function AddTodo() {

    const [userInput, setUserInput] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        //api call to add todo
    }

  return (
    <form>
        <input placeholder='add todo...' value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
        <input onSubmit={handleSubmit} value="submit" type="submit" />
    </form>
  )
}

export default AddTodo