import React, { useState } from 'react';
import Todos from '../Todos/Todos';
import { StyledDragDrop } from './DragDrop.styles';
import { useDrop } from "react-dnd";
import Progress from '../Progress/Progress';
import Completed from '../Completed/Completed';

function DragDrop({todos}) {

    // const [start, setStart] = useState([])
    // const [middle, setMiddle] = useState([])
    // const [end, setEnd] = useState([])

    // let originUpdate
    // let destinationUpdate
    // function handleTodosDrop(origin, destination, id, title) {
        
    //     if(origin === "IN_PROGRESS") { originUpdate = middle.filter( (todo) => todo.id !== id  ); setMiddle(originUpdate) }
    //     else if(origin === "COMPLETED") { originUpdate = end.filter( (todo) => todo.id !== id ); setEnd(originUpdate) }
    //     // add todo to start
    //     setStart([...start, {"id": id, "title": title}])
    // }

  return (
    <StyledDragDrop>
            <Todos todos={todos}/>
            <Progress todos={todos}/>
            <Completed todos={todos}/>
    </StyledDragDrop>
  )
}

export default DragDrop