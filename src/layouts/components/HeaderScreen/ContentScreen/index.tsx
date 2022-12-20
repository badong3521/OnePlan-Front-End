import { useState, useRef, useMemo } from 'react';
import { Button, Col, Input, Table, Row } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import classNames from 'classnames';

import Pause from '../../../../assets/svg/Pause';
import Play from '../../../../assets/svg/Play';
import ModalAddTask from '../components/ModalAddTask';
import { STATUS_WORD, TITLE_MODAL } from '../type';

import styles from '../../HeaderScreen/Header.scss';

interface DataType {
  key: React.ReactNode;
  name: string;
  dealine: string;
  expected: string;
  intendTime: string;
  subStaskList?: DataType[];
}
const data: DataType[] = [
  {
    key: 1,
    name: 'Thiết kế UX phần mềm quản lý công việc',
    dealine: '12/12/2022',
    expected: '8',
    intendTime: '08:23:29 ',
    subStaskList: [
      {
        key: 11,
        name: 'Nghiên cứu và phân tích user',
        dealine: '12/12/2022',
        expected: '8',
        intendTime: '08:23:29 ',
      },
    ],
  },
  {
    key: 2,
    name: 'Thiết kế UX phần mềm quản lý công việc sdsd',
    dealine: '12/12/2022',
    expected: '8',
    intendTime: '10:10:10',
    subStaskList: [],
  },
];
const cx = classNames.bind(styles);
const ContentScreen = ({ drawerCheck }: any) => {
  const clockRef: any = useRef();
  const [idSubTask, setIdSubTask] = useState();
  const [visible, setVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<TITLE_MODAL>(TITLE_MODAL.ADD_TASK);
  const [dataList, setDataList] = useState<any>(data);
  const [statusWord, setStatusWord] = useState<any>({
    status: STATUS_WORD.PAUSE_WORD,
  });
  const expandedRowRender = (e: any) => {
    const columns: any = [
      {
        title: 'Tên công việc',
        dataIndex: 'name',
        key: 'name',
        render: (value: any, record: any) => {
          return (
            <span
              onClick={() => {
                drawerCheck.current?.show();
                drawerCheck.current?.data(record);
              }}
              style={{
                cursor: 'pointer',
              }}
            >
              {value}
            </span>
          );
        },
      },
      {
        title: 'Hạn cuối',
        dataIndex: 'dealine',
        key: 'dealine',
        width: '20%',
      },
      {
        title: 'Dự kiến',
        dataIndex: 'expected',
        key: 'expected',
        width: '20%',
      },
      {
        title: 'THời gian thực tế',
        dataIndex: 'intendTime',
        key: 'intendTime',
        width: '20%',
        render: (value, record) => {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Button onClick={() => handelToggleStatusWord(record)}>
                {statusWord?.status == STATUS_WORD.PLAY_WORD && statusWord?.key == record.key ? (
                  <div className="content-btn-status">
                    <Pause />
                    <span style={{ fontWeight: '500' }}> Tạm dừng </span>
                  </div>
                ) : (
                  <div className="content-btn-status">
                    <Play />
                    Bắt đầu{' '}
                  </div>
                )}
              </Button>
              <span style={{ marginLeft: 10 }}>{record.intendTime}</span>
            </div>
          );
        },
      },
    ];
    return (
      <div>
        {e?.subStaskList && (
          <Table
            showHeader={false}
            columns={columns}
            dataSource={e?.subStaskList}
            pagination={false}
          />
        )}
        <Button
          className="btn-add-sub-task"
          onClick={() => {
            setTitle(TITLE_MODAL.ADD_SUB_TASK);
            setVisible(true);
            setIdSubTask(e.key);
          }}
        >
          + Thêm sub-task
        </Button>
      </div>
    );
  };
  const columns: ColumnsType<DataType> = useMemo(
    () => [
      {
        title: 'Tên công việc',
        dataIndex: 'name',
        key: 'name',
        render: (value: any, record: any) => {
          return (
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                drawerCheck.current?.show();
                drawerCheck.current?.data(record);
              }}
            >
              {value}
            </div>
          );
        },
      },
      {
        title: 'Hạn cuối',
        dataIndex: 'dealine',
        key: 'dealine',
        width: '20%',
      },
      {
        title: 'Dự kiến',
        dataIndex: 'expected',
        key: 'expected',
        width: '20%',
      },
      {
        title: 'Thời gian thực tế',
        dataIndex: 'intendTime',
        key: 'intendTime',
        width: '20%',
      },
    ],
    [statusWord],
  );

  const handelToggleStatusWord = (record: any) => {
    const newData = dataList.map((item) => item);
    setDataList(newData);
    setStatusWord({
      key: record?.key,
      status:
        statusWord?.status === STATUS_WORD.PLAY_WORD
          ? STATUS_WORD.PAUSE_WORD
          : STATUS_WORD.PLAY_WORD,
    });
    if (statusWord.status === STATUS_WORD.PAUSE_WORD) {
      clockRef.current.start();
    } else {
      clockRef.current.pause();
    }
  };
  const onSubmit = (values: any, titleModal: any) => {
    const formatDate = moment(values.dealine).format('DD-MM-YYYY');
    if (titleModal == TITLE_MODAL.ADD_TASK) {
      return setDataList([
        ...dataList,
        {
          key: Math.floor(Math.random() * 100),
          ...values,
          dealine: formatDate,
          intendTime: '',
          subStaskList: [],
        },
      ]);
    }
    if (titleModal == TITLE_MODAL.ADD_SUB_TASK) {
      const newData = dataList.map((items: any) => {
        if (items.key == idSubTask) {
          items.subStaskList = [
            ...items.subStaskList,
            {
              key: Math.floor(Math.random() * 100),
              ...values,
              dealine: formatDate,
              intendTime: '',
            },
          ];
        }
        return items;
      });
      setDataList(newData);
    }
  };
  return (
    <div className={cx('container')}>
      <div className={cx('work-list')}>
        <Table
          columns={columns}
          dataSource={dataList}
          expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
          footer={() => (
            <Button
              onClick={() => {
                setTitle(TITLE_MODAL.ADD_TASK);
                setVisible(true);
              }}
            >
              + Thêm Task
            </Button>
          )}
        />
      </div>
      <ModalAddTask
        visible={visible}
        title={title}
        onCancel={() => setVisible(false)}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ContentScreen;
