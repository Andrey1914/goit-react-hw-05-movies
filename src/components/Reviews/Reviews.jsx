import { Box } from 'components/Box';
import propTypes from 'prop-types';
import { Item, Author, ReviewContent } from './ReviewsStyled';

export default function Reviews({ reviews }) {
  return (
    <>
      <Box as="ul" px={7} py={5}>
        {reviews.map(({ author, review, id }) => (
          <Item key={id}>
            <Author>
              {author}: <ReviewContent>"{review}"</ReviewContent>
            </Author>
          </Item>
        ))}
      </Box>
    </>
  );
}

Reviews.propTypes = {
  reviews: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      author: propTypes.string,
      review: propTypes.string,
    })
  ).isRequired,
};
