import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export const Container = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-left: ${p => p.theme.space[4]}px;
    margin-right: ${p => p.theme.space[6]}px;
  } ;
`;

export const Image = styled.img`
  @media (max-width: 767px) {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${p => p.theme.space[4]}px;
  }
  @media (min-width: 768px) {
    width: ${p => p.theme.space[11]}px;
  }
`;
export const InfoThumb = styled.div`
  @media (max-width: 767px) {
    margin-left: ${p => p.theme.space[4]}px;
    margin-right: ${p => p.theme.space[4]}px;
  }
  @media (min-width: 768px) {
    padding-left: ${p => p.theme.space[5]}px;
  }
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes[3]}px;
  color: ${p => p.theme.colors.black};
`;
export const SubTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes[2]}px;
  color: ${p => p.theme.colors.black};
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const InfoText = styled.p`
  font-weight: ${p => p.theme.fontWeigths[0]};
  font-size: ${p => p.theme.fontSizes[1]}px;

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
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeigths[1]};
`;

export const Item = styled.li`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
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
  font-size: ${p => p.theme.fontSizes[2]}px;
  color: ${p => p.theme.colors.black};
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ArrowForward = styled(MdOutlineArrowForwardIos)`
  margin-left: ${p => p.theme.space[2]}px;
  height: ${p => p.theme.space[4]}px;
`;
