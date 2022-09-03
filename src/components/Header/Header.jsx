import { Link } from 'react-router-dom';
import { Logo, NavigationItem, NavigationLink } from './HeaderStyled';
import { Box } from 'components/Box';

export default function Header() {
  return (
    <Box as="header" display="flex" width="100%" height="60px" bg="black">
      <Box as="ul" display="flex" alignItems="center" gridGap={6}>
        <NavigationItem>
          <Link to="/">
            <Box
              display="flex"
              alignItems="center"
              ml={5}
              mr={6}
              color="white"
              fontSize={1}
            >
              <Logo />
              Filmoteka
            </Box>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </NavigationItem>
      </Box>
    </Box>
  );
}
