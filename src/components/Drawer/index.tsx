import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './drawer.scss';
import { Button, Drawer, Input } from 'antd';
import { TITLE_MODAL } from 'layouts/components/HeaderScreen/type';
import ModalAddTask from 'layouts/components/HeaderScreen/components/ModalAddTask';
import IconMenu from 'assets/svg/IconMenu';
import IconDealine from '../../assets/svg/IconDealine.svg';
import IconTime from '../../assets/svg/IconTime.svg';
import Plus from '../../assets/svg/Plus.svg';
import Pause from 'assets/svg/Pause';
import Play from 'assets/svg/Play';

const cx = classNames.bind(styles);

export interface RefModalPopup {
  data: any;
  show: () => void;
  close: () => void;
}

const DrawerScreen: ForwardRefRenderFunction<RefModalPopup> = ({}, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<any>();

  const onSubmit = (values: any, titleModal: any) => {
    console.log('ss', data);
  };

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
      <Drawer title={data?.name} placement="right" onClose={onClose} open={open}>
        <div className={cx('wrapper-drawer')}>
          {data?.subStaskList?.length <= 0 && (
            <div className={cx('wrapper-wordChild')}>
              <div className={cx('wordChild-detail')}>
                <div className={cx('header-detail')}>
                  <IconMenu />
                  <span className={cx('text-header')}>{data?.name}</span>
                </div>
                <div className={cx('content-detail')}>
                  <Pause width="126" height="126" />
                  <div className={cx('wrapper-counter')}>
                    <div className={cx('counter')}>
                      <b>{data?.intendTime}</b> / {data?.expected}:00:00
                    </div>
                    <Button type="primary">Hoàn thành</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={cx('wrapper-dealine')}>
            <div className={cx('dealine-label')}>
              <img src={IconDealine} />
              <span className="text-label">Hạn cuối</span>
            </div>
            <div className={cx('dealine-content')}>
              <span className="text-content">{data?.dealine}</span>
            </div>
          </div>
          <div className={cx('wrapper-dealine')}>
            <div className={cx('dealine-label')}>
              <img src={IconTime} />
              <span className="text-label">Thời gian thực hiện</span>
            </div>
            <div className={cx('dealine-content')}>
              <span className="text-content">{data?.expected} giờ</span>
            </div>
          </div>
          <div className={cx('wrapper-describeDetail')}>
            <h3>Mô tả chi tiết</h3>
            <Input.TextArea
              rows={3}
              autoSize={{ minRows: 3 }}
              className={cx('describeDetail-content')}
            />
          </div>
          <div className={cx('wrapper-wordChild')}>
            <div className={cx('header')}>
              <h3>Công việc con</h3>
              <img src={Plus} className={cx('btn-add')} onClick={() => setVisible(true)} />
            </div>
            {data?.subStaskList?.length > 0 && (
              <>
                {dataDetail && (
                  <div className={cx('wordChild-detail')}>
                    <div className={cx('header-detail')}>
                      <IconMenu />
                      <span className={cx('text-header')}>{dataDetail?.name}</span>
                    </div>
                    <div className={cx('content-detail')}>
                      <Pause width="126" height="126" />
                      <div className={cx('wrapper-counter')}>
                        <div className={cx('counter')}>
                          <b>{dataDetail?.intendTime}</b> / {dataDetail?.expected}:00:00
                        </div>
                        <Button type="primary">Hoàn thành</Button>
                      </div>
                    </div>
                  </div>
                )}
                <div className={cx('wordChild-list')}>
                  {data?.subStaskList &&
                    data?.subStaskList?.map((item: any) => (
                      <div
                        className={cx('wrapper-wordChild-item')}
                        key={item.key}
                        onClick={() => setDataDetail(item)}
                      >
                        <IconMenu />
                        <div className={cx('wordChild-item')}>
                          <div className={cx('content')}>
                            <div>{item?.name}</div>
                            <div>
                              {item?.expected}h • {item?.dealine}
                            </div>
                          </div>
                          <div className={cx('btn-status')}>
                            <Play />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
        <ModalAddTask
          visible={visible}
          title={TITLE_MODAL.ADD_SUB_TASK}
          onCancel={() => setVisible(false)}
          onSubmit={onSubmit}
        />
      </Drawer>
    </>
  );
};

export default forwardRef(DrawerScreen);
