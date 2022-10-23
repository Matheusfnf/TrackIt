import styled from "styled-components";

export const Inputstyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin: 10%;
  margin-top: 20%;

  img {
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20%;
    margin-bottom: 32px;
  }

  input {
    margin: 6px;
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    font-family: "Lexend Deca", sans-serif;
   
  }

  button {
    width: 310px;
    height: 45px;
    margin: 6px;
    background-color: #52b6ff;
    color: white;
    font-family: "Lexend Deca", sans-serif;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
  }

  p {
    color: #52b6ff;
    margin: 20px;
    margin-left: 40px;
    text-decoration: underline;
    font-family: "Lexend Deca", sans-serif;
  }

  #username::placeholder {
    color: #dbdbdb;
    font-size: 20px;
    font-family: "Lexend Deca", sans-serif;
    padding-left: 10px;
  }
  #password::placeholder {
    color: #dbdbdb;
    font-size: 20px;
    font-family: "Lexend Deca", sans-serif;
    padding-left: 10px;
  }

  #email::placeholder {
    color: #dbdbdb;
    font-size: 20px;
    font-family: "Lexend Deca", sans-serif;
    padding-left: 10px;
  }

  #foto::placeholder {
    color: #dbdbdb;
    font-size: 20px;
    font-family: "Lexend Deca", sans-serif;
    padding-left: 10px;
  }
`;
