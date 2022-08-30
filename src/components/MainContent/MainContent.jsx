import { Main } from './MainContentStyled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import LoaderBallTriangle from 'components/Loader/Loader';

export default function MainContent() {
  return (
    <Main>
      <Suspense fullback={<LoaderBallTriangle />}>
        <Outlet />
      </Suspense>
    </Main>
  );
}
