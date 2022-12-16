import classNames from 'classnames';
import Loader from '../../components/Loader';
import { ReactNode } from 'react';
import './ItemAwait.scss';

interface ItemAwaitPropsType {
  className?: string;
  children?: ReactNode;
  loading?: boolean;
  inner?: boolean;
}

function ItemAwait(props: ItemAwaitPropsType) {
  const { className, children, loading = false, inner = false } = props;
  const loadingStyle = {
    height: 'calc(100vh - 165px)',
    overflow: 'hidden',
  };

  return (
    <div
      className={classNames('ItemAwait', className, {
        'content-inner': inner,
      })}
      style={loading ? loadingStyle : undefined}
    >
      {loading ? <Loader /> : undefined}
      {children}
    </div>
  );
}

export default ItemAwait;
