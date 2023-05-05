import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import CalendarToolbar from 'components/CalendarToolbar/CalendarToolbar';
import css from './calendar-page.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/tasks/tasksOperations';
//import { getUser } from 'redux/auth/authSelectors';
import { getAccessToken } from '../../redux/auth/authSelectors';

const CalendarPage = () => {
  const dispatch = useDispatch();
  //const isUser  = useSelector(getUser);
  const token = useSelector(getAccessToken);

  useEffect(() => {
    if (!token)  return 
    dispatch(fetchTasks());
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
