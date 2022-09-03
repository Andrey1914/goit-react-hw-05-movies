import styled from '@emotion/styled';
import { BsGithub } from 'react-icons/bs';

export const Svg = styled(BsGithub)`
  margin-left: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.black};
  width: ${p => p.theme.space[5]}px;
  height: ${p => p.theme.space[5]}px;
  transform: scale(1);
  transition: all 250ms;
  :hover,
  :focus {
    opacity: 0.8;
    transform: scale(0.92);
  }
`;
