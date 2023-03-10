import styled from 'styled-components';

export const Line = styled.div`
  width: 100%;
  height: 0.2rem;
  background: linear-gradient(45deg, #57576f, #373838);
`;

export const CastSection = styled.section`
  padding: 2rem 0;
`;

export const CastContainer = styled.div`
  margin: 0 auto;
  max-width: 18rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 31rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 46rem;
    display: flex;
    gap: 1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 64rem;
    gap: 2rem;
  }
`;

export const CastsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  width: 12rem;
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ActorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: ${({ theme }) => theme.radii.small};
  border-top-right-radius: ${({ theme }) => theme.radii.small};
`;

export const ActorNameContainer = styled.div`
  flex-grow: 1;
  padding: 1rem;
`;

export const ActorName = styled.h3`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.color.dark};
`;

export const NoInformationText = styled.p`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;
