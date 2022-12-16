import { ReactNode } from 'react';
import './GlobalStyle.scss';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}
function GlobalStyle({ children }: Props) {
  return <>{children}</>;
}

export default GlobalStyle;
