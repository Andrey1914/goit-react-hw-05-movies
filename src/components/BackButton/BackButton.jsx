import { GoBackBtn, ArrowBack } from './BackButtonStyled';
import { useNavigate } from 'react-router-dom';

export default function GoBackButton({ location }) {
  const navigate = useNavigate();
  // console.log(useNavigate());
  return (
    <GoBackBtn
      onClick={() => {
        navigate(location?.state?.from ?? '/');
      }}
    >
      <ArrowBack />
      Go Back
    </GoBackBtn>
  );
}
