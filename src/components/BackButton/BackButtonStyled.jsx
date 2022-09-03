import styled from '@emotion/styled';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

export const GoBackBtn = styled.button`
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[6]}px;
  font-size: ${p => p.theme.fontSizes[0]}px;
  background-color: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  transform: scale(1);
  transition: all 250ms;
  :hover,
  :focus {
    transform: scale(0.92);
  }
`;
export const ArrowBack = styled(MdOutlineArrowBackIosNew)`
  margin-right: ${p => p.theme.space[2]}px;
`;
