import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  max-width: calc(100vw - 48px);
  margin-left: auto;
  margin-right: auto;
  padding: 50px 80px 50px;
`;
