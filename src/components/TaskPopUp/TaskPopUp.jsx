import React, { useState } from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import style from './TaskPopUp.module.scss';

function TaskPopUp() {
  const format = 'H:mm';

  const [start, setStart] = useState(dayjs('09:00', format));
  const [end, setEnd] = useState(dayjs('12:00', format));
  const [priority, setPriority] = useState('low');

  const onChangeStart = (time, valueString) => {
    setStart(dayjs(valueString, format));
  };

  const onChangeEnd = (time, valueString) => {
    setEnd(dayjs(valueString, format));
  };

  const onChangePriority = e => {
    setPriority(e.target.value);
  };

  return (
    <div className={style.backdrop}>
      <div className={style.popup}>
        <form action="" className={style.popupForm}>
          <label htmlFor="start" className={style.titleLabel}>
            <p>Title</p>
            <input type="text" name="title" />
          </label>
          <div className={style.timePickersWrapper}>
            <label htmlFor="title" className={style.timePickerLabel}>
              <p>Start</p>
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
              <p>End</p>
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
          <div className={style.buttonWrapper}>
            <button type="submit" className={style.submitButton}>
              <span></span>Add
            </button>
            <button type="button" className={style.cancelButton}>
              Cancel
            </button>
          </div>

          <button type="button" className={style.closeButton}></button>
        </form>
      </div>
    </div>
  );
}

export default TaskPopUp;
