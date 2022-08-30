import propTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Item, Info, Image, Title, Vote } from './MoviesListItemStyled';

export default function MoviesListItem({ id, title, poster, vote }) {
  const location = useLocation();
  return (
    <Item>
      <Link
        to={`/movies/${id}`}
        state={{ from: location.pathname + location.search }}
      >
        <Info>
          <Title>{title ? title : 'No title'}</Title>
          <Vote>Vote: {vote}</Vote>
        </Info>

        <Image
          src={
            poster ? `https://image.tmdb.org/t/p/w500/${poster}` : 'No Poster'
          }
          alt={title}
        />
      </Link>
    </Item>
  );
}

MoviesListItem.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  vote: propTypes.number.isRequired,
};
