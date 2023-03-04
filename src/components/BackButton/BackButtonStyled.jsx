import styled from 'styled-components';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

export const GoBackBtn = styled.button`
  width: 128px;
  height: 32px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.backgroundColor.dark};
  color: ${({ theme }) => theme.color.light};
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
  margin-right: 4px;
`;
