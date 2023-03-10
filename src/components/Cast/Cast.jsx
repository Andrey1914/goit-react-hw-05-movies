import propTypes from 'prop-types';
import placeholder from '../../default-pic/dog-placeholder.webp';
import {
  Line,
  CastSection,
  CastContainer,
  CastsList,
  Item,
  ActorContainer,
  Photo,
  ActorName,
  ActorNameContainer,
} from './CastStyled';

export default function Cast({ cast }) {
  return (
    <>
      <Line />
      <CastSection>
        <CastContainer>
          <CastsList>
            {cast.map(({ id, name, photo }) => (
              <Item key={id}>
                <ActorContainer>
                  {photo ? (
                    <Photo
                      src={`https://image.tmdb.org/t/p/w300/${photo}`}
                      alt={name}
                    />
                  ) : (
                    <img
                      src={placeholder}
                      alt={name}
                      width="100%"
                      height="100%"
                    />
                  )}
                  <ActorNameContainer>
                    <ActorName>{name}</ActorName>
                  </ActorNameContainer>
                </ActorContainer>
              </Item>
            ))}
          </CastsList>
        </CastContainer>
      </CastSection>
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
