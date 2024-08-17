import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <section className="p-2 min-h-screen bg-zinc-900 text-white ">
        <Outlet />
      </section>
    </div>
  );
};
export default Layout;
