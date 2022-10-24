import styled from "styled-components";

export const HojeStyled = styled.div`
  h1 {
    margin-top: 10%;
    margin-left: 5%;
    font-size: 23px;
    color: #126ba5;
    margin-bottom: 5px;
  }
  p {
    color: #bababa;
    font-size: 18px;
    margin-left: 5%;
  }
`;

export const CaixaConcluido = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5%;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 5px;

  h1 {
    font-size: 20px;
    color: #666666;
  }

  p {
    font-size: 13px;
  }

  .iconeConcluido {
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: 1px solid #e7e7e7;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .iconeConcluido img {
  }

  .recorde {
    margin-top: 3px;
  }

  .sequenciaAtual {
    margin-top: 12px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const QuadroContainer = styled.div`



`;