import styled from "styled-components";

export const StyledTodoItem = styled.div`
  background: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  margin-bottom: 10px;
  cursor: grab;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  background: #a71f9c;
  color: white;
  height: 50%;
  display: flex;
  align-self: center;
  border-radius: 2px;
  border: 0.5px solid black;
`;
