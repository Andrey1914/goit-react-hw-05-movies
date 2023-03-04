import styled from 'styled-components';

export const CastsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 616px;
  }
  @media (min-width: 950px) {
    width: 932px;
  }
  @media (min-width: 1278px) {
    width: 1248px;
  }
`;

export const Item = styled.li`
  width: auto;
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  @media (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Photo = styled.img``;

export const ActorName = styled.h3`
  padding: 1rem;
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
