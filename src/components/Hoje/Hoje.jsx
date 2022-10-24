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
import { UserContext } from "../../context/UserContext";

export default function Hoje() {
  const [quadro, setQuadro] = useState([]);
  const context = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const response = await api.get("/api/v2/trackit/habits/today");
      setQuadro(response.data);
    })();
  }, []);

  useEffect(() => {
    context.setState(quadro);
  }, [quadro]);

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

  const check = async (id) => {
    try {
      const response = await api.post(`/api/v2/trackit/habits/${id}/check`);
      if ((response.status = 204)) return true;
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const uncheck = async (id) => {
    try {
      const response = await api.post(`/api/v2/trackit/habits/${id}/uncheck`);
      if ((response.status = 204)) return true;
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
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
              <div
                style={{ background: caixa.done ? "#8FC549" : "#EBEBEB" }}
                className="iconeConcluido"
                onClick={() => {
                  if (!caixa.done) {
                    const post = check(caixa.id);
                    if (post) {
                      const sprd = [...quadro];
                      const index = sprd.indexOf(caixa);
                      sprd[index].done = !sprd[index].done;
                      setQuadro(sprd);
                      return;
                    }
                    return alert("erro");
                  } else {
                    const post = uncheck(caixa.id);
                    if (post) {
                      const sprd = [...quadro];
                      const index = sprd.indexOf(caixa);
                      sprd[index].done = !sprd[index].done;
                      setQuadro(sprd);
                      return;
                    }
                    return alert("erro");
                  }
                }}
              >
                <img src={IconeConcluido} />
              </div>
            </CaixaConcluido>
          </QuadroContainer>
        );
      })}
      <FootBar />
    </>
  );
}
