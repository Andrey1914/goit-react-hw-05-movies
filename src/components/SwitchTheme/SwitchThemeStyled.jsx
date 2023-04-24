import styled from 'styled-components';
import { WiMoonAltWaningCrescent4 } from 'react-icons/wi';

export const SwitchThemeBox = styled.div`
  position: relative;
  top: 4.3rem;
  left: -12rem;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 4.6rem;
    left: -16rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: -14rem;
  }
`;

export const SwitchThemeIcon = styled(WiMoonAltWaningCrescent4)`
  width: 24px;
  height: 24px;
`;
