import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export const MovieInfoSection = styled.section`
  padding: 1rem 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.3rem 0;
  }
`;

export const Container = styled.div`
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

export const Image = styled.img`
  margin-bottom: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 2rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 1rem;
    width: calc(50% - 1rem);
  }
`;

export const InfoCard = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    margin-bottom: 1rem;
  }
`;

export const InfoCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.dark};
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.color.dark};
  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }
`;

export const DateRelease = styled.p`
  color: ${({ theme }) => theme.color.dark};
  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const Date = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 0.6rem;
  margin-bottom: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const Overview = styled.p`
  color: ${({ theme }) => theme.color.dark};
  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const OverviewText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 0.6rem;
  margin-bottom: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const Genres = styled.p`
  color: ${({ theme }) => theme.color.dark};
  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const GenresText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 0.6rem;
  margin-bottom: 1.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

export const BoxButton = styled.div``;

export const AditionalInformationContainer = styled.div`
  background: linear-gradient(45deg, #42425d, #232424);
  padding: 1rem 2rem;
  margin-bottom: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.5rem 2.5rem;
    margin-bottom: 1rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1.5rem 8rem;
  }
`;

export const AditionalText = styled.p`
  color: ${({ theme }) => theme.color.light};
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.3rem;
  }
`;

export const ContainerCastReviews = styled.div`
  margin: 0 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 1.8rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 8rem;
  }
`;

export const CastReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.6rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 1rem;
  }
`;

export const Item = styled.li`
  align-items: center;
  transition: all 250ms;
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.dark};
  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }

  :hover,
  :focus {
    opacity: 0.8;
  }
`;

export const ArrowForward = styled(MdOutlineArrowForwardIos)`
  margin-left: 8px;
  height: 0.5rem;
`;
