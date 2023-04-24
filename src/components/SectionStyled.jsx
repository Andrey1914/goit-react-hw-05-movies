import styled from 'styled-components';

export const HeaderSection = styled.header`
  padding: 1.5rem 0;
  background: linear-gradient(45deg, #595974, #232424);
`;

export const FooterSection = styled.footer`
  padding: 1rem 0;
  background: linear-gradient(45deg, #595974, #232424);
`;

export const Section = styled.section`
  min-height: 100vh;
  background-color: var(--bg);
  padding: 2.5rem 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 0;
  }
`;
