import styled from '@emotion/styled';

export const CastsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Item = styled.li`
  width: auto;
  border-radius: ${p => p.theme.radii.small};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover,
  :focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const Photo = styled.img``;

export const ActorName = styled.h3`
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeigths[1]};
  color: ${p => p.theme.colors.black};
`;

export const NoInformationText = styled.p`
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeigths[1]};
`;
