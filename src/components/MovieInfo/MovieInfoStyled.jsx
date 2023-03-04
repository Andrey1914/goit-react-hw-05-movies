import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export const Container = styled.div`
  margin-bottom: 16px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-left: 16px;
    margin-right: 32px;
  } ;
`;

export const Image = styled.img`
  @media (max-width: 767px) {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
  }
  @media (min-width: 768px) {
    width: 320px;
  }
`;
export const InfoThumb = styled.div`
  @media (max-width: 767px) {
    margin-left: 16px;
    margin-right: 16px;
  }
  @media (min-width: 768px) {
    padding-left: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.dark};
`;
export const SubTitle = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.dark};
  margin-bottom: 16px;
`;
export const InfoText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const BoxButton = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  } ;
`;

export const AditionalText = styled.p`
  color: ${({ theme }) => theme.color.light};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const Item = styled.li`
  display: block;
  margin-bottom: 16px;
  align-items: center;
  transition: all 250ms;

  :last-child {
    margin-bottom: 0;
  }
  :hover,
  :focus {
    opacity: 0.8;
  }
`;
export const StyledLink = styled(NavLink)`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.dark};
  display: block;
  margin-bottom: 16px;
`;

export const ArrowForward = styled(MdOutlineArrowForwardIos)`
  margin-left: 8px;
  height: 16px;
`;
