import styled from "styled-components";

export const HabitosStyled = styled.div`
  h1 {
    margin: 10%;
    font-size: 23px;
    color: #126ba5;
  }

  p {
    font-size: 18px;
    color: #666666;
    text-align: center;
  }

  .adicionar {
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 27px;
    color: white;
    border-radius: 5px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    margin: 2px;
    background-color: white;
    border: 1px solid #d4d4d4;
    color: #d4d4d4;
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  margin-right: 23%;
  margin-top: 2%;
`;

export const DayOfTheWeek = styled.button`
  margin: 2px;
  background-color: ${(props) => (props.ativo ? "#CFCFCF" : "white")};
  border: 1px solid #d4d4d4;
  color: gray;
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;

export const CaixaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 90%;
  height: 180px;
  background-color: white;
  margin-left: 5%;
  margin-bottom: 5%;
  border-radius: 5px;
  

  input {
    width: 303px;
    height: 45px;
    color: #d4d4d4;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    margin-top: 10px;
  }

  #nomeDoHabito::placeholder {
    color: #d4d4d4;
    font-size: 20px;
    padding-left: 10px;
  }
`;

export const SalvarECancelar = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  margin-top: 5%;
  margin-left: 45%;

  .salvar {
    margin-left: 10%;
    background-color: #52b6ff;
    padding: 10px;
    border-radius: 5px;
    width: 84px;
    height: 35px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none !important;
  }

  .salvar p {
    color: white;
  }

  .cancelar {
    padding: 10px;
  }

  .cancelar p {
    color: #52b6ff;
  }
`;

export const GetDia = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: flex-start;

  div {
    color: gray;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    padding: 7px;
    font-size: 15px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    
  }

  
`;

export const CaixaContainerDias = styled.div`
  display: flex;
  background-color: white;
  margin: 20px;
  padding: 15px;

  .getname {
    font-size: 20px;
    border-radius: 5px;
    padding: 10px;
    max-width: 80px;
    color: #666666;
  }
`;

export const ListaeLixeira = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;

  img {
    
    width: 13px;
    height: 15px;
  }
`;

export const ContainerDias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
