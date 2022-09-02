import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { GiFilmSpool } from 'react-icons/gi';

export const Logo = styled(GiFilmSpool)`
  width: ${p => p.theme.space[5]}px;
  height: ${p => p.theme.space[5]}px;
  transition: opacity 250ms;
  margin-right: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.white};
`;

export const NavigationItem = styled.li`
  transform: scale(1);
  transition: transform 250ms ease-in-out;
  :hover,
  :focus {
    transform: scale(0.92);
  }
`;
export const NavigationLink = styled(NavLink)`
  font-size: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  transition: opacity 250ms ease-in-out;
  :hover,
  :focus {
    color: ${p => p.theme.colors.lightMuted};
    opacity: 0.8;
  }
`;
