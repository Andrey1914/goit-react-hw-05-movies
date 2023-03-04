import styled from 'styled-components';

export const Item = styled.li`
  max-width: 288px;
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
  @media (max-width: 360px) {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Image = styled.img``;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.color.dark};
`;
export const Vote = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.color.dark};
`;
