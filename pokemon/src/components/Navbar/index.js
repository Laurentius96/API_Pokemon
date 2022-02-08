import { Container } from "./style";
import { FaSearch } from "react-icons/fa";

export const Navbar = () => {
  return (
    <Container>
      <h1>Encontre Pokemons</h1>
      <form>
        <input type="text" placeholder="Digite o nome..." required></input>
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </Container>
  );
};
