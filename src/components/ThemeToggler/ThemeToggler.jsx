import React, { useEffect } from 'react';
import { useTheme } from 'hooks/use-theme';
import css from './palette.module.scss';

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const themeToggleLight = document.getElementById('light-theme-toggle');
    const themeToggleDark = document.getElementById('dark-theme-toggle');
    console.log(themeToggleLight);
    const dataValue = localStorage.getItem('app-theme');
    console.log(dataValue);
    if (dataValue === 'light') {
      themeToggleLight.style.display = 'none';
      themeToggleDark.style.display = 'block';
    } else {
      themeToggleDark.style.display = 'none';
      themeToggleLight.style.display = 'block';
    }
  }, [theme]);

  const handleLightThemeClick = () => {
    setTheme('light');
  };
  const handleDarkThemeClick = () => {
    setTheme('dark');
  };

  return (
    <div className="app__container">
      <button
        id="light-theme-toggle"
        className={css.btnLight}
        onClick={handleLightThemeClick}
      >
        <>
          <svg
            className="changeTheme"
            data-theme="light"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {' '}
            <path
              d="M9.32407 16C9.32407 19.6814 12.3187 22.676 16.0001 22.676C19.6814 22.676 22.6761 19.6814 22.6761 16C22.6761 12.3187 19.6814 9.32402 16.0001 9.32402C12.3187 9.32402 9.32407 12.3187 9.32407 16ZM16.0001 11.9907C18.2107 11.9907 20.0094 13.7894 20.0094 16C20.0094 18.2107 18.2107 20.0094 16.0001 20.0094C13.7894 20.0094 11.9907 18.2107 11.9907 16C11.9907 13.7894 13.7894 11.9907 16.0001 11.9907ZM14.6641 25.3334H17.3307V29.3334H14.6641V25.3334ZM14.6641 2.66669H17.3307V6.66669H14.6641V2.66669ZM2.66406 14.6667H6.66407V17.3334H2.66406V14.6667ZM25.3307 14.6667H29.3307V17.3334H25.3307V14.6667ZM5.6254 24.484L8.45207 21.6547L10.3387 23.54L7.51207 26.3694L5.6254 24.484ZM21.6534 8.45869L24.4827 5.62936L26.3681 7.51469L23.5387 10.344L21.6534 8.45869ZM8.45607 10.3454L5.62673 7.51602L7.5134 5.63069L10.3401 8.46002L8.45607 10.3454ZM26.3681 24.4854L24.4827 26.3707L21.6534 23.5414L23.5387 21.656L26.3681 24.4854Z"
              fill="#3E85F3"
            ></path>
          </svg>
        </>
      </button>
      <button
        id="dark-theme-toggle"
        className={css.btnDark}
        onClick={handleDarkThemeClick}
      >
        <>
          <svg
            className="changeTheme"
            data-theme="dark"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {' '}
            <path
              d="M27.6561 17.3933C26.7525 17.6333 25.8216 17.7547 24.8868 17.7546C22.0401 17.7546 19.3668 16.648 17.3588 14.64C16.0402 13.3138 15.0922 11.6651 14.6093 9.85837C14.1264 8.05161 14.1256 6.14985 14.6068 4.34264C14.6668 4.11669 14.6665 3.8789 14.6056 3.65314C14.5448 3.42738 14.4257 3.22157 14.2602 3.05638C14.0948 2.89119 13.8888 2.77241 13.6629 2.71196C13.4371 2.65151 13.1993 2.65152 12.9734 2.71198C10.711 3.31489 8.64683 4.50214 6.98809 6.15464C1.79075 11.352 1.79075 19.812 6.98809 25.012C8.22346 26.2542 9.69293 27.2391 11.3115 27.9097C12.93 28.5803 14.6655 28.9232 16.4174 28.9186C18.1689 28.9236 19.904 28.5809 21.5221 27.9105C23.1402 27.2402 24.6092 26.2554 25.8441 25.0133C27.4978 23.3542 28.6856 21.289 29.2881 19.0253C29.3479 18.7994 29.3474 18.5618 29.2866 18.3362C29.2259 18.1106 29.1069 17.9049 28.9417 17.7397C28.7765 17.5745 28.5708 17.4555 28.3452 17.3947C28.1196 17.334 27.8819 17.3335 27.6561 17.3933ZM23.9601 23.128C22.972 24.1214 21.7968 24.9091 20.5023 25.4453C19.2079 25.9815 17.8199 26.2557 16.4188 26.252C15.0171 26.2555 13.6287 25.981 12.3339 25.4446C11.039 24.9081 9.86327 24.1203 8.87475 23.1266C4.71742 18.968 4.71742 12.2 8.87475 8.04131C9.67809 7.23887 10.6055 6.57119 11.6214 6.06398C11.4727 7.98272 11.74 9.91095 12.4051 11.7169C13.0701 13.5228 14.1172 15.1639 15.4748 16.528C16.8358 17.8898 18.4764 18.9398 20.2831 19.6053C22.0898 20.2709 24.0195 20.5361 25.9388 20.3826C25.4288 21.3968 24.7609 22.3235 23.9601 23.128Z"
              fill="#3E85F3"
            ></path>
          </svg>
        </>
      </button>
    </div>
  );
}
