import React, { useState } from "react";
import "./examregistration.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../Header/Header.js";
import "../Header/header.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExamRegistration = () => {
  const [exam, setExam] = useState([]);
  const [newExam, setNewExam] = useState({ name: "", date: null, description: "", selectedDate: null });
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [examToDeleteIndex, setExamToDeleteIndex] = useState(null);

  const handleInputChange = (event) => {
    if (event.target.name === "date") {
      setNewExam({ ...newExam, date: event.target.value, selectedDate: new Date(event.target.value) });
    } else {
      setNewExam({ ...newExam, [event.target.name]: event.target.value });
    }
  };

  const handleDateChange = (date) => {
    setNewExam({ ...newExam, selectedDate: date });
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleAddExam = () => {
    if (newExam.name && newExam.selectedDate) {
      if (editIndex !== null) {
        const updatedExam = [...exam];
        updatedExam[editIndex] = { ...newExam };
        setExam(updatedExam);
        setNewExam({ name: "", date: null, description: "", selectedDate: null });
        setShowModal(false);
        setEditIndex(null);
      } else {
        setExam([...exam, { ...newExam }]);
        setNewExam({ name: "", date: null, description: "", selectedDate: null });
        setShowModal(false);
      }
    }
  };

  const handleEditExam = (index) => {
    setEditIndex(index);
    setNewExam({ ...exam[index] });
    setShowModal(true);
  };

  const handleDeleteExam = (index) => {
    setExamToDeleteIndex(index);
    setShowDeleteConfirmation(true);
  };

  const confirmDeleteExam = () => {
    const updatedExam = [...exam];
    updatedExam.splice(examToDeleteIndex, 1);
    setExam(updatedExam);
    setShowDeleteConfirmation(false);
  };

  const closeModal = () => {
    setNewExam({ name: "", date: null, description: "", selectedDate: null });
    setShowModal(false);
    setEditIndex(null);
  };

  // Filtrado por nombre
  const filteredExam = exam.filter((exam) =>
    exam.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredExam.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredExam.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header/>
      <h1 className="text-center mb-4">Exam Registration</h1>

      <Form.Group controlId="formSearch">
        <Form.Control
          type="text"
          placeholder="Buscar por nombre"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </Form.Group>

      <table>
        <thead>
          <tr>
            <th>Examen</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((exam, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{exam.name}</td>
              <td>{exam.selectedDate ? exam.selectedDate.toDateString() : ""}</td>
              <td>
                <Button variant="primary" onClick={() => handleEditExam(index)}>
                  Detalles
                </Button>{" "}
                <Button variant="danger" onClick={() => handleDeleteExam(index)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredExam.length > itemsPerPage && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <Button
              key={number}
              variant={currentPage === number ? "primary" : "outline-primary"}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </Button>
          ))}
        </div>
      )}

      <div className="add-exam-button">
        <Button variant="success" onClick={() => setShowModal(true)}>
          Agregar Examen
        </Button>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? "Detalles Examen" : "Actualizar Examen"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formName">
            <Form.Label className="modal-form-label">Examen</Form.Label>
            <Form.Control type="text" name="name" value={newExam.name} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label className="modal-form-label">Fecha</Form.Label>
            <br />
            <DatePicker
              selected={newExam.selectedDate}
              onChange={(date) => handleDateChange(date)}
              dateFormat="yyyy-MM-dd"
              className="form-control"
            />
          </Form.Group>
          {editIndex !== null && (
            <div>
              <Form.Group controlId="formLocation">
                <Form.Label className="modal-form-label">Lugar de realización</Form.Label>
                <Form.Control type="text" name="location" value={newExam.location} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="formDoctor">
                <Form.Label className="modal-form-label">Doctor que lo realizó</Form.Label>
                <Form.Control type="text" name="doctor" value={newExam.doctor} onChange={handleInputChange} />
              </Form.Group>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleAddExam}>
            {editIndex !== null ? "Guardar" : "Agregar"}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteConfirmation} onHide={() => setShowDeleteConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Estás seguro de que quieres eliminar este Examen?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteConfirmation(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={confirmDeleteExam}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExamRegistration;
