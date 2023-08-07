import { FooterContainer, Svg } from './FooterStyled';
import { FooterSection } from 'components/SectionStyled';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <FooterSection>
      <FooterContainer>
        &copy; {year} | Developed by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/andrei-kurka/"
        >
          <Svg />
        </a>
      </FooterContainer>
    </FooterSection>
  );
}
