import React from 'react';
import {
  CloseIcon,
  Icon,
  // Image,
  MobileMenuContainer,
  MobileMenuList,
  MobileMenuLink,
  CloseText,
} from './MobileMenuStyled';
import { IconContext } from 'react-icons';

// import background from '../../images/mobile-bg-image.jpg';

export default function MobileMenu({ isOpen, toggle }) {
  return (
    <IconContext.Provider value={{ size: '1rem' }}>
      {/* <Image style={{ backgroundImage: `url(${background})` }}> */}
      <MobileMenuContainer isOpen={isOpen} toggle={toggle}>
        <Icon onClick={toggle}>
          <CloseText>Close</CloseText>
          <CloseIcon />
        </Icon>
        <MobileMenuList>
          <MobileMenuLink to="/" onClick={toggle}>
            Home
          </MobileMenuLink>
          <MobileMenuLink to="/movies" onClick={toggle}>
            Movies
          </MobileMenuLink>
        </MobileMenuList>
      </MobileMenuContainer>
      {/* </Image> */}
    </IconContext.Provider>
  );
}
