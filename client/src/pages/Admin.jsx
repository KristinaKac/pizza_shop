import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import TypeModal from '../components/typeModal/TypeModal';
import ProductModal from '../components/productModal/ProductModal';
import ProductRemoveModal from '../components/productRemoveModal/ProductRemoveModal';

const Admin = () => {
    const [showTypeModal, setShowTypeModal] = useState(false);
    const [showProductModal, setShowProductModal] = useState(false);
    const [showRemoveProductModal, setShowRemoveProductModal] = useState(false);

    return (
        <div>
            <Button onClick={() => setShowTypeModal(true)} variant="primary">Добавить тип</Button>
            <Button onClick={() => setShowProductModal(true)} variant="primary">Добавить продукт</Button>
            <Button onClick={() => setShowRemoveProductModal(true)} variant="primary">Удалить продукт</Button>
            <TypeModal showTypeModal={showTypeModal} setShowTypeModal={setShowTypeModal} />
            <ProductModal showProductModal={showProductModal} setShowProductModal={setShowProductModal} />
            <ProductRemoveModal showRemoveProductModal={showRemoveProductModal} setShowRemoveProductModal={setShowRemoveProductModal} />
        </div>
    )
}
export default Admin;