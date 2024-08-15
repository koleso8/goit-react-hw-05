import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex">
      <ul className="flex justify-between gap-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink></NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
