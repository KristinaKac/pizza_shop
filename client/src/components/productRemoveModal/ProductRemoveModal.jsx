import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../redux/slices/basket';
import { removeProductThunk } from '../../redux/slices/admin';


const ProductRemoveModal = ({ showRemoveProductModal, setShowRemoveProductModal }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsThunk());
    }, []);

    const products = useSelector((state) => state.basketReducer.products);

    const [selectedProduct, setSelectedProduct] = useState('1');

    const handleClose = () => setShowRemoveProductModal(false);

    const removeProduct = () => {
        dispatch(removeProductThunk(selectedProduct));
        handleClose();
        setSelectedProduct('1');
    }

    return (
        <Modal show={showRemoveProductModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Удаление продукта</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicSelectType">
                    <Form.Label>Выберите продукт</Form.Label>
                    <Form.Select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                        {products && products.items &&
                            products.items.map(product =>
                                <option value={product.id}>{product.name}</option>
                            )
                        }
                    </Form.Select>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Отмена
                </Button>
                <Button variant="primary" onClick={() => removeProduct()}>
                    Удалить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ProductRemoveModal;