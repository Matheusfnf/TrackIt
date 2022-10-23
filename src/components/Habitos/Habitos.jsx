import { useEffect, useState } from "react";
import api from "../../service/api";
import FootBar from "../FootBar/FootBar";
import BeatLoader from "../Loader";
import NavBar from "../NavBar/Navbar";
import lixeira from "../../images/lixeira.png";
import {
  CaixaContainer,
  CaixaContainerDias,
  Container,
  ContainerButtons,
  ContainerDias,
  DayOfTheWeek,
  GetDia,
  HabitosStyled,
  ListaeLixeira,
  SalvarECancelar,
} from "./Habitos.styles";
import axios from "axios";
import { parseCookies } from "nookies";

export default function Habitos() {
  const { "userauth.token": token } = parseCookies();
  const [loading, setLoading] = useState(false);
  const [verdadeiro, setVerdadeiro] = useState(true);
  const [lista, setLista] = useState([]);
  const [dias, setDias] = useState([
    {
      nomehabito: "",
      salvo: false,
      dias: [
        {
          dia: "D",
          numeral: 0,
          ativo: false,
        },
        {
          dia: "S",
          numeral: 1,
          ativo: false,
        },
        {
          dia: "T",
          numeral: 2,
          ativo: false,
        },
        {
          dia: "Q",
          numeral: 3,
          ativo: false,
        },
        {
          dia: "Q",
          numeral: 4,
          ativo: false,
        },
        {
          dia: "S",
          numeral: 5,
          ativo: false,
        },
        {
          dia: "S",
          numeral: 6,
          ativo: false,
        },
      ],
    },
  ]);
  // const [diasSelecionados, setDiasSelecionados] = useState([
  //   {
  //     dia: "D",
  //     numeral: 0,
  //     ativo: false,
  //   },
  //   {
  //     dia: "S",
  //     numeral: 1,
  //     ativo: false,
  //   },
  //   {
  //     dia: "T",
  //     numeral: 2,
  //     ativo: false,
  //   },
  //   {
  //     dia: "Q",
  //     numeral: 3,
  //     ativo: false,
  //   },
  //   {
  //     dia: "Q",
  //     numeral: 4,
  //     ativo: false,
  //   },
  //   {
  //     dia: "S",
  //     numeral: 5,
  //     ativo: false,
  //   },
  //   {
  //     dia: "S",
  //     numeral: 6,
  //     ativo: false,
  //   },
  // ]);

  const handlePost = async (obj) => {
    try {
      let arr = [];
      obj.dias.map((dia) => {
        if (dia.ativo) {
          arr.push(dia.numeral);
        }
      });

      const response = await api.post("/api/v2/trackit/habits", {
        name: obj.nomehabito,
        days: arr,
      });

      if (response.status === 200) {
        const data = await api.get("/api/v2/trackit/habits");
        setLista(data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getDia = (arrayDeDias) => {
    const days = [
      {
        dia: "D",
        numeral: 0,
        ativo: false,
      },
      {
        dia: "S",
        numeral: 1,
        ativo: false,
      },
      {
        dia: "T",
        numeral: 2,
        ativo: false,
      },
      {
        dia: "Q",
        numeral: 3,
        ativo: false,
      },
      {
        dia: "Q",
        numeral: 4,
        ativo: false,
      },
      {
        dia: "S",
        numeral: 5,
        ativo: false,
      },
      {
        dia: "S",
        numeral: 6,
        ativo: false,
      },
    ];
    arrayDeDias.map((dia) => (days[dia].ativo = true));
    return days;
  };

  useEffect(() => {
    (async () => {
      const response = await api.get("/api/v2/trackit/habits");
      setLista(response.data);
    })();
  }, []);

  async function deleteLista(id) {
    try {
      const response = await api.delete(`/api/v2/trackit/habits/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  const fetchData = async () => {
    setLoading(true);
    await fetch.then(() => {});
    setLoading(false);
  };

  const closebox = () => {
    setVerdadeiro(false);
  };

  return (
    <>
      <NavBar />
      <HabitosStyled>
        <Container>
          <h1>Meus Hábitos</h1>

          <div
            onClick={() => {
              const spreadeadDias = [...dias];
              spreadeadDias.push({
                salvo: false,
                dias: [
                  {
                    dia: "D",
                    numeral: 0,
                    ativo: false,
                  },
                  {
                    dia: "S",
                    numeral: 1,
                    ativo: false,
                  },
                  {
                    dia: "T",
                    numeral: 2,
                    ativo: false,
                  },
                  {
                    dia: "Q",
                    numeral: 3,
                    ativo: false,
                  },
                  {
                    dia: "Q",
                    numeral: 4,
                    ativo: false,
                  },
                  {
                    dia: "S",
                    numeral: 5,
                    ativo: false,
                  },
                  {
                    dia: "S",
                    numeral: 6,
                    ativo: false,
                  },
                ],
              });
              setDias(spreadeadDias);
            }}
            className="adicionar"
          >
            +
          </div>
        </Container>
        {dias.map((dia, index) => {
          return (
            <div className="caixa" key={index}>
              <CaixaContainer>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    id="nomeDoHabito"
                    type="text"
                    placeholder="nome do hábito"
                    onChange={(e) => {
                      const valor = e.target.value;
                      const allDays = [...dias];
                      allDays[index].nomehabito = valor;
                      setDias(allDays);
                    }}
                  />
                  <ContainerButtons>
                    {dia.dias.map((e) => {
                      return (
                        <DayOfTheWeek
                          ativo={e.ativo}
                          key={e.numeral}
                          onClick={(event) => {
                            event.preventDefault();
                            const semana = [...dia.dias];
                            const indice = semana.indexOf(e);
                            e.ativo = !e.ativo;
                            semana[indice] = e;
                            const diasSprd = [...dias];
                            const indice2 = diasSprd.indexOf(diasSprd[index]);
                            diasSprd[indice2].dias = semana;
                            setDias(diasSprd);
                          }}
                        >
                          {e.dia}
                        </DayOfTheWeek>
                      );
                    })}
                  </ContainerButtons>
                  {!dia.salvo ? (
                    <SalvarECancelar key={dia.id}>
                      <div className="cancelar">
                        <p
                          onClick={() => {
                            const newContainers = [...dias];
                            newContainers.splice(index, 1);
                            setDias(newContainers);
                          }}
                        >
                          Cancelar
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="salvar"
                        onClick={() => {
                          const allContainers = [...dias];
                          allContainers[index].salvo = true;
                          setDias(allContainers);
                          handlePost(allContainers[index]);
                        }}
                      >
                        <p>Salvar</p>
                      </button>
                    </SalvarECancelar>
                  ) : null}
                </form>
              </CaixaContainer>
            </div>
          );
        })}
        {lista?.map((caixa) => {
          return (
            <CaixaContainerDias key={caixa.id}>
              <div>
                <ListaeLixeira>
                  <p className="getname">{caixa.name}</p>
                  <img src={lixeira} onClick={() => deleteLista(caixa.id)} />
                </ListaeLixeira>
                <ContainerDias>
                  <GetDia>
                    {getDia(caixa.days).map((dia, index) => {
                      // console.log(dia);
                      // console.log(caixa.days);
                      return (
                        <div
                          key={index}
                          style={{
                            background: dia.ativo ? "#CFCFCF" : "#ffffff",
                          }}
                        >
                          {dia.dia}
                        </div>
                      );
                    })}
                  </GetDia>
                </ContainerDias>
              </div>
            </CaixaContainerDias>
          );
        })}
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </HabitosStyled>
      <FootBar />
    </>
  );
}
