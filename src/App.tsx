import { Suspense } from 'react';

import FallbackLoading from '@components/FallbackLoading';
import Header from '@components/Header';
import AppRouter from '@src/AppRouter';
import useFetchData from '@src/hooks/useFetchData';

const App = () => {
  useFetchData();

  return (
    <div>
      <Header />
      <Suspense fallback={<FallbackLoading />}>
        <AppRouter />
      </Suspense>
    </div>
  );
};

export default App;
