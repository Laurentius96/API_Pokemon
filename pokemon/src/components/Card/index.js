import { Info, Container } from "./style";

export const Card = (props) => {
  return (
    <Container>
      <Info>
        <h2>{props.name}</h2>
      </Info>
      <img src={props.img} alt={props.name} />
    </Container>
  );
};
