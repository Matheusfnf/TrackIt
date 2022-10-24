import { useContext, useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import api from "../../service/api";
import { Footstyled } from "./FootBar.styles";

export default function FootBar() {
  const context = useContext(UserContext);
  const pct = context.state;
  const [porcentagem, setPorcentagem] = useState("");

  useEffect(() => {
    (async () => {
      const response = await api.get("/api/v2/trackit/habits/today");
      let total = 0;
      let feitas = 0;
      for (let i of response.data) {
        if (i.done) feitas++;
        total++;
      }
      const pct = (feitas / total) * 100;
      
      setPorcentagem(pct.toFixed());
    })();
  }, [pct]);

  
  

  return (
    <>
      <Footstyled>
        <Link to="/habitos">
          <p>Hábitos</p>{" "}
        </Link>
        <Link to="/hoje">
          <div style={{ width: 91, height: 91, marginBottom: "50px" }}>
            <CircularProgressbar
              value={porcentagem}
              text={(String(porcentagem) + "%")}
            />
          </div>
        </Link>
        <Link to="/historico">
          <p>Histórico</p>
        </Link>
      </Footstyled>
    </>
  );
}
