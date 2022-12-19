import { Input } from 'antd';
import classNames from 'classnames';
import styles from './SearchInput.scss';

const cx = classNames.bind(styles);

const { Search } = Input;

export default function SearchInput() {
  return (
    <div className={cx('wrapper-search')}>
      <div className={cx('input-search')}>
        <Search
          placeholder="input search text"
          onSearch={(value) => console.log(value)}
          style={{ width: 214 }}
        />
      </div>
      <button className={cx('btn-filter')}>Lọc nâng cao</button>
    </div>
  );
}
