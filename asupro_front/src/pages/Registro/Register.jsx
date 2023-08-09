import Base from "../../layout/Base"
import { Link, useNavigate } from 'react-router-dom';
import './Register.scss'
import { useState } from "react";
import axiosClient from "../../axios-client";

function Register() {
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
        nombre: e.target.nombre.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    try {
        const response = await axiosClient.post('/auth/register', data);
        const { user, token } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        navigate("/dashboard");
    } catch (error) {
        setErrorMessage(true)
    }
  }

  const handleError = (e) => {
    e.preventDefault();
    setErrorMessage(false)
  }
  return (
    <Base title="Asupro | Registro">
        <div className='register__contain'>
            <div className="card__sign_up">
                <h2 className="text-center">Asupro Colombia S.A.S <br /> Registro</h2>
                <form action="" className='form__login' onSubmit={handleLogin}>
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
                        <label htmlFor="nombre">Nombre de Usuario:</label>
                        <input type="text" name='nombre' id='nombre' placeholder='Nombre de Usuario' required/>
                    </div>
                    <div className="row">
                        <label htmlFor="email">Correo:</label>
                        <input type="email" name='email' id='email' placeholder='Correo Electrónico' required/>
                    </div>
                    <div className="row">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" name='password' id='password' placeholder='Contraseña' required/>
                    </div>
                    <button type='submit' className='btn__login'>Registrarse</button>
                </form>
                <hr />
                <p className='text-center'>o</p>
                <hr />
                <Link to="/login" className='btn__login'>
                    <span>Iniciar Sesión</span>
                </Link>
            </div>
        </div>
    </Base>
  )
}

export default Register