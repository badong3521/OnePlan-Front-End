import { useState, useMemo } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import classNames from 'classnames';

import Pause from '../../../../assets/svg/Pause';
import Play from '../../../../assets/svg/Play';
import ModalAddTask from '../components/ModalAddTask';
import { STATUS_WORK, TITLE_MODAL } from '../type';
import { FiCornerDownRight } from 'react-icons/fi';

import styles from '../../HeaderScreen/Header.scss';

interface DataType {
  key: React.ReactNode | undefined;
  name: string | undefined;
  deadline: string | undefined;
  expected: string | undefined;
  intendTime: string | undefined;
  subTaskList?: DataType[] | undefined;
}
const data: DataType[] = [
  {
    key: 1,
    name: 'Thiết kế UX phần mềm quản lý công việc',
    deadline: '12/12/2022',
    expected: '8',
    intendTime: '---',
    subTaskList: [
      {
        key: 11,
        name: 'Nghiên cứu và phân tích user',
        deadline: '12/12/2022',
        expected: '8',
        intendTime: '---',
      },
    ],
  },
  {
    key: 2,
    name: 'Thiết kế UI quản lý công việc',
    deadline: '12/12/2022',
    expected: '8',
    intendTime: '---',
    subTaskList: [],
  },
];
const cx = classNames.bind(styles);
const ContentScreen = ({ drawerCheck }: any) => {
  const [idSubTask, setIdSubTask] = useState<any>();
  const [visible, setVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<TITLE_MODAL>(TITLE_MODAL.ADD_TASK);
  const [dataList, setDataList] = useState<any>(data);
  const [statusWork, setStatusWork] = useState<any>({
    status: STATUS_WORK.PAUSE_WORK,
  });

  const expandedRowRender = (itemListTotal: DataType) => {
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
        dataIndex: 'deadline',
        key: 'deadline',
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
              <Button onClick={() => handelToggleStatusWork(record)}>
                {statusWork?.status == STATUS_WORK.PLAY_WORK && statusWork?.key == record.key ? (
                  <div className="content-btn-status">
                    <Pause />
                    <span style={{ fontWeight: '500', marginLeft: 10 }}> Tạm dừng </span>
                  </div>
                ) : (
                  <div className="content-btn-status">
                    <Play />
                    <span style={{ fontWeight: '500', marginLeft: 10 }}>Bắt đầu </span>
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
        {itemListTotal?.subTaskList && (
          <>
            <Table
              showHeader={false}
              columns={columns}
              dataSource={itemListTotal?.subTaskList}
              pagination={false}
              // loading={true}
            />
          </>
        )}
        <Button
          className="btn-add-sub-task"
          onClick={() => {
            setTitle(TITLE_MODAL.ADD_SUB_TASK);
            setVisible(true);
            setIdSubTask(itemListTotal.key);
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
        dataIndex: 'deadline',
        key: 'deadline',
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
    [statusWork],
  );

  const handelToggleStatusWork = (record: any) => {
    const newData = dataList.map((item) => item);
    setDataList(newData);
    setStatusWork({
      key: record?.key,
      status:
        statusWork?.status === STATUS_WORK.PLAY_WORK
          ? STATUS_WORK.PAUSE_WORK
          : STATUS_WORK.PLAY_WORK,
    });
  };
  const onSubmit = (values: any, titleModal: any) => {
    const formatDate = moment(values.deadline).format('DD-MM-YYYY');
    if (titleModal == TITLE_MODAL.ADD_TASK) {
      return setDataList([
        ...dataList,
        {
          key: Math.floor(Math.random() * 100),
          ...values,
          deadline: formatDate,
          intendTime: '',
          subTaskList: [],
        },
      ]);
    }
    if (titleModal == TITLE_MODAL.ADD_SUB_TASK) {
      const newData = dataList.map((items: any) => {
        if (items.key == idSubTask) {
          items.subTaskList = [
            ...items.subTaskList,
            {
              key: Math.floor(Math.random() * 100),
              ...values,
              deadline: formatDate,
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
