import styled from 'styled-components';

export const NavContainer = styled.ul`
  display: flex;
  width: min-content;
  margin: 20px auto 0;
  list-style: none;
  column-gap: 20px;
  padding-inline-start: 0;

  a {
    text-decoration: none;
    color: var(--color-black);
    text-transform: uppercase;
  }
`;
