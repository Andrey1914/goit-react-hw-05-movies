import { Box } from 'components/Box';
import { Svg } from './FooterStyled';

export default function Footer() {
  return (
    <Box
      as="footer"
      display="flex"
      alignItems="center"
      py={3}
      bg="lightMuted"
      fontSize="xs"
    >
      <Box display="flex" alignItems="center" mx="auto">
        © 2022 | All Rights Reserved | Developed by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Andrey1914"
        >
          <Svg />
        </a>
      </Box>
    </Box>
  );
}
