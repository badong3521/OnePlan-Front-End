import classNames from 'classnames/bind';
import style from './Loader.scss';

const cx = classNames.bind(style);
function Loader() {
  return <div className={cx('loader')}></div>;
}

export default Loader;
