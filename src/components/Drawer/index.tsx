import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './drawer.scss';
import { Button, Drawer } from 'antd';

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
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <div className={cx('wrapper-drawer')}></div>
      </Drawer>
    </>
  );
};

export default forwardRef(DrawerScreen);
