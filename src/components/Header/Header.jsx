import {
  HeaderElement,
  HeaderContainer,
  Logo,
  LogoContainer,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from './HeaderStyled';

export default function Header() {
  return (
    <HeaderElement>
      <HeaderContainer>
        <NavigationList>
          <NavigationItem>
            <NavigationLink to="/">
              <LogoContainer>
                <Logo />
                Filmoteka
              </LogoContainer>
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/">Home</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/movies">Movies</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </HeaderContainer>
    </HeaderElement>
  );
}
