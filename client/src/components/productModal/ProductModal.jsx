import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { createProductThunk, getAllTypesThunk } from '../../redux/slices/admin';
import ListGroup from 'react-bootstrap/ListGroup';


const ProductModal = ({ showProductModal, setShowProductModal }) => {

    const dispatch = useDispatch();
    const types = useSelector((state) => state.adminReducer.types);

    const [selectedType, setSelectedType] = useState('1');
    const [inputname, setInputName] = useState('');
    const [inputPrice, setInputPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    const handleClose = () => setShowProductModal(false);

    const addProduct = () => {
        const formData = new FormData();
        formData.append('name', inputname);
        formData.append('price', `${inputPrice}`);
        formData.append('img', file);
        formData.append('info', JSON.stringify(info));
        formData.append('typeId', selectedType);
        console.log(formData)
        dispatch(createProductThunk(formData));
    }

    useEffect(() => {
        dispatch(getAllTypesThunk());
    }, []);

    const selectFile = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    }

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: performance.now() }]);
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i));
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }

    return (
        <Modal show={showProductModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Добавление нового продукта</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicSelectType">
                        <Form.Label>Тип</Form.Label>
                        <Form.Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                            {types && types.items &&
                                types.items.map(type =>
                                    <option value={type.id}>{type.name}</option>
                                )
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNameProduct">
                        <Form.Label>Название продукта</Form.Label>
                        <Form.Control
                            value={inputname}
                            onChange={(e) => setInputName(e.target.value)}
                            type="text" placeholder="Введите название продукта..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPriceProduct">
                        <Form.Label>Стоимость продукта</Form.Label>
                        <Form.Control
                            value={inputPrice}
                            onChange={(e) => setInputPrice(e.target.value)}
                            type="number" placeholder="Введите стоимость продукта..." />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Фото продукта</Form.Label>
                        <Form.Control
                            onChange={selectFile}
                            type="file" />
                    </Form.Group>

                    <Button onClick={() => addInfo()} variant="secondary">
                        Добавить новое свойство
                    </Button>

                    <ListGroup>
                        {info.length && info.map(i =>
                            <ListGroup.Item>
                                <Form.Group className="mb-3" controlId="formBasicCharacteristicName">
                                    <Form.Control
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                        type="text" placeholder="Введите название..." />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCharacteristicDescription">
                                    <Form.Control
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                        type="text" placeholder="Введите описание..." />
                                </Form.Group>

                                <Button variant="secondary" onClick={() => removeInfo(i.number)}>
                                    Удалить
                                </Button>
                            </ListGroup.Item>
                        )
                        }
                    </ListGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Отмена
                </Button>
                <Button onClick={() => addProduct()} variant="primary">
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ProductModal;