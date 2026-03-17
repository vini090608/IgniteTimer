import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem; /* Removido espaço */

    a {
      width: 3rem;
      height: 3rem; /* Removido espaço */

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme["gray-100"]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: border-bottom 0.2s;

      /* Corrigido o seletor de atributo */
      &[data-current="true"] {
        color: ${(props) => props.theme["green-500"]};
        border-bottom: 3px solid ${(props) => props.theme["green-500"]};
      }

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme["green-500"]};
      }
    }
  }
`;
