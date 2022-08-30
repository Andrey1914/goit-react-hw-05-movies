import { LoaderWrapper } from './LoaderStyled';
import { BallTriangle } from 'react-loader-spinner';

export default function LoaderBallTriangle() {
  return (
    <LoaderWrapper>
      <BallTriangle color="#24292f" height={100} width={100} />
    </LoaderWrapper>
  );
}
