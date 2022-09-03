import { Box } from 'components/Box';
import propTypes from 'prop-types';
import plug from '../../default-pic/noPic.jpg';
import { CastsList, Item, Photo, ActorName } from './CastStyled';

export default function Cast({ cast }) {
  return (
    <>
      <Box as="section" py={4}>
        <CastsList>
          {cast.map(({ id, name, photo }) => (
            <Item key={id}>
              {photo ? (
                <Photo
                  src={`https://image.tmdb.org/t/p/w300/${photo}`}
                  alt={name}
                />
              ) : (
                <img src={plug} alt={name} width={300} height={450} />
              )}

              <ActorName>{name}</ActorName>
            </Item>
          ))}
        </CastsList>
      </Box>
    </>
  );
}

Cast.propTypes = {
  cast: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      photo: propTypes.string,
    })
  ).isRequired,
};
