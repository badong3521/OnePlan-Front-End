import { memo, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MdHorizontalRule } from 'react-icons/md';
import classNames from 'classnames/bind';

import style from './DropDown.scss';

const cx = classNames.bind(style);

function DropDown() {
  const [dropDown, setDropDown] = useState<boolean>(false);

  return (
    <>
      {dropDown ? (
        <MdHorizontalRule onMouseLeave={() => setDropDown(false)} className={cx('icon-hover')} />
      ) : (
        <FaChevronDown onMouseEnter={() => setDropDown(true)} className={cx('icon-hover')} />
      )}
    </>
  );
}

export default DropDown;
