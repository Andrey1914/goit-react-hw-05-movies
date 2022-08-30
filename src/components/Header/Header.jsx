import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  LogoWrapper,
  Logo,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from './HeaderStyled';

export default function Header() {
  return (
    <HeaderWrapper>
      <NavigationList>
        <NavigationItem>
          <Link to="/">
            <LogoWrapper>
              <Logo />
              Filmoteka
            </LogoWrapper>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationItem>
        <NavigationItem to="/movies">Movies</NavigationItem>
      </NavigationList>
    </HeaderWrapper>
  );
}
