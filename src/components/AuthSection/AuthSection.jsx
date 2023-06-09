import React from 'react';
import { Link } from 'react-router-dom';
import style from './authSection.module.scss';
import logo from '../../images/goose-start.png';
import authsvg from '../../images/Icon.png';

export const AuthSection = () => {
  return (
    <section className={style.authSection}>
      {/* <div className="container"> */}
        <div className={style.authConteiner}>
          <img className={style.logofoto} src={logo} alt="goose" />
          <h2 className={style.logotitle}>
            G<span>oo</span>seTrack
          </h2>
          <div className={style.linkWrapper}>
            <Link className={style.login} to="/login">
              <span className={style.logSpan}>Log in</span>
              <img className={style.logIcon} src={authsvg} alt="auth" />
            </Link>
            <Link className={style.singup} to="/register">
              Sign Up
              {/* <svgLogin>
              <use href={icon + '#icon-log-out'}></use>
            </svgLogin> */}
            </Link>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};
