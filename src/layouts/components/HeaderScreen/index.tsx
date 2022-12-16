import { useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Header.scss';
// import Drawer, { RefModalPopup } from '../../../../src/components/Drawer';
import { Button, Drawer } from 'antd';

const cx = classNames.bind(styles);

function HeaderScreen({ drawerCheck }) {
  console.log('drawerCheck', drawerCheck);

  return (
    <>
      <div className={cx('wrapper-header')}>
        <a href="/">
          <h1 className={cx('header')}>Header</h1>
          {/* <div className={cx('image')}>
            <img src={images.logo} alt="Logo" className={cx('image-logo')} width={55} />
          </div> */}
        </a>
        <button
          onClick={() => {
            drawerCheck.current?.show();
          }}
        >
          OPEN DRAWER
        </button>
      </div>
    </>
  );
}

export default HeaderScreen;
