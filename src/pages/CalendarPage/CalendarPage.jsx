import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import CalendarToolbar from 'components/CalendarToolbar/CalendarToolbar';
import css from './calendar-page.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/tasks/tasksOperations';
import { getAccessToken } from 'redux/auth/authSelectors';
import { logOutThunk } from 'redux/auth/authOperations';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(getAccessToken);

  useEffect(() => {
     token &&  dispatch(fetchTasks())
     .catch((error) => {
        if (error.status === "401"){
          dispatch(logOutThunk());
        }
      }
    );
  }, [dispatch, token]);

  return (
    <div className={css.calendarPageContainer}>
      <CalendarToolbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default CalendarPage;
