import classNames from 'classnames';
import styles from './Slider.scss';
import { images } from '../../../assets';
import { useSelector } from 'react-redux';
import { save } from '../../../utils/storage';

const cx = classNames.bind(styles);

export default function SliderScreen({ drawerCheck }) {
  const users = useSelector((state: any) => state);
  const { myReducer } = users;
  save('users', myReducer);

  return (
    <>
      <div className={cx('wrapper-sidebar')}>
        <div className={cx('container-sidebar')}>
          <div className={cx('information-user')}>
            <img className={cx('avatar')} src={images.logo} width={60} />
            <div className={cx('info')}>
              <p className={cx('name')}>{myReducer?.user_nicename}</p>
              <p className={cx('gmail')}>{myReducer?.user_email}</p>
            </div>
          </div>
          <div className={cx('group-company')}>
            <span className={cx('company')}>ONEBOX</span>
            <span className={cx('company')}>Infinity Valley</span>
            <span className={cx('company')}>Website</span>
          </div>
          <button className={cx('btn-new-task')}>
            <img className={cx('ic-plus')} src={images.icPlus} width={20} />
            <span className={cx('text-add')}>Thêm mới</span>
          </button>
        </div>
        <div className={cx('footer-sidebar')}>
          <span className={cx('noti')}>Thông báo</span>
          <span className={cx('setting')}>Cài đặt</span>
          <span className={cx('profile')}>Cá nhân</span>
        </div>
      </div>
    </>
  );
}
