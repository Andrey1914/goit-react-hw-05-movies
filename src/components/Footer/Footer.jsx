import { StyledFooter, FooterContainer, Svg } from './FooterStyled';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterContainer>
        &copy; {year} | Developed by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Andrey1914"
        >
          <Svg />
        </a>
      </FooterContainer>
    </StyledFooter>
  );
}
