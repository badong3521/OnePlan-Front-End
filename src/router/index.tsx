//LayoutOnly
import ScreenMain from '../pages/Screens';
import LoginScreen from '../feature/LoginScreen';
//Page

const NoThingsRoute = () => {
  return (
    <main
      style={{
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '600px',
      }}
    >
      <h1>There's nothing ROUTE here!</h1>
    </main>
  );
};

interface Page {
  layout: boolean;
  path: string;
  component: any;
}

const publicRoutes: Page[] = [
  { path: '*', component: NoThingsRoute, layout: false },
  { path: '/', component: ScreenMain, layout: true },
  { path: '/login', component: LoginScreen, layout: false },
];

const privateRoutes: never[] = [];

export { publicRoutes, privateRoutes };
