import { Link, useNavigate } from 'react-router-dom';
import Base from '../../layout/Base';
import './Login.scss';
import { useState } from 'react';
import axiosClient from '../../axios-client';
function Login() {
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const response = await axiosClient.post('/auth/login', { email, password });
        const { user, token } = response.data;

        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        navigate("/dashboard");
    } catch (error) {
        setErrorMessage(true);
    }
  }

  const handleError = (e) => {
    e.preventDefault();
    setErrorMessage(false)
  }
  return (
    <Base title="Asupro | Login">
        <div className='login__contain'>
            <div className="card__login">
                <h2 className='text-center'>Asupro Colombia S.A.S <br /> Iniciar Sesión</h2>
                <form action="" method="POST" className='form__login' onSubmit={handleLogin}>
                    {errorMessage && (
                        <div className="error">
                            <div className='close__error' onClick={handleError}>
                                x
                            </div>
                            <div className='error__message'>
                                Credenciales erroneas
                            </div>
                        </div>
                    )}
                    <div className="row">
                        <label htmlFor="email">Correo:</label>
                        <input type="email" name='email' id='email' placeholder='Correo Electrónico' required/>
                    </div>
                    <div className="row">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" name='password' id='password' placeholder='Contraseña' required/>
                    </div>
                    <button type='submit' className='btn__login'>Iniciar Sesión</button>
                </form>
                <hr />
                <p className='text-center'>o</p>
                <hr />
                <Link to="/registro" className='btn__login'>
                    <span>Registrarse</span>
                </Link>
            </div>
        </div>
    </Base>
  )
}

export default Login