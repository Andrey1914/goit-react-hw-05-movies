import styled from 'styled-components';

export const Card = styled.li`
  border: 0.001rem solid #e1e1e1;
  border-radius: ${({ theme }) => theme.radii.normal};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0 10px 10px -5px rgba(20, 0, 132, 0.347);
    transform: scale(1.03);
    cursor: zoom-in;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 15.62rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 14.7rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 18rem;
  }
`;

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
`;

export const Image = styled.img`
  border-bottom-left-radius: ${({ theme }) => theme.radii.normal};
  border-bottom-right-radius: ${({ theme }) => theme.radii.normal};
  object-fit: cover;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.dark};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.7rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1rem;
  }
`;

export const Vote = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.color.darkGray};
  margin-left: 1rem;
  flex: none;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.6rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 0.8rem;
  }
`;
