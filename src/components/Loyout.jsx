import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <section className="p-2 min-h-screen bg-gray-400 text-white">
        <Outlet />
      </section>
    </div>
  );
};
export default Layout;
