import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "./header.css";
import logo from "../Header/logoNav.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const [showHomeModal, setShowHomeModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showServicesModal, setShowServicesModal] = useState(false);

  const handleHomeModalOpen = () => {
    setShowHomeModal(true);
  };

  const handleHomeModalClose = () => {
    setShowHomeModal(false);
  };

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
      <nav id="nav">
        <a>
          <img
            src={logo}
            width="100"
            height="100"
            fill="none"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </a>
          <ul id="navbar1">
            <li className="nav-item">
              <button
                className="navbar-brand Item"
                onClick={handleHomeModalOpen}
              >
                Home
              </button>
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
          <button id="logout-btn"
                  className="btn btn-red btn-background my-3 my-sm-0"
                  type="submit"
                >
                  <a href="/Login">
                  <FontAwesomeIcon icon={faCircleXmark} style={{color: "#b30000",}} />
                  </a>
                </button>
      </nav>

      <HomeModal show={showHomeModal} handleClose={handleHomeModalClose} />

      <AboutModal show={showAboutModal} handleClose={handleAboutModalClose} />

      <ServicesModal
        show={showServicesModal}
        handleClose={handleServicesModalClose}
      />
    </div>
  );
};

const HomeModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>Descripción</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Somos una empresa dedicada al servicio social y que busca un estado de
          salud adecuado para cada individuo.
        </p>
      </Modal.Body>
      <Modal.Header>
        <Modal.Title>Misión y Visión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>*Generar una organización adecuada para la toma de medicamentos.</p>
        <p>*Cuidar la salud de las personas a través de un buen sitio web.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
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
          <a href="/ExamRegistration">Registro de exámenes</a>
        </p>
        <p>
          <a href="/MedicationSchedule">Control de horario de medicamentos</a>
        </p>
        <p>
          <a href="/ExpensesTable">Control de gastos</a>
        </p>
        <p>
          <a href="/GraphicResults">Representación gráfica de estadísticas</a>
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
