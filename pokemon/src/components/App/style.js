import styled from 'styled-components';
import image from '../../assets/background.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 80px);
`;