import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './TempleModal.module.css';

const TempleModal = ({ temple, onClose }) => {
  const { t } = useTranslation();

  if (!temple) return null;

  const milestones = t(`${temple.translationKey}.milestones`, { returnObjects: true });

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <img src={temple.image} alt={t(`${temple.translationKey}.name`)} className={styles.templeImage} />
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.templeName}>{t(`${temple.translationKey}.name`)}</h2>
            <a 
              href={temple.googleMapUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.navButton}
            >
              {t('navigation.button', 'Navigate')}
            </a>
          </div>
          <p className={styles.location}>{t(`${temple.translationKey}.location`)}</p>
          
          <div className={styles.section}>
            <p><strong>{t(`${temple.translationKey}.background`)}</strong></p>
          </div>

          <div className={styles.section}>
            <h3>{t(`${temple.translationKey}.milestonesTitle`)}</h3>
            <ul className={styles.list}>
              {Array.isArray(milestones) && milestones.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3>{t(`${temple.translationKey}.architectureTitle`)}</h3>
            <p>{t(`${temple.translationKey}.architecture`)}</p>
          </div>

          <div className={styles.section}>
            <h3>{t(`${temple.translationKey}.deitiesTitle`)}</h3>
            <p>{t(`${temple.translationKey}.deities`)}</p>
          </div>

          {/* --- 新增區塊開始 --- */}
          {/* 歷史樣貌區塊 */}
          {temple.historicalImage && (
            <div className={styles.mediaSection}>
              <h3>{t('historicalViewTitle')}</h3>
              <img src={temple.historicalImage} alt={t('historicalViewTitle')} className={styles.historicalImage} />
            </div>
          )}

          {/* AR 影片區塊 */}
          {temple.arVideo && (
            <div className={styles.mediaSection}>
              <h3>{t('arSimulationTitle')}</h3>
              <video 
                src={temple.arVideo} 
                className={styles.arVideo} 
                controls 
                muted 
                autoPlay 
                loop
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {/* --- 新增區塊結束 --- */}

        </div>
      </div>
    </div>
  );
};

export default TempleModal;