import styled from '@emotion/styled';

export const Item = styled.li`
  border: 1px solid #000000d1;
  padding: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const Author = styled.p`
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeigth[1]};
  color: ${p => p.theme.colors.black};
  margin-right: ${p => p.theme.space[3]}px;
`;
export const ReviewContent = styled.span`
  color: ${p => p.theme.colors.black};
  font-size: 12px;
`;

export const NoReviewText = styled.p`
  font-weight: ${p => p.theme.fontWeigth[1]};
  font-size: ${p => p.theme.fontSizes[3]}25px;
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.space[5]}px;
`;
