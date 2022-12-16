import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { useSelector, useDispatch } from 'react-redux';

import styles from './Main.scss';
import ItemAwait from '../../components/ItemAwait';
import axios from 'axios';

const cx = classNames.bind(styles);

function ScreenMain() {
  return (
    <>
      <h1 className={cx('wrapper-screen-main , layout-main')}></h1>
      <ItemAwait inner></ItemAwait>
      <h1>Content</h1>
    </>
  );
}

export default ScreenMain;
