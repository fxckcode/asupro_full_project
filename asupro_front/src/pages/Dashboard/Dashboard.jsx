import Base from '../../layout/Base'
import './Dashboard.scss'
import { useEffect, useState } from 'react';
import getUser from '../../hooks/getUser';
import NavbarDash from './components/NavbarDash';
import TableProducts from './components/TableProducts';

function Dashboard() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function fetchUser() {
      const userData = await getUser();
      setUser(userData)
    }
    fetchUser();
  }, [])

  return (
    <Base title="Página principal | Asupro">
      <NavbarDash user={user} />
      <TableProducts />
    </Base>
  )
}

export default Dashboard