import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './drawer.scss';
import { Button, Drawer } from 'antd';
import { images } from '../../assets/index';
import { FaRegClock } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';

const cx = classNames.bind(styles);

export interface RefModalPopup {
  show: () => void;
  close: () => void;
}

const DrawerScreen: ForwardRefRenderFunction<RefModalPopup> = ({}, ref) => {
  const [open, setOpen] = useState<boolean>(false);

  const onClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    show: () => {
      setOpen(true);
    },
    close: () => {
      setOpen(false);
    },
  }));
  return (
    <>
      <Drawer placement="right" onClose={onClose} open={open} width={470} closable={false}>
        <div className={cx('wrapper-drawer')}>
          <p className={cx('title-header')}>Thiết kế UX phần mềm quản lý công việc</p>
          <div className={cx('container-drawer')}>
            <div className={cx('group-text')}>
              <span className={cx('group-left')}>
                <FiCalendar className={cx('ic-deadline')} style={{ padding: 10 }} size="20" />
                <span className={cx('deadline-text')}>Hạn cuối</span>
              </span>
              <span className={cx('deadline')}>12/12/2022</span>
            </div>
            <div className={cx('group-text')}>
              <span className={cx('group-left')}>
                <FiCalendar className={cx('ic-deadline')} style={{ padding: 10 }} size="20" />
                <span className={cx('deadline-text')}>Hạn cuối</span>
              </span>
              <span className={cx('deadline')}>12/12/2022</span>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default forwardRef(DrawerScreen);
