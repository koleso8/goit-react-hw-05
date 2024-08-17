import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2 className="text-red-500">Page Not Found</h2>
      <Link to="/">to Home</Link>
    </div>
  );
};

export default NotFound;
