import styled from 'styled-components';

export const Line = styled.div`
  width: 100%;
  height: 0.2rem;
  background: linear-gradient(45deg, #57576f, #373838);
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const Item = styled.li`
  border: 1px solid var(--text);
  padding: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: calc(100% / 2 - 0.5rem);
  }
`;

export const Author = styled.p`
  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
  }
`;

export const ReviewContent = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 0.6rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.3rem;
  }
`;

export const NoReviewText = styled.p`
  border-top: 0.2rem solid #57576f;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 1.5rem;
  text-align: center;
  padding: 2rem;
`;
