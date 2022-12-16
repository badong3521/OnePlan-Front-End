import classNames from 'classnames/bind';
import style from './Footer.scss';
const cx = classNames.bind(style);

function Footer() {
  return (
    <>
      <div className={cx('wrapper-footer')}>
        <h1>FooterScreen</h1>
      </div>
    </>
  );
}

export default Footer;
