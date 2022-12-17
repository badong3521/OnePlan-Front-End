import { ReactNode, useRef } from 'react';
import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import HeaderScreen from '../components/HeaderScreen';
import FooterScreen from '../components/FooterScreen';
import SliderScreen from '../components/SliderScreen';
import Drawer, { RefModalPopup } from '../../../src/components/Drawer';
import { Col, Row } from 'antd';
interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const cx = classNames.bind(style);

function DefaultLayout({ children }: Props) {
  const Layout = {
    colSlider: 5,
    colContent: 19,
  };

  const drawerCheck = useRef<RefModalPopup>(null);

  return (
    <>
      <div className={cx('wrapper')}>
        <Row>
          <Col span={Layout.colSlider}>
            <SliderScreen />
          </Col>
          <Col span={Layout.colContent}>
            <HeaderScreen drawerCheck={drawerCheck} />
          </Col>
        </Row>
      </div>
      <Drawer ref={drawerCheck} />
    </>
  );
}

export default DefaultLayout;
