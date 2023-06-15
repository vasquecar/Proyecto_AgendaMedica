//import './App.css';
import React from "react";
import "./style.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../Header/Header";

const login = (props) => {
  return (
    <>
      <Header />
      <div>
        <div class="form-box">
          <div class="header-text">Login Form</div>
          <input placeholder="Correo electronic" type="text" />
          <input placeholder="Contraseña" type="password" />
          <input id="terms" type="checkbox" />
          <label for="terms"></label>
          <span>
            <a href="#">Acepto Terminos Y CCondiciones </a>
          </span>
          <div class="pt-4">
            <button class="button button2">Continuar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
