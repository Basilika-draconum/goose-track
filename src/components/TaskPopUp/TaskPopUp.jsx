import React, { useState } from 'react';
import { TimePicker, Radio } from 'antd';
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
    console.log(e.target.value);
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
          <Radio.Group onChange={onChangePriority} value={priority}>
            <Radio value={'low'}>Low</Radio>
            <Radio value={'medium'}>Medium</Radio>
            <Radio value={'high'}>High</Radio>
          </Radio.Group>
          <button type="submit">+ Add</button>
          <button type="button">Cancel</button>
          <button type="button">X</button>
        </form>
      </div>
    </div>
  );
}

export default TaskPopUp;
