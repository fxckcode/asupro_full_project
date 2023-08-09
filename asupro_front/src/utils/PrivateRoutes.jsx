import { useEffect, useState } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import axiosClient from '../axios-client';
import '../scss__components/Loading.scss'

function PrivateRoutes() {
  let localStorageUser;
  try {
    localStorageUser = JSON.parse(localStorage.getItem('user'));
  } catch {
    localStorageUser = null;
  }

  const [backendUser, setBackendUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosClient.get('/user');
        setBackendUser(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        navigate('/login')
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return <div className='loading__page'>
      <div className="content__loading">
        Cargando...
      </div>
    </div>; // Puedes cambiar esto por tu componente de carga
  }

  if (localStorageUser && JSON.stringify(localStorageUser) === JSON.stringify(backendUser)) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoutes;