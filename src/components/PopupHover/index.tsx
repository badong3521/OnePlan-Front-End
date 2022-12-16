import style from './Popup.scss';
import classNames from 'classnames/bind';

type Props = {
  listNames?: any;
  style?: any;
};

const cx = classNames.bind(style);
// eslint-disable-next-line @typescript-eslint/no-shadow
function PopupHover({ listNames, style }: Props) {
  return (
    <div className={cx('wrapper-pop-hover', style)}>
      <ul>
        {listNames.map((nameNav: any, index: any) => (
          <li key={index} className={cx('navName')}>
            {nameNav.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopupHover;
