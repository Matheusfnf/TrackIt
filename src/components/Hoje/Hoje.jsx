import NavBar from "../NavBar/Navbar";
import {
  CaixaConcluido,
  Container,
  ContainerIcon,
  HojeStyled,
  QuadroContainer,
} from "./Hoje.styles";
import IconeConcluido from "../../images/Vector.png";
import FootBar from "../FootBar/FootBar";
import { useContext, useEffect, useState } from "react";
import api from "../../service/api";
import { CircularProgressbar } from "react-circular-progressbar";

export default function Hoje() {
  const [quadro, setQuadro] = useState();

  useEffect(() => {
    (async () => {
      const response = await api.get("/api/v2/trackit/habits/today");
      setQuadro(response.data);
    })();
  }, []);

  const getToday = () => {
    const dia = new Date();
    const map = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ];
    return {
      today: map[dia.getDay()],
      date: `${dia.getDate()} /\ ${dia.getMonth() + 1}`,
    };
  };

  return (
    <>
      <NavBar />
      <HojeStyled>
        <h1>
          {getToday().today}, {getToday().date}
        </h1>

        <p>Nenhum hábito concluído ainda</p>
      </HojeStyled>

      {quadro?.map((caixa) => {
        return (
          <QuadroContainer key={caixa.id}>
            <CaixaConcluido>
              <Container>
                <h1>{caixa.name}</h1>
                <p className="sequenciaAtual">
                  Sequência atual: {caixa.currentSequence}
                </p>
                <p className="recorde">Seu recorde: {caixa.highestSequence}</p>
              </Container>
              <div className="iconeConcluido">
                <img src={IconeConcluido} />
              </div>
            </CaixaConcluido>
            <FootBar />
          </QuadroContainer>
        );
      })}
    </>
  );
}
