import FootBar from "../FootBar/FootBar";
import { HistoricoStyled } from "./Historico.styles";

export default function Historico(){
    return (
      <>
        <HistoricoStyled>
          <h1>Historico</h1>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </HistoricoStyled>
        <FootBar />
      </>
    );
}