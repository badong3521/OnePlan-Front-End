import React from 'react';
import classNames from 'classnames';
// import Drawer, { RefModalPopup } from '../../../../src/components/Drawer';
import { images } from '../../../assets';
import ContentScreen from './ContentScreen';
import SearchInput from './components/SearchInput';

import styles from './Header.scss';
const cx = classNames.bind(styles);

function HeaderScreen({ drawerCheck }) {
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
      </div>
      <ContentScreen drawerCheck={drawerCheck} />
    </>
  );
}

export default HeaderScreen;
