import classNames from 'classnames';
import styles from './Header.scss';
import type { ColumnsType } from 'antd/es/table';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
// import Drawer, { RefModalPopup } from '../../../../src/components/Drawer';
import { STATUS_WORK } from '../../../utils/StatusWork';
import { Button, Col, Drawer, Input, Table, Row } from 'antd';
import ModalAddTask from './components/ModalAddTask';
interface DataType {
  key: React.ReactNode;
  name: string;
  deadline: string;
  expected: string;
  intendTime: string;
  subtaskList?: DataType[];
}

const data: DataType[] = [
  {
    key: 1,
    name: 'Thiết kế UX phần mềm quản lý công việc',
    deadline: '12/12/2022',
    expected: '8',
    intendTime: '08:23:29 ',
    subtaskList: [
      {
        key: 11,
        name: 'Nghiên cứu và phân tích user',
        deadline: '12/12/2022',
        expected: '8',
        intendTime: '08:23:29 ',
      },
    ],
  },
  {
    key: 2,
    name: 'Thiết kế UX phần mềm quản lý công việc sdsd',
    deadline: '12/12/2022',
    expected: '8',
    intendTime: '08:23:29 ',
  },
];
import { images } from '../../../assets';
import SearchInput from './components/SearchInput';
import { useState } from 'react';

const cx = classNames.bind(styles);

function HeaderScreen({ drawerCheck }) {
  const [visible, setVisible] = useState<boolean>(true);
  const [dataList, setDataList] = useState<any>(data);
  const [statusWork, setStatusWork] = useState<any>();

  const expandedRowRender = (e: any) => {
    const columns: any = [
      {
        title: 'Tên công việc',
        dataIndex: 'name',
        key: 'name',
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
            <>
              <Button onClick={() => handelToggleStatusWork(record)}>
                {statusWork?.status == STATUS_WORK && statusWork?.key == record.key ? (
                  <>
                    <PlayCircleOutlined />
                    Bắt đầu{' '}
                  </>
                ) : (
                  <>
                    <PauseCircleOutlined />
                    Tạm dừng{' '}
                  </>
                )}
              </Button>
              <span>{value}</span>
            </>
          );
        },
      },
    ];
    return (
      <div>
        {e?.subtaskList && (
          <Table
            showHeader={false}
            columns={columns}
            dataSource={e?.subtaskList}
            pagination={false}
          />
        )}
        <Button className="btn-add-sub-tas">+ Thêm sub-task</Button>
      </div>
    );
  };
  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên công việc',
      dataIndex: 'name',
      key: 'name',
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
    },
  ];

  const handelToggleStatusWork = (record: any) => {
    const newData = dataList.map((item) => item);
    console.log('new', newData);
    setDataList(newData);
    setStatusWork({
      key: record?.key,
      status:
        statusWork?.status === STATUS_WORK.PLAY_WORK
          ? STATUS_WORK.PAUSE_WORK
          : STATUS_WORK.PLAY_WORK,
    });
  };

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
        <button onClick={() => drawerCheck?.current?.show()}>Drawer Open</button>
      {/* <div className={cx('container')}>
        <div className={cx('work-list')}>
          <Table
            columns={columns}
            dataSource={data}
            expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
            footer={() => <Button onClick={() => setVisible(true)}>+ Thêm Task</Button>}
          />
        </div>
      </div>
      <ModalAddTask visible={visible} onCancel={() => setVisible(false)} /> */}
    </>
  );
}

export default HeaderScreen;
