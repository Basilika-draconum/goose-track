import React, { useState } from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import Notiflix from 'notiflix';
import { isModalEditShownAction } from 'redux/tasks/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import close from '../../images/close.svg';

import { selectArrTasks } from 'redux/tasks/tasksSelectors';

import style from './TaskForm.module.scss';
import { addTask } from 'redux/tasks/tasksOperations';
import { selectDate } from 'redux/date/dateSelectors';
import { useEffect } from 'react';

function TaskPopUp({ task, closeModal, type }) {
  const currentDate = useSelector(selectDate);
  const [start, setStart] = useState(
    task ? task.start : dayjs(`${currentDate} 9:00`)
  );
  const [end, setEnd] = useState(
    task ? task.end : dayjs(`${currentDate} 12:00`)
  );
  const [priority, setPriority] = useState(()=>task ? task.priority : 'low');
  const [title, setTitle] = useState(task ? task.title : '');

  useEffect(()=>{
    setStart(dayjs(`${currentDate} 9:00`));
    setEnd(dayjs(`${currentDate} 12:00`));
  },[currentDate])

  const dispatch = useDispatch();

  const chooseProgressType = type => {
    if (type === 'To do') {
      return 'toDo';
    }
    if (type === 'In progress') {
      return 'inProgress';
    }
    if (type === 'Done') {
      return 'done';
    }
  };

  const onChangeStart = (time, valueString) => {
    setStart(dayjs(`${currentDate} ${valueString}`));
  };

  const onChangeEnd = (time, valueString) => {
    setEnd(dayjs(`${currentDate} ${valueString}`));
  };

  const onChangePriority = e => {
    setPriority(e.target.value);
  };

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const filterTasks = useSelector(selectArrTasks);
  const handleAdd = e => {
    e.preventDefault();
    const status = chooseProgressType(type);
    const data = {
      date: {
        start: start.toISOString(),
        end: end.toISOString(),
      },
      priority,
      title,
      status,
    };
    if (
      filterTasks.find(task => task.title.toLowerCase() === title.toLowerCase())
    ) {
      Notiflix.Notify.failure(`${title} is already added.`);
      return;
    }
    console.log(data);
    dispatch(addTask(data))
      .unwrap()
      .then(() => hadleCloseModal());

    setTitle('');
  };

  const handleCancel = () => {
    isModalEditShownAction(false);
  };

  const hadleCloseModal = () => {
    closeModal(false);
  };

  return (
    <>
      {/* <Modal active={activateModal} setActive={setActivateModal}> */}
      {/* <div className={style.backdrop}>
        <div className={style.popup}> */}
      <form action="" className={style.popupForm} onSubmit={handleAdd}>
        <label htmlFor="start" className={style.titleLabel}>
          <p className={style.title}>Title</p>
          <input
            name="title"
            type="text"
            placeholder="Enter text"
            value={title}
            onChange={onChangeTitle}
          />
        </label>
        <div className={style.timePickersWrapper}>
          <label htmlFor="title" className={style.timePickerLabel}>
            <p className={style.start}>Start</p>
            <TimePicker
              name="start"
              onChange={onChangeStart}
              value={start}
              format={'H:mm'}
              minuteStep={5}
              suffixIcon={false}
              clearIcon={false}
              className={style.timePicker}
              placement="bottomLeft"
            />
          </label>
          <label htmlFor="end" className={style.timePickerLabel}>
            <p className={style.end}>End</p>
            <TimePicker
              name="end"
              onChange={onChangeEnd}
              value={end}
              format={'H:mm'}
              minuteStep={5}
              suffixIcon={false}
              clearIcon={false}
              className={style.timePicker}
            />
          </label>
        </div>
        <div className={style.radioGroup}>
          <div className={style.radioButton}>
            <input
              type="radio"
              id="low"
              name="priority"
              value="low"
              onChange={onChangePriority}
              className={style.radioInput}
            />
            <label htmlFor="low" id="low">
              Low
            </label>
          </div>
          <div className={style.radioButton}>
            <input
              type="radio"
              id="medium"
              name="priority"
              value="medium"
              onChange={onChangePriority}
              className={style.radioInput}
            />
            <label htmlFor="medium" id="medium">
              Medium
            </label>
          </div>
          <div className={style.radioButton}>
            <input
              type="radio"
              id="high"
              name="priority"
              value="high"
              onChange={onChangePriority}
              className={style.radioInput}
            />
            <label htmlFor="high" id="high">
              High
            </label>
          </div>
        </div>
        {!task ? (
          <div className={style.buttonWrapper}>
            <button
              type="submit"
              className={style.submitButton}
              // onClick={handleAdd}
            >
              <span className={style.plus}>+</span>Add
            </button>
            <button
              type="button"
              className={style.cancelButton}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button type="button" className={style.editButton}>
            Edit
          </button>
        )}
        <button
          type="button"
          onClick={hadleCloseModal}
          className={style.closeButton}
        >
          <img src={close} alt="close" />
        </button>
      </form>
      {/* </div>
      </div> */}
      {/* </Modal> */}
    </>
  );
}

export default TaskPopUp;

// export const addTask = createAsyncThunk(
//   'task/addTask',
//   async (tasksData, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/task', { ...tasksData });
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addTask = createAsyncThunk(
//   'task/addTask',
//   async (tasksData, thunkAPI) => {
//     try {
//       const response = await fetch('/task', {
//         method: 'POST',
//         body: JSON.stringify(tasksData),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = await response.json();
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
