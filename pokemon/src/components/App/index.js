import { Container, PokemonContainer } from "./style";
import { Navbar } from "../Navbar";
import { Card } from "../Card";
import { useState } from "react/cjs/react.production.min.js";
import axios from "axios";

export const App = () => {
  const [pokemon, setPokemon] =useState({});

  // cuida do submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value;

    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

    axios
      .get(url)
      .then((response) => {
        setPokemon(response.data);
      })
      .cath((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Navbar onSubmit={handleSubmit} />
      <PokemonContainer>
        <Card
          name=""
          img=""
        />
      </PokemonContainer>
    </Container>
  );
};
