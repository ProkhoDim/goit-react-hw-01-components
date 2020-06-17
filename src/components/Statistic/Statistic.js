import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }) => {
          const RandomColor = () => {
            let rndmColorArr = [];
            while (rndmColorArr.length < 3) {
              rndmColorArr.push(Math.floor(Math.random() * 256));
            }
            return `rgb(${rndmColorArr.join(',')})`;
          };
          return (
            <li
              key={id}
              className={styles.listItem}
              style={{ backgroundColor: RandomColor() }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistics;
