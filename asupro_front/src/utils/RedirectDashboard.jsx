import { useState, useEffect } from "react";
import { useNavigate, Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axios-client";
import '../scss__components/Loading.scss'
function RedirectDashboard() {
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
    return <Navigate to="/dashboard" />;
  } else {
    return <Outlet />;
  }
}


export default RedirectDashboard