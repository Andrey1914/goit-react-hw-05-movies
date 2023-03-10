import styled from 'styled-components';

export const MovieSection = styled.section`
  margin: 3rem 0;
`;

export const MovieContainer = styled.div`
  display: flex;
  margin: 0 auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 300px;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 516px;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 738px;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1200px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
