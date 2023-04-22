import styled from 'styled-components';
import { WiMoonAltWaningCrescent4 } from 'react-icons/wi';

export const SwitchThemeBox = styled.div`
  position: relative;
  top: 70px;
  left: -70px;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 73px;
    left: -260px;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: -225px;
  }
`;

export const SwitchThemeIcon = styled(WiMoonAltWaningCrescent4)`
  width: 24px;
  height: 24px;
`;
