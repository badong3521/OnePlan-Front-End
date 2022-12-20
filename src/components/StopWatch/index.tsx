/* eslint-disable @typescript-eslint/no-shadow */
// import { FaRegClock } from 'react-icons/fa';
import useTimer from '../../hook/useTimer';
import { formatTime } from '../../hook/formatTime';
import styles from './StopWatch.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const StopWatch = () => {
  //   const increment = useRef<any>(null);

  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } =
    useTimer(0);

  return (
    <div className={cx('wrapper-stopwatch')}>
      <div className={cx('stopwatch-card')}>
        <p className={cx('timer')}>{formatTime(timer)}</p>
        <div className={cx('buttons')}>
          {!isActive && !isPaused ? (
            <button className={cx('btn-clock')} onClick={handleStart}>
              Bắt đầu
            </button>
          ) : isPaused ? (
            <button className={cx('btn-clock')} onClick={handlePause}>
              Dừng
            </button>
          ) : (
            <button className={cx('btn-clock')} onClick={handleResume}>
              Tiếp tục
            </button>
          )}
          <button className={cx('btn-clock')} onClick={handleReset} disabled={!isActive}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
