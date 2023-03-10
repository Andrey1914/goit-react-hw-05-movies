import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';

export const StyledFooter = styled.footer`
  padding: 1rem 0;
  background: linear-gradient(45deg, #42425d, #232424);
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: ${({ theme }) => theme.color.light};
  font-size: 0.7rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.2rem;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  }
`;

export const Svg = styled(BsGithub)`
  margin-left: 1rem;
  color: ${({ theme }) => theme.color.light};
  width: 1rem;
  height: 1rem;
  transform: scale(1);
  transition: all 250ms;
  :hover,
  :focus {
    opacity: 0.8;
    transform: scale(0.92);
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
