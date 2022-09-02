import { Box } from 'components/Box';
import propTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Item, Image, Title, Vote } from './MoviesListItemStyled';

export default function MoviesListItem({ id, title, poster, vote }) {
  const location = useLocation();
  return (
    <Item>
      <Link
        to={`/movies/${id}`}
        state={{ from: location.pathname + location.search }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={15}
        >
          <Title>{title ? title : 'No title'}</Title>
          <Vote>Vote: {vote}</Vote>
        </Box>

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
