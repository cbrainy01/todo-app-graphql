import styled from "styled-components";

export const StyledAddTodo = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid orange;
  align-items: center;
  margin: 0 5% 0 5%;
  position: absolute;
  bottom: 20px;
  width: 90%;
  background: white;
  height: 65px;
  border-radius: 10px;
  form {
    width: 90%;
    background: white;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
  }
`;

export const TodoInput = styled.input`
  all: unset;
  padding-left: 10px;
  width: 75%;
  height: 100%;
  border-radius: 5px;
  background: #faddb9;
`;

export const SubmitTodo = styled.input`
  border: 1px solid #a71f9c;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;
  background: #a71f9c;
  color: white;
  width: 20%;
`;
