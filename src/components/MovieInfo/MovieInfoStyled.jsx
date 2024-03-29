import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export const Image = styled.img`
  margin-bottom: 3rem;
  border-radius: ${({ theme }) => theme.radii.normal};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: calc(50% - 1rem);
  }
`;

export const InfoCard = styled.div`
  margin-bottom: 3rem;
`;

export const InfoCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
    padding-right: 1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.8rem;
  }
`;

export const VoteBox = styled.div`
  background: linear-gradient(45deg, #c0c0c0, #6a7777);
  border-radius: ${({ theme }) => theme.radii.normal};
  padding: 0.3rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.5rem;
  }
`;

export const Vote = styled.h3`
  font-size: 0.6rem;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.7rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1rem;
  }
`;

export const DateRelease = styled.p`
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
  }
`;

export const Date = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 0.6rem;
  margin-left: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
  }
`;

export const OverviewBox = styled.div`
  padding-right: 2rem;
`;

export const Overview = styled.p`
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
  }
`;

export const OverviewText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 0.6rem;
  margin-bottom: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
  }
`;

export const Genres = styled.p`
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
  }
`;

export const GenresText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 0.6rem;
  margin-left: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
  }
`;

export const BoxButton = styled.div``;

export const AditionalInformationContainer = styled.div`
  background: linear-gradient(45deg, #42425d, #232424);
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1.5rem 2.5rem;
    margin-bottom: 2rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1.5rem 8rem;
    margin-bottom: 3rem;
  }
`;

export const AditionalText = styled.p`
  color: ${({ theme }) => theme.color.light};
  text-align: center;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: ${({ theme }) => theme.fontWeights.thin};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.8rem;
  }
`;

export const CastReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 1.2rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 1.5rem;
  }
`;

export const Item = styled.li`
  align-items: center;
  transition: all 250ms;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  font-size: 0.6rem;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  transform: scale(1);
  transition: transform 250ms ease-in-out;

  :hover,
  :focus {
    color: ${({ theme }) => theme.color.orange};
    transform: scale(1.1);
    opacity: 0.8;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
  }
`;

export const ArrowForward = styled(MdOutlineArrowForwardIos)`
  margin-left: 8px;
  height: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: 0.5rem;
    height: 1rem;
  }
`;
