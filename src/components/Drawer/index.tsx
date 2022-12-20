import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './drawer.scss';
import { Button, Drawer } from 'antd';
import { FaRegClock } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';
import { Input } from 'antd';
import StopWatch from '../StopWatch';

const { TextArea } = Input;

const cx = classNames.bind(styles);

export interface RefModalPopup {
  data: any;
  show: () => void;
  close: () => void;
}

const DrawerScreen: ForwardRefRenderFunction<RefModalPopup> = ({}, ref) => {
  const [data, setData] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);

  const onClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    data: (value: any) => {
      setData(value);
    },
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
          <p className={cx('title-header')}>{data?.name}</p>
          <div className={cx('container-drawer')}>
            <div className={cx('group-text')}>
              <span className={cx('group-left')}>
                <FiCalendar
                  color="#555555"
                  className={cx('ic-deadline')}
                  style={{ margin: 10 }}
                  size="20"
                />
                <span className={cx('deadline-text')}>Hạn cuối</span>
              </span>
              <span className={cx('deadline')}>{data?.dealine}</span>
            </div>
            <div className={cx('group-text')}>
              <span className={cx('group-left')}>
                <FaRegClock
                  color="#555555"
                  className={cx('ic-deadline')}
                  style={{ margin: 10 }}
                  size="20"
                />
                <span className={cx('deadline-text')}>Thời gian thực hiện</span>
              </span>
              <span className={cx('deadline')}>{data?.expected}h</span>
            </div>
          </div>
          <div className={cx('details-work-container')}>
            <div className={cx('details-title')}>Mô tả chi tiết công việc</div>
            <div className={cx('input-work')}>
              <TextArea rows={4} autoSize={{ minRows: 4 }} />
            </div>
          </div>
          <div className={cx('details-work-container')}>
            <div className={cx('details-title')}>Thời gian làm việc</div>
            <div className={cx('input-work')}>
              <StopWatch />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default forwardRef(DrawerScreen);
