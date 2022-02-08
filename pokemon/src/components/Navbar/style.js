import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0;
  h1 {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  }
  form {
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    // Todos os inputs do tipo texto
    input[type='text'] {
      height: 2rem;
      padding: 0 0.4rem;
      font-size: 1rem;
      border: 0.1px solid #888;
      border-radius: 0.4rem;
      // Quando clicar:
      &:focus {
        outline: none;
      }
    }
    button {
      font-size: 1.2rem;
      background: none;
      border: none;
      color: #0a2c55;
      margin: 0 0.6rem;
      &:hover {
        cursor: pointer;
        font-size: 1.4rem;
        transition: all 300ms ease-in-out;
      }
    }
  }
`;