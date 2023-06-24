//import './App.css';
import React from "react";
import "./main.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../Header/Header";

const Login = (props) => {
  return (
    <>
      <Header />
      <div class="container-log">
          <div class="col-6">
            <div className="Auth-form-container">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">LOGIN</h3>
                  <div className="form-group mt-3">
                    <label>Nombre de Usuario: </label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="@Carlos21$"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Contraseña</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Contraseña"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                  <a type="submit" href="/UserProfile" class="btn btn-primary btn-lg" role="button">Comenzar</a>
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
