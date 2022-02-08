import { Container, PokemonContainer } from "./style";
import { Navbar } from "../Navbar";
import { Card } from "../Card";

export const App = () => {
  return (
    <Container>
      <Navbar />
      <PokemonContainer>
        <Card
          name="Pikachu"
          img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        />
      </PokemonContainer>
    </Container>
  );
};
