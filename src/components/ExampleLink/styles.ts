import styled from 'styled-components';
import { breakpoints } from '@identity/breakpoints';

const { TABLET } = breakpoints;

export const ExampleLinkContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 100px;

  ${TABLET} {
    grid-template-columns: 1fr 1fr;
  }

  h3 {
    margin-top: 0;
  }
`;

export const CTA = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
`;
