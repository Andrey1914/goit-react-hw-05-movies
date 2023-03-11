import propTypes from 'prop-types';
import {
  ReviewsContainer,
  ReviewsList,
  Item,
  Author,
  ReviewContent,
} from './ReviewsStyled';
import { Section } from 'components/SectionStyled';

export default function Reviews({ reviews }) {
  return (
    <>
      <Section>
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
      </Section>
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
