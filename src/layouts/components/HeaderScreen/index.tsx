import { useState } from 'react';
import classNames from 'classnames';
import styles from './Header.scss';
import type { ColumnsType } from 'antd/es/table';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
// import Drawer, { RefModalPopup } from '../../../../src/components/Drawer';
import { STATUS_WORD } from './type';
import { Button, Col, Drawer, Input, Table, Row } from 'antd';
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
    intendTime: '08:23:29 ',
  },
];
import { images } from '../../../assets';
import SearchInput from './components/SearchInput';

const cx = classNames.bind(styles);

function HeaderScreen({ drawerCheck }) {
  const expandedRowRender = (e: any) => {
    const columns: any = [
      {
        title: 'Tên công việc',
        dataIndex: 'name',
        key: 'name',
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
            <>
              <Button onClick={() => handelToggleStatusWord(record)}>
                {statusWord?.status == STATUS_WORD.PLAY_WORD && statusWord?.key == record.key ? (
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
        {e?.subStaskList && (
          <Table
            showHeader={false}
            columns={columns}
            dataSource={e?.subStaskList}
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
    },
  ];

  const [dataList, setDataList] = useState<any>(data);
  const [statusWord, setStatusWord] = useState<any>();

  const handelToggleStatusWord = (record: any) => {
    const newData = dataList.map((item) => item);
    console.log('new', newData);
    setDataList(newData);
    setStatusWord({
      key: record?.key,
      status:
        statusWord?.status === STATUS_WORD.PLAY_WORD
          ? STATUS_WORD.PAUSE_WORD
          : STATUS_WORD.PLAY_WORD,
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
      <div className={cx('container')}>
        <div className={cx('work-list')}>
          <Table
            columns={columns}
            dataSource={data}
            expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
            footer={() => <Button>+ Thêm Task</Button>}
          />
        </div>
      </div>
    </>
  );
}

export default HeaderScreen;
