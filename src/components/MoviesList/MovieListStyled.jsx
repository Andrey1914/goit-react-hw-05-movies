import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
  max-width: ${p => p.theme.space[9]}px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    max-width: 592px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
