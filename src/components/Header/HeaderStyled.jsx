import styled from 'styled-components';
import { Link as NavLink } from 'react-router-dom';
import { GiFilmSpool } from 'react-icons/gi';

export const HeaderElement = styled.header`
  width: 100%;
  padding: 1.5rem 0;
  background-color: ${({ theme }) => theme.backgroundColor.dark};
`;

export const HeaderContainer = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 3.5rem;
  }
`;

export const Logo = styled(GiFilmSpool)`
  width: 2.5rem;
  height: 2.5rem;
  transition: opacity 250ms;
  margin-right: 1rem;
  color: ${({ theme }) => theme.color.light};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.light};
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: 3rem;
`;

export const NavigationItem = styled.li`
  transform: scale(1);
  transition: transform 250ms ease-in-out;
  :hover,
  :focus {
    transform: scale(0.92);
    color: ${({ theme }) => theme.color.link};
  }
`;
export const NavigationLink = styled(NavLink)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.light};
  transition: opacity 250ms ease-in-out;
  :hover,
  :focus {
    color: ${({ theme }) => theme.color.link};
    opacity: 0.8;
  }
`;
