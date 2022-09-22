import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import GoBackButton from 'components/BackButton/BackButton';
import {
  Image,
  InfoThumb,
  Title,
  SubTitle,
  InfoText,
  AditionalText,
  Item,
  StyledLink,
  ArrowForward,
  Container,
  BoxButton,
} from './MovieInfoStyled';
import { Box } from 'components/Box';

export default function MovieInfo({ movieDetails }) {
  const { title, genres, poster, overview, releaseDate, vote } = movieDetails;
  const location = useLocation();
  const genresInfo = genres.map(genre => genre.name).join(',');
  return (
    <Box as="section" py={4}>
      <Container>
        <Image
          src={
            poster ? `https://image.tmdb.org/t/p/w500/${poster}` : 'No Image'
          }
          alt={title}
        />
        <InfoThumb>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={5}
          >
            <Title>{title}</Title>
            <SubTitle>Vote: {vote}</SubTitle>
          </Box>
          <SubTitle>Date release: {releaseDate}</SubTitle>
          <SubTitle>Overview:</SubTitle>
          <InfoText>{overview}</InfoText>
          <SubTitle>Genres:</SubTitle>
          <InfoText>{genresInfo}</InfoText>
          <BoxButton>
            <GoBackButton location={location} />
          </BoxButton>
        </InfoThumb>
      </Container>

      <Box mx={4}>
        <Box bg="black" p={4} mb={4}>
          <AditionalText>Aditional Information</AditionalText>
        </Box>

        <Box as="ul">
          <Item>
            <StyledLink to="cast" state={location.state}>
              Cast
              <ArrowForward />
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="reviews" state={location.state}>
              Reviews
              <ArrowForward />
            </StyledLink>
          </Item>
        </Box>
      </Box>
    </Box>
  );
}

MovieInfo.propTypes = {
  movieDetails: propTypes.shape({
    title: propTypes.string,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
      })
    ),
    poster: propTypes.string,
    overview: propTypes.string,
    releaseDate: propTypes.string,
    vote: propTypes.number,
  }),
};
