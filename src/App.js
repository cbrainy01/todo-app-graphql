import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "./graphql/queries";
import AddTodo from "./components/AddTodo/AddTodo";
import Loader from "./components/Loader/Loader";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Todos from "./components/Todos/Todos";
import DragDrop from "./components/DragDrop/DragDrop";
import { StyledApp } from "./App.styles";

function App() {

    const { loading, error, data } = useQuery(GET_TODOS);
  
    if (loading) {
      return <Loader/>;
    }
    if (error) {
      console.error("error: ", error);
      return <div>Error!</div>;
    }
    // data.todos.map((todo, i) => <p>{i}</p> )
    // return data.todos.map((todo, i) => <p>{i}</p> )
    // const returnedData = data.todos
  // };
  
  
  // console.log("returned Todos: ", returnedTodos)
  // console.log("data: ", data)
  return (
    <DndProvider backend={HTML5Backend}>
    <StyledApp>
       <DragDrop todos={data.todos}/>
       <AddTodo/>
    </StyledApp>
    </DndProvider>
  );
}

export default App;
