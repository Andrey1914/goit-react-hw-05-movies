import propTypes from 'prop-types';
import {
  ReviewsSection,
  ReviewsContainer,
  ReviewsList,
  Item,
  Author,
  ReviewContent,
} from './ReviewsStyled';

export default function Reviews({ reviews }) {
  return (
    <>
      <ReviewsSection>
        <ReviewsContainer>
          <ReviewsList>
            {reviews.map(({ author, review, id }) => (
              <Item key={id}>
                <Author>
                  {author}: <ReviewContent>"{review}"</ReviewContent>
                </Author>
              </Item>
            ))}
          </ReviewsList>
        </ReviewsContainer>
      </ReviewsSection>
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
