import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // 使用 startsWith 判斷當前語言，更具彈性 (例如 'en-US' 也能匹配 'en')
  const isCurrentLang = (lng) => i18n.language.startsWith(lng);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <h1 className={styles.navTitle}>{t('navTitle')}</h1>
        <div className={styles.langSwitcher}>
          <span>{t('language')}: </span>
          <button 
            onClick={() => changeLanguage('en')} 
            className={isCurrentLang('en') ? styles.active : ''}
          >
            EN
          </button>
          <button 
            onClick={() => changeLanguage('zh')}
            className={isCurrentLang('zh') ? styles.active : ''}
          >
            繁中
          </button>
          {/* 新增日文按鈕 */}
          <button 
            onClick={() => changeLanguage('ja')}
            className={isCurrentLang('ja') ? styles.active : ''}
          >
            日本語
          </button>
          {/* 新增韓文按鈕 */}
          <button 
            onClick={() => changeLanguage('ko')}
            className={isCurrentLang('ko') ? styles.active : ''}
          >
            한국어
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;