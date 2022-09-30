import { HealthPage, AboutPage, HomePage } from 'Pages';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.frontend.home} element={<HomePage />} />
      <Route path={ROUTES.frontend.about} element={<AboutPage />} />
      <Route path={ROUTES.frontend.health} element={<HealthPage />} />
    </Routes>
  );
}
