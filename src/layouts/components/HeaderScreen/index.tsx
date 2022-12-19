import classNames from 'classnames';
import styles from './Header.scss';
import { images } from '../../../assets';
import SearchInput from './components/SearchInput';

const cx = classNames.bind(styles);

function HeaderScreen({ drawerCheck }) {
  console.log('drawerCheck', drawerCheck);

  return (
    <>
      <div className={cx('wrapper-header')}>
        <div className={cx('logo')}>
          <img src={images.textOnebox} width={230} className={cx('logo-img')} />
          <SearchInput />
        </div>
        <div className={cx('btn-group')}>
          <button className={cx('btn-export-report')}>Xuất báo cáo</button>
          <button className={cx('btn-import-excel')}>Thêm báo cáo</button>
        </div>

        {/* <button
          onClick={() => {
            drawerCheck.current?.show();
          }}
        >
          OPEN DRAWER
        </button> */}
      </div>
    </>
  );
}

export default HeaderScreen;
