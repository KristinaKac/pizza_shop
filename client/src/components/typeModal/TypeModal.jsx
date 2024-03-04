import React, { useState } from 'react';
import css from './TypeModal.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { createTypeThunk } from '../../redux/slices/admin';


const TypeModal = ({ showTypeModal, setShowTypeModal }) => {

    const dispatch = useDispatch();

    const [type, setType] = useState('');

    const handleClose = () => setShowTypeModal(false);

    const addType = () => {
        dispatch(createTypeThunk(type));
        handleClose();
        setType('');
    }

    return (
        <Modal show={showTypeModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Добавление нового типа</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <Form.Control
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                        placeholder="Введите наименование типа..."
                        aria-label="type"
                    />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Отмена
                </Button>
                <Button variant="primary" onClick={() => addType()}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default TypeModal;