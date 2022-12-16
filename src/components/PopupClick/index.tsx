import style from './PopClick.scss';
import classNames from 'classnames/bind';
import { about } from '../../dataFake';
type Props = {
  listNames?: any;
  style?: any;
};

const cx = classNames.bind(style);
// eslint-disable-next-line @typescript-eslint/no-shadow
function PopupClick({ listNames, style }: Props) {
  return (
    <div className={cx('wrapper-model-click')}>
      <ul className={cx('pop')}>
        {about.map((item, index) => {
          return (
            <li key={index} className={cx('pop-item')}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PopupClick;
