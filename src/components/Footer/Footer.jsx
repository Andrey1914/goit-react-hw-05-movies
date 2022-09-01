import { DeveloperData, FooterWrapper, Svg } from './FooterStyled';

export default function Footer() {
  return (
    <FooterWrapper>
      <DeveloperData>
        © 2022 | All Rights Reserved | Developed by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Andrey1914"
        >
          <Svg />
        </a>
      </DeveloperData>
    </FooterWrapper>
  );
}
