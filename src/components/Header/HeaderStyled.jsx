import styled from 'styled-components';
import { Link as NavLink } from 'react-router-dom';
import { GiFilmSpool } from 'react-icons/gi';

export const HeaderElement = styled.header`
  width: 100%;
  padding: 1.5rem 0;
  background: linear-gradient(45deg, #42425d, #232424);
`;

export const HeaderContainer = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    position: relative;
    margin: 0 1.5rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 2rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 3.5rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 3.5rem;
  }
`;

export const Logo = styled(GiFilmSpool)`
  transition: opacity 250ms;
  margin-right: 1rem;
  color: ${({ theme }) => theme.color.light};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 2rem;
    height: 2rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.light};
`;

export const LogoText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: none;
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: auto;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
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

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  }
`;

export const Menu = styled.div`
  cursor: pointer;
  display: none;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const Line = styled.div`
  height: 0.1125rem;
  width: ${props => props.width || '2rem'};
  background: ${({ theme }) => theme.color.light};
  margin: 0.28125rem 0;
  transition: 0.3s ease;
  margin-left: ${props => props.ml || '0'};
`;
