import styled from "styled-components";

export const StyledTodoItem = styled.div`
    background: ${ props => props.isDragging ? 'pink' : 'white'};
    border: solid red 2px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 10px;
    margin-bottom: 10px;
    // align-items: left;
`

export const DeleteButton = styled.button`
    cursor: pointer;
    background: red;
    height: 50%;
    display: flex;
    align-self: center;
    border-radius: 2px;
    border: .5px solid black;
`