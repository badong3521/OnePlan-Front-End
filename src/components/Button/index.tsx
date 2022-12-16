import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({ to, href, buttonPrimary, buttonUpload, buttonSmall, buttonLarge, onClick, children, ...props }: any) {
  const customClasses = cx('wrapper', {
    buttonPrimary: buttonPrimary,
    buttonSmall: buttonSmall,
    buttonLarge: buttonLarge,
    buttonUpload: buttonUpload,
  });

  let Comp: any = 'button';

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Comp className={customClasses} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
