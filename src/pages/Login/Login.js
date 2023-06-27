import React, { useState } from "react";
import "./main.css";
import { BrowserRouter as Router, Route, Navigate  } from 'react-router-dom';


const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const API_URL = "http://localhost:25060/api/Login/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, contraseña: password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.message === "Usuario Encontrado,Bienvenido") {
          console.log("Inicio de sesión exitoso");
          setIsAuthorized(true);
          //aqui 
        } else {
          console.log("Credenciales inválidas");
        }
      } else {
        console.log("Error en el servidor:", response.status);
      }
    } catch (error) {
      console.log("Error en el servidor:", error.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to="/UserProfile" />;
  }

  return (
    <>
      <div className="container-log">
        <div className="col-6">
          <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">LOGIN</h3>
                <div className="form-group mt-3">
                  <label>Nombre de Usuario: </label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="@Carlos21$"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Comenzar
                  </button>
                </div>
                <p className="forgot-password text-right mt-2">
                  Olvidaste tu Contraseña? <a href="#">Click Aqui</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
