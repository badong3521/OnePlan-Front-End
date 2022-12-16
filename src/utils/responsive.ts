import { useMediaQuery } from 'react-responsive';

const isDesktop = useMediaQuery({
  query: '(min-width: 1224px)',
});

const isTablet = useMediaQuery({
  query: '(max-width: 1224px)',
});

export const isMobile = useMediaQuery({
  query: '(max-width: 786px)',
});
export const Desktop = ({ children }) => {
  return isDesktop ? children : null;
};
export const Tablet = ({ children }) => {
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  return isMobile ? children : null;
};

// export const Default = ({ children }) => {
//   const isNotMobile = useMediaQuery({ minWidth: 768 });
//   return isNotMobile ? children : null;
// };
