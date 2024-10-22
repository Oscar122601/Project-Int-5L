import React, { useState } from 'react';
import LogoFruver from '../assets/logo-fruver.png'

import appfirebase from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {
    const [registrando, setRegistrando] = useState(false)

    const autenticacion =async(e) => {
        e.preventDefault();
        const correo = e.target.username.value;
        const contraseña = e.target.password.value;
        
        if(registrando){
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        }
        else{
            await signInWithEmailAndPassword(auth, correo, contraseña)
        }
    }

  return (
    <div className="login-page">
      <div className="login-container">
        <img
          src={LogoFruver}
          alt="Logo"
          className="logo-login"
        />
        <h1>Iniciar Sesión</h1>
        <form onSubmit={autenticacion}>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Ingrese su usuario"
          />

          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
          />

          <button type="submit">Ingresar</button>
        </form>
      </div>
      {/* Link a FontAwesome para iconos */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
    </div>
  );
};

export default Login;
