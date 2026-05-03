import { Navigate } from 'react-router-dom';
import { getAccessToken } from '../utils/token';

const ProtectedRoute = (props) => {
  const { children } = props;

  const token = getAccessToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
