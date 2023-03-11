import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  max-width: 18rem;
  margin: 0 auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 31rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 46rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 64rem;
  }
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2rem;
  }
`;

export const Item = styled.li`
  border: 1px solid #282828d1;
  padding: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: calc(50% - 2rem);
  }
`;

export const Author = styled.p`
  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.color.dark};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1rem;
  }
`;

export const ReviewContent = styled.span`
  color: ${({ theme }) => theme.color.dark};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 0.6rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1rem;
  }
`;

export const NoReviewText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 1rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
