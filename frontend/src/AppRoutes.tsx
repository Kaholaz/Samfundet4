import { Route, Routes } from 'react-router-dom';
import { useGoatCounter } from '~/hooks';
import {
  AboutPage,
  AdminPage,
  ApiTestingPage,
  ComponentPage,
  EventPage,
  EventsPage,
  GroupsPage,
  HealthPage,
  HomePage,
  InformationListPage,
  InformationPage,
  LoginPage,
  LychePage,
  NotFoundPage,
  RouteOverviewPage,
  SaksdokumenterPage,
} from '~/Pages';
import {
  ClosedPeriodAdminPage,
  ClosedPeriodFormAdminPage,
  EventCreatorAdminPage,
  EventsAdminPage,
  GangsAdminPage,
  GangsFormAdminPage,
  ImageAdminPage,
  ImageFormAdminPage,
  InformationAdminPage,
  InformationFormAdminPage,
  SaksdokumentFormAdminPage,
} from '~/PagesAdmin';
import { NavbarLayout } from './Components/Navbar';
import { SultenNavbarLayout } from './Components/SultenNavbar';
import { AdminLayout } from './PagesAdmin/AdminLayout/AdminLayout';
import { SaksdokumentAdminPage } from './PagesAdmin/SaksdokumentAdminPage';
import { ROUTES } from './routes';

export function AppRoutes() {
  // Must be called within <BrowserRouter> because it uses hook useLocation().
  useGoatCounter();

  return (
    <Routes>
      {/* 
          PUBLIC ROUTES
      */}
      <Route element={<NavbarLayout />}>
        <Route path={ROUTES.frontend.home} element={<HomePage />} />
        <Route path={ROUTES.frontend.about} element={<AboutPage />} />
        <Route path={ROUTES.frontend.health} element={<HealthPage />} />
        <Route path={ROUTES.frontend.components} element={<ComponentPage />} />
        <Route path={ROUTES.frontend.login} element={<LoginPage />} />
        <Route path={ROUTES.frontend.api_testing} element={<ApiTestingPage />} />
        <Route path={ROUTES.frontend.information_page_detail} element={<InformationPage />} />
        <Route path={ROUTES.frontend.information_page_list} element={<InformationListPage />} />
        <Route path={ROUTES.frontend.groups} element={<GroupsPage />} />
        <Route path={ROUTES.frontend.events} element={<EventsPage />} />
        <Route path={ROUTES.frontend.event} element={<EventPage />} />
        <Route path={ROUTES.frontend.saksdokumenter} element={<SaksdokumenterPage />} />
        <Route path={ROUTES.frontend.route_overview} element={<RouteOverviewPage />} />
      </Route>
      {/* 
            ADMIN ROUTES
      */}
      <Route element={<AdminLayout />}>
        <Route path={ROUTES.frontend.admin} element={<AdminPage />} />
        {/* Gangs */}
        <Route path={ROUTES.frontend.admin_gangs} element={<GangsAdminPage />} />
        <Route path={ROUTES.frontend.admin_gangs_create} element={<GangsFormAdminPage />} />
        <Route path={ROUTES.frontend.admin_gangs_edit} element={<GangsFormAdminPage />} />
        {/* Events */}
        <Route path={ROUTES.frontend.admin_events} element={<EventsAdminPage />} />
        <Route path={ROUTES.frontend.admin_events_create} element={<EventCreatorAdminPage />} />
        <Route path={ROUTES.frontend.admin_events_edit} element={<EventCreatorAdminPage />} />
        {/* Info pages */}
        <Route path={ROUTES.frontend.admin_information} element={<InformationAdminPage />} />
        <Route path={ROUTES.frontend.admin_information_create} element={<InformationFormAdminPage />} />
        <Route path={ROUTES.frontend.admin_information_edit} element={<InformationFormAdminPage />} />
        {/* Closed period */}
        <Route path={ROUTES.frontend.admin_closed} element={<ClosedPeriodAdminPage />} />
        <Route path={ROUTES.frontend.admin_closed_create} element={<ClosedPeriodFormAdminPage />} />
        <Route path={ROUTES.frontend.admin_closed_edit} element={<ClosedPeriodFormAdminPage />} />
        {/* Images */}
        <Route path={ROUTES.frontend.admin_images} element={<ImageAdminPage />} />
        <Route path={ROUTES.frontend.admin_images_create} element={<ImageFormAdminPage />} />
        {/* Saksdokumenter */}
        <Route path={ROUTES.frontend.admin_saksdokumenter_create} element={<SaksdokumentFormAdminPage />} />
        <Route path={ROUTES.frontend.admin_saksdokumenter_edit} element={<SaksdokumentFormAdminPage />} />
        <Route path={ROUTES.frontend.admin_saksdokumenter} element={<SaksdokumentAdminPage />} />
      </Route>
      {/* 
            SULTEN ROUTES
      */}
      <Route element={<SultenNavbarLayout />}>
        <Route path={ROUTES.frontend.sulten} element={<LychePage />} />
      </Route>
      {/* 
            404 NOT FOUND
      */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
