import React, { useState } from 'react';
import {
  NavigationContainer,
  Logo,
  LogoText,
  LogoContainer,
  NavigationList,
  NavigationItem,
  NavigationLink,
  Menu,
  Line,
  LogoSpan,
} from './HeaderStyled';
import { HeaderSection } from 'components/SectionStyled';
import { HeaderContainer } from 'components/ContainerStyled';
import MobileMenu from './MobileMenu';
import MovieIconLogo from '../../images/logo-movie.png';
import SwitchTheme from 'components/SwitchTheme/SwitchTheme';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeaderSection>
      <HeaderContainer>
        <NavigationContainer>
          <NavigationLink to="/">
            <LogoContainer>
              <Logo src={MovieIconLogo} alt="logo" />
              <LogoSpan>Film</LogoSpan>
              <LogoText>gazer</LogoText>
            </LogoContainer>
          </NavigationLink>
          <SwitchTheme />
          <NavigationList>
            <NavigationItem>
              <NavigationLink to="/">Home</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/movies">Movies</NavigationLink>
            </NavigationItem>
          </NavigationList>
        </NavigationContainer>
        <Menu onClick={toggle}>
          <Line width="1.5rem" />
          <Line />
          <Line width="1.5rem" ml="0.5rem" />
        </Menu>
        <MobileMenu isOpen={isOpen} toggle={toggle}></MobileMenu>
      </HeaderContainer>
    </HeaderSection>
  );
}
