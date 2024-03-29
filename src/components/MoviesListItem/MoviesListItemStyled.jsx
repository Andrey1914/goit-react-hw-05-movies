import styled from 'styled-components';

export const Card = styled.li`
  max-width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: ${({ theme }) => theme.radii.small};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    transform: scale(0.98);
    cursor: zoom-in;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: calc(100% / 2 - 0.5rem);
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: calc(100% / 3 - 0.69rem);
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
  padding: 1rem;
  background-color: var(--bg-item);
  border-top-left-radius: ${({ theme }) => theme.radii.small};
  border-top-right-radius: ${({ theme }) => theme.radii.small};
`;

export const Image = styled.img`
  border-bottom-left-radius: ${({ theme }) => theme.radii.small};
  border-bottom-right-radius: ${({ theme }) => theme.radii.small};
  object-fit: cover;
`;

export const Title = styled.h2`
  color: var(--text);
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  font-size: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.2rem;
  }
`;

export const Vote = styled.p`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: var(--text);
  margin-left: 1rem;
  flex: none;
  font-size: 0.6rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 0.8rem;
  }
`;
