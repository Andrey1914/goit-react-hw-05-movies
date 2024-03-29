import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import GoBackButton from 'components/BackButton/BackButton';
import {
  Image,
  InfoCard,
  InfoCardHeader,
  Title,
  Vote,
  DateRelease,
  Date,
  Overview,
  OverviewText,
  Genres,
  GenresText,
  AditionalInformationContainer,
  AditionalText,
  CastReviewsList,
  Item,
  StyledLink,
  ArrowForward,
  BoxButton,
  VoteBox,
  OverviewBox,
} from './MovieInfoStyled';
import { Section } from 'components/SectionStyled';
import { Container, StyledContainer } from 'components/ContainerStyled';

export default function MovieInfo({ movieDetails }) {
  const { title, genres, poster, overview, releaseDate, vote } = movieDetails;
  const location = useLocation();
  const genresInfo = genres.map(genre => genre.name).join(',');
  return (
    <Section>
      <Container>
        <StyledContainer>
          <Image
            src={
              poster ? `https://image.tmdb.org/t/p/w500/${poster}` : 'No Image'
            }
            alt={title}
          />
          <InfoCard>
            <InfoCardHeader>
              <Title>{title}</Title>
              <VoteBox>
                <Vote>Vote: {vote}</Vote>
              </VoteBox>
            </InfoCardHeader>
            <DateRelease>
              Date release:<Date>{releaseDate}</Date>
            </DateRelease>
            <OverviewBox>
              <Overview>Overview:</Overview>
              <OverviewText>{overview}</OverviewText>
            </OverviewBox>
            <Genres>
              Genres:<GenresText>{genresInfo}</GenresText>
            </Genres>
            <BoxButton>
              <GoBackButton location={location} />
            </BoxButton>
          </InfoCard>
        </StyledContainer>
      </Container>

      <AditionalInformationContainer>
        <AditionalText>Aditional Information</AditionalText>
      </AditionalInformationContainer>

      <Container>
        <StyledContainer>
          <CastReviewsList>
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
          </CastReviewsList>
        </StyledContainer>
      </Container>
    </Section>
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
