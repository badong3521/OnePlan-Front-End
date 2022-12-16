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

  //   const show = () => {
  //     setOpen(true);
  //   };

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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default forwardRef(DrawerScreen);
