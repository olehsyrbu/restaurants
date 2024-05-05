import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const RestaurantsPage = lazy(() => import('@src/pages/RestaurantsPage'));
const RestaurantDetailPage = lazy(
  () => import('@src/pages/RestaurantDetailPage')
);
const NotFoundPage = lazy(() => import('@src/pages/NotFoundPage'));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/restaurants">
        <Route index element={<RestaurantsPage />} />
        <Route path=":id" element={<RestaurantDetailPage />} />
      </Route>
      <Route path="/" element={<Navigate to="/restaurants" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default AppRouter;
