import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import LoaderOval from 'components/Loader/Loader';
import { Box } from 'components/Box';

export default function MainContent() {
  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      minHeight="100vh"
    >
      <Suspense fullback={<LoaderOval />}>
        <Outlet />
      </Suspense>
    </Box>
  );
}
