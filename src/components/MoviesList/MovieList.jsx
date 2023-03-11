import propTypes from 'prop-types';
import { List } from './MovieListStyled';
import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import { Section } from 'components/SectionStyled';
import { Container } from 'components/ContainerStyled';

export default function MoviesList({ movies }) {
  return (
    <Section>
      <Container>
        <List>
          {movies.map(({ id, original_title, poster_path, vote_average }) => {
            return (
              <MoviesListItem
                key={id}
                id={id}
                title={original_title}
                poster={poster_path}
                vote={vote_average}
              />
            );
          })}
        </List>
      </Container>
    </Section>
  );
}

MoviesList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      original_title: propTypes.string.isRequired,
      poster_path: propTypes.string.isRequired,
      vote_average: propTypes.number.isRequired,
    })
  ),
};
