import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from 'react-bootstrap';
import "./main.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showServicesModal, setShowServicesModal] = useState(false);

  const handleAboutModalOpen = () => {
    setShowAboutModal(true);
  };

  const handleAboutModalClose = () => {
    setShowAboutModal(false);
  };

  const handleServicesModalOpen = () => {
    setShowServicesModal(true);
  };

  const handleServicesModalClose = () => {
    setShowServicesModal(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md" id="nav">
        <Link className="navbar-brand Item" to="/" target="_self">
          <img
            src="/docs/4.3/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Healthy Pocket
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand Item" to="/" target="_self">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="navbar-brand Item"
                onClick={handleAboutModalOpen}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button
                className="navbar-brand Item"
                onClick={handleServicesModalOpen}
              >
                Services
              </button>
            </li>
          </ul>
          <div className="container">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-3"></div>
              <div className="col-6">
                <ul className="navbar-nav">
                  <li>
                    <div className="Item">
                      <input
                        className="form-control mr-sm-2 pl-5"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <button
                        className="btn btn-light btn-background my-2 my-sm-0"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <AboutModal
        show={showAboutModal}
        handleClose={handleAboutModalClose}
      />

      <ServicesModal
        show={showServicesModal}
        handleClose={handleServicesModalClose}
      />
    </div>
  );
};

const AboutModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>¿Quiénes somos?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Somos un equipo de ingenieros comprometidos con el impacto social.
          Ponemos a disposición esta herramienta con el objetivo de generar
          buenos hábitos y llevar un control de los medicamentos que se
          consumen, así como recordar las citas médicas a los usuarios.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const ServicesModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Nuestros servicios</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <a href="/UserProfile">Perfil del usuario</a>
        </p>
        <p>
          <a href="/Pendiente">Registro de exámenes</a>
        </p>
        <p>
          <a href="/MedicationSchedule">Control de horario de medicamentos</a>
        </p>
        <p>
          <a href="/ExpensesTable">Control de gastos</a>
        </p>
        <p>
          <a href="/Pendiente">Historial médico y de exámenes</a>
        </p>
        <p>
          <a href="/Pendiente">Representación gráfica de estadísticas</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


export default Header;
