import styled from 'styled-components';

export const Item = styled.li`
  border: 1px solid #000000d1;
  padding: 1rem;
  margin-bottom: 1rem;
`;
export const Author = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.color.dark};
  margin-right: 1rem;
`;
export const ReviewContent = styled.span`
  color: ${({ theme }) => theme.color.dark};
  font-size: 1rem;
`;

export const NoReviewText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 1rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
