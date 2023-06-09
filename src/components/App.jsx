import MainLayout from '../components/MainLayout/MainLayout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken } from 'redux/auth/authSelectors';
import { getCurrentUserThunk } from 'redux/auth/authOperations';

import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const ChoosedMonth = lazy(() => import('./ChoosedMonth/ChoosedMonth'));
const ChoosedDay = lazy(() => import('./ChoosedDay/ChoosedDay'));
const CalendarPage = lazy(() => import('./../pages/CalendarPage/CalendarPage'));

const RegisterPage = lazy(() => import('../pages/AuthPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/AuthPage/LoginPage'));
const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const StartPage = lazy(() => import('../pages/StartPage/StartPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getAccessToken);

  useEffect(() => {
    token && dispatch(getCurrentUserThunk());
  }, [dispatch, token]);

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<PublicRoute component={<StartPage />} />} />
        <Route
          path="/login"
          element={<PublicRoute component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={<RegisterPage />} />}
        />
        <Route path="/" element={<PrivateRoute component={<MainLayout />} />}>
          <Route path="/account" element={<AccountPage />} />
          <Route path="/calendar" element={<CalendarPage />}>
            <Route path="month/:currentDate" element={<ChoosedMonth />} />
            <Route path="day/:currentDay" element={<ChoosedDay />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
