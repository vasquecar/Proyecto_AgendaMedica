import React, { useState } from "react";
import "./expenses.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../Header/Header.js";

const ExpensesTable = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ name: "", amount: "", description: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [expenseToDeleteIndex, setExpenseToDeleteIndex] = useState(null);

  const handleInputChange = (event) => {
    setNewExpense({ ...newExpense, [event.target.name]: event.target.value });
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleAddExpense = () => {
    if (newExpense.name && newExpense.amount >= 0) {
      if (editIndex !== null) {
        const updatedExpenses = [...expenses];
        updatedExpenses[editIndex] = { ...newExpense };
        setExpenses(updatedExpenses);
        setNewExpense({ name: "", amount: "", description: "" });
        setShowModal(false);
        setEditIndex(null);
      } else {
        setExpenses([...expenses, { ...newExpense }]);
        setNewExpense({ name: "", amount: "", description: "" });
        setShowModal(false);
      }
    }
  };

  const handleEditExpense = (index) => {
    setEditIndex(index);
    setNewExpense({ ...expenses[index] });
    setShowModal(true);
  };

  const handleDeleteExpense = (index) => {
    setExpenseToDeleteIndex(index);
    setShowDeleteConfirmation(true);
  };

  const confirmDeleteExpense = () => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(expenseToDeleteIndex, 1);
    setExpenses(updatedExpenses);
    setShowDeleteConfirmation(false);
  };

  const closeModal = () => {
    setNewExpense({ name: "", amount: "", description: "" });
    setShowModal(false);
    setEditIndex(null);
  };

  // Filtrado por nombre
  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredExpenses.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredExpenses.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header/>
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
            <th>Gasto</th>
            <th>Nombre</th>
            <th>Valor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((expense, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{expense.name}</td>
              <td>${expense.amount}</td>
              <td>
                <Button variant="primary" onClick={() => handleEditExpense(index)}>
                  Modificar
                </Button>{" "}
                <Button variant="danger" onClick={() => handleDeleteExpense(index)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredExpenses.length > itemsPerPage && (
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

      <div className="add-expense-button">
        <Button variant="success" onClick={() => setShowModal(true)}>
          Agregar Gasto
        </Button>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? "Modificar Gasto" : "Agregar Gasto"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formName">
            <Form.Label className="modal-form-label">Gasto</Form.Label>
            <Form.Control type="text" name="name" value={newExpense.name} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group controlId="formAmount">
            <Form.Label className="modal-form-label">Valor</Form.Label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <Form.Control
                type="number"
                name="amount"
                value={newExpense.amount}
                onChange={handleInputChange}
                min="0"
              />
            </div>
          </Form.Group>
          {editIndex !== null && (
            <Form.Group controlId="formDescription">
              <Form.Label className="modal-form-label">Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newExpense.description}
                onChange={handleInputChange}
              />
            </Form.Group>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleAddExpense}>
            {editIndex !== null ? "Guardar" : "Agregar"}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteConfirmation} onHide={() => setShowDeleteConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Estás seguro de que quieres eliminar este gasto?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteConfirmation(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={confirmDeleteExpense}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExpensesTable;
