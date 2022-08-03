import React from 'react';
import Todos from '../Todos/Todos';
import { StyledDragDrop } from './DragDrop.styles';
import { useDrop } from "react-dnd";
import Progress from '../Progress/Progress';
import Completed from '../Completed/Completed';

function DragDrop({todos}) {

    // move this to in progress component
    const[{isOver}, drop] = useDrop(() => ({
        accept: "todoCard",
        drop: (item) => moveToProgress(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    function moveToProgress(cardId) {
        console.log("cardId: ", cardId);
    }

  return (
    <StyledDragDrop ref={drop}>
        <div>
            Todos
            <Todos todos={todos}/>
        </div>
        <div>
            In Progress
            <Progress todos={todos}/>
        </div>
        <div>
            complete
            <Completed todos={todos}/>
        </div>
    </StyledDragDrop>
  )
}

export default DragDrop