import React, { useState, useEffect } from "react";
import * as S from "../Components/Styles.js";
import axios from "axios";

export default function Api() {
  const [info, setInfo] = useState([]);
  const API = "http://hp-api.herokuapp.com/api/characters";

  useEffect(() => {
    axios
      .get(API)
      .then((resposta) => {
        setInfo(resposta.data);
        console.log(data);
      })
      .catch((error) => {
        console.log("desculpe aconteceu um problema na requisição", error);
      });
  }, []);

  return (
    <S.Scroll>
      {info.map((item) => (
        <section>
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
        </section>
      ))}
    </S.Scroll>
  );
}
